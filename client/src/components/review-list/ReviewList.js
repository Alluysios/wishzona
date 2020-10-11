import React from 'react';
import './ReviewList.scss';

import ReviewItem from '../review-item/ReviewItem';
import Divider from '../divider/Divider';

const ReviewList = ({ reviews }) => {
    return (
        <React.Fragment>
            <h2 className='review-list-heading'>Reviews</h2>
            <Divider />
            <div className='review-list'>
                {
                    reviews.map(review => 
                        <React.Fragment key={review._id}>
                            <ReviewItem review={review} />
                        </React.Fragment>    
                    )
                }
            </div>
            
        </React.Fragment>
    )
}

export default ReviewList;
