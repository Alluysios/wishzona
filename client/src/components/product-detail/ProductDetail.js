import React, { useEffect } from 'react';
import './ProductDetail.scss';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import { getProduct } from '../../actions/product.action';
import { addCart } from '../../actions/cart.actions'

// Components
import CustomButton from '../custom-button/CustomButton';
import ReviewList from '../review-list/ReviewList';
import Spinner from '../spinner/Spinner';
import ReviewForm from '../review-form/ReviewForm';


const ProductDetail = ({ slug, getProduct, product: { product }, auth: { user }, addCart }) => {
    useEffect(() => {
        getProduct(slug);
    }, [getProduct, slug])

    const renderStarRating = (rating) => {
        let stars = [];
        for (let i = 1; i < rating; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} size='2x' color='#FF9529' />)
        }
        if(Number(rating.toString().split('.')[1]) >= 5) stars.push(<FontAwesomeIcon icon={faStarHalfAlt} size='1x' color='#FF9529' />)
        return stars;
    }

    if(!product) return <Spinner />
    return (
        <React.Fragment>
            <Link to='/' className='back-button'> &larr; Go Back </Link>
            <div className='product'>
                {
                    product.images.length <= 0 ? null : <div className='product__img-list'>
                    {
                        product.images.map((image, i) => 
                            <React.Fragment>
                                <div className="product__img-list-item" key={i}>
                                    <img src={`/uploads/products/${image}`} alt={`${product.name}`}/>
                                </div>
                            </React.Fragment>
                        )
                    }
                </div>
                }
                
                <div className='product__img' 
                    style={{
                        backgroundImage: `url(/uploads/products/${product.imageCover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className='product__detail'>
                    <h2 className='product__heading'>{product.name}</h2>
                    <span className="product__rating">
                        {
                            renderStarRating(product.ratingAverage)
                        }
                    </span>
                    <hr />
                    <p className='product__detail-description'>{product.description}</p>
                    <hr />
                    <p className="product__detail-price">
                        Price: <span className='black'>${product.price}</span>
                    </p>
                    <hr />
                    <CustomButton link='#!' title='ADD TO CART' onClick={() => addCart(product)} btnType='secondary' />

                    <CustomButton link='/cart' onClick={() => addCart(product)} title='BUY NOW!' btnType='secondary' className='ml-md' />
                </div>
            </div>

            <div className="product__reviews">
                {
                    product.review.find(rev => rev.user._id === user._id) ? <p className="product__reviews-text">Thanks for the feedback.</p> : <ReviewForm id={product._id} />
                }
                {
                    product.review.length === 0 ? <span className='product__reviews-noreview'>No Review for this product yet.</span> : <ReviewList reviews={product.review} />
                }
            </div>    
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    product: state.products,
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, { getProduct, addCart })(ProductDetail));
