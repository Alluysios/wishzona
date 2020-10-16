import React from 'react';
import './ProductItem.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import { addCart } from '../../actions/cart.actions';

const ProductItem = ({ product, addCart }) => {

    const renderStarRating = (rating) => {
        let stars = [];
        for (let i = 1; i < rating; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} size='1x' color='#FF9529' />)
        }
        if(Number(rating.toString().split('.')[1]) >= 5) stars.push(<FontAwesomeIcon key={5} icon={faStarHalfAlt} size='1x' color='#FF9529' />)
        return stars;
    }
    
    return (
        <div className='card'>
            <Link to={`/product/${product.slug}`}>
                <div className="card__img"
                    style={{
                        backgroundImage: `url('/uploads/products/${product.imageCover}')`
                    }}
                />
            </Link>
            <div className="card__icons">
                <Link to='#!' onClick={() => addCart(product)} className='card__cart-icon'><FontAwesomeIcon icon={faShoppingCart} size='lg' color='#333333' /></Link>
                {/* <Link to='/' className='card__heart-icon'><FontAwesomeIcon icon={faHeart} size='2x' color='red' /></Link> */}
            </div>
            <div className="card__info">
                <p className="card__name">{product.name}</p>
                <p className="card__price">${product.price}</p>
                <span className="card__rating">
                    {
                        renderStarRating(product.ratingAverage)
                    }
                </span>
                <div className="card__rating-count">({product.review.length})</div>
            </div>
        </div>
    )
}


export default connect(null, { addCart })(ProductItem);
