import React, {Fragment} from 'react';
import Moment from 'react-moment';
import './ReviewItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ review }) => {
    return (
        <React.Fragment>
            {
                review ? <Fragment>
                    <div className='review'>
                        <p className='review__user'>{review.user.firstname}</p>
                        <span className="review__rating">
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <FontAwesomeIcon icon={faStarHalfAlt} size='2x' color='#FF9529' />
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
