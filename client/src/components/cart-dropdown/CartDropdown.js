import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../custom-button/CustomButton';

import { incrementQuantity, decrementQuantity, removeCart, displayCart } from '../../actions/cart.actions';



const CartDropdown = ({ cart, incrementQuantity, decrementQuantity, removeCart, displayCart }) => {

    if(!cart.displayCart) {
        return null;
    }

    return (
        <div className='cartdropdown'>
            <p className='cartdropdown__title'>Cart Items</p>
            <div className="cartdropdown__list">
                { 
                    cart.products.length > 0 ? cart.products.map(product =>
                        product.quantity > 0 ?
                            <div className="cartdropdown__list-item">
                                <div className="cartdropdown__list-item-name">
                                    {product.name}
                                </div>
                                <div className="cartdropdown__list-item-quantity">
                                    <span className='cartdropdown__icon' onClick={() => decrementQuantity(product)}><FontAwesomeIcon icon={faAngleLeft} size='1x' /></span>
                                    <span>{product.quantity}</span>
                                    <span className='cartdropdown__icon' onClick={() => incrementQuantity(product)}><FontAwesomeIcon icon={faAngleRight} size='1x' /></span>
                                </div>
                                
                                <span onClick={() => removeCart(product)} className='cartdropdown__icon'><FontAwesomeIcon icon={faTimes} size='1x' /></span>
                            </div>
                        : 
                        null
                    )
                    :
                    <h3>
                        NOTHING IN CART.
                    </h3>
                }

                <CustomButton className='checkout-btn' onClick={() => displayCart()} link='/cart' title='CHECKOUT' btnType='secondary' size='md' />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { incrementQuantity, decrementQuantity, removeCart, displayCart })(CartDropdown);