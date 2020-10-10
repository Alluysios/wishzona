import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ReviewForm.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import FormButton from '../formbutton/FormButton';

import { writeReview } from '../../actions/product.action';

const ReviewForm = ({ writeReview, id }) => {
    const [showForm, setShowForm] = useState(false);
    const [showRating, setShowRating] = useState(true);

    const [formData, setFormData] = useState({
        review: 0,
        rating: 0
    })

    const show = (rating) => {
        setShowForm(true);
        setShowRating(false);
        setFormData({ ...formData, rating: rating})
    }

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        writeReview(formData, id)
    }

    return (
        <form className='form--review reviews' onSubmit={handleSubmit}>
            <h1 className='reviews__heading'>Rate Product</h1>
            {
                showRating ?
                    <span className="reviews__rating">
                        <span onClick={() => show(1)} className='reviews__rating-star'>
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <span className='reviews__rating-number'>1</span>
                        </span>
                        <span onClick={() => show(2)} className='reviews__rating-star'>
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <span className='reviews__rating-number'>2</span>
                        </span>
                        <span onClick={() => show(3)} className='reviews__rating-star'>
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <span className='reviews__rating-number'>3</span>
                        </span>
                        <span onClick={() => show(4)} className='reviews__rating-star'>
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <span className='reviews__rating-number'>4</span>
                            </span>
                        <span onClick={() => show(5)} className='reviews__rating-star'>
                            <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                            <span className='reviews__rating-number'>5</span>
                        </span>
                    </span>
                    :
                    null
            }
            
            {
                showForm ? <React.Fragment>
                    <textarea name="review" id="review" className='reviews__content' onChange={handleInputChange}></textarea>
                    <br />
                    <FormButton 
                        btnClass='primary'
                    />
                </React.Fragment>
                : null
            }
            
        </form>
    )
}

export default connect(null, { writeReview })(ReviewForm);
