import React, {Fragment} from 'react';
import Moment from 'react-moment';
import './ReviewItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ review }) => {

    const renderStarRating = (review) => {
        let stars = [];
        for (let i = 0; i < review.rating; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} size='2x' color='#FF9529' />)
        }
        return stars;
    }

    return (
        <React.Fragment>
            {
                review ? <Fragment>
                    <div className='review'>
                        <p className='review__user'>{review.user.firstname}</p>
                        <span className="review__rating">
                            {
                                renderStarRating(review)
                            }
                        </span>
                        <p className='review__content'>{review.review}</p>
                        <p className="review__date"><Moment format="YYYY/MM/DD">{review.createdAt}</Moment></p>
                    </div>
                </Fragment>
                : null
            }
        </React.Fragment>
    )
}

export default ReviewItem;
