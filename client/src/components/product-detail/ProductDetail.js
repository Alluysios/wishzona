import React, { useEffect } from 'react';
import './ProductDetail.scss';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import { getProduct } from '../../actions/product.action';
import { addCart } from '../../actions/cart.actions'

// Components
import CustomButton from '../custom-button/CustomButton';
import ReviewList from '../review-list/ReviewList';
import Spinner from '../spinner/Spinner';
import ReviewForm from '../review-form/ReviewForm';


const ProductDetail = ({ slug, getProduct, product: { product }, addCart }) => {
    useEffect(() => {
        getProduct(slug);
    }, [getProduct, slug])

    if(!product) return <Spinner />
    return (
        <React.Fragment>
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
                        flex: '1 0 40%',
                        backgroundImage: `url(/uploads/products/${product.imageCover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className='product__detail'>
                    <h2 className='product__heading'>{product.name}</h2>
                    <span className="product__rating">
                        <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                        <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                        <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                        <FontAwesomeIcon icon={faStar} size='2x' color='#FF9529' />
                        <FontAwesomeIcon icon={faStarHalfAlt} size='2x' color='#FF9529' />
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
                <ReviewForm id={product._id} />
                {
                    product.review.length === 0 ? <span className='product__reviews-noreview'>No Review for this product yet.</span> : <ReviewList reviews={product.review} />
                }
            </div>    
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    product: state.products
})

export default connect(mapStateToProps, { getProduct, addCart })(ProductDetail);
