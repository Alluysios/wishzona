import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import { incrementQuantity, decrementQuantity, removeCart } from '../../actions/cart.actions';

import StripeCheckOutButton from '../stripe-button/StripeButton';

const Cart = ({ cart, incrementQuantity, decrementQuantity, removeCart }) => {
    return (
        <div className='cart'>
            <h2 className='cart__heading'>Cart</h2>
            <div className="cart__list">
                { 
                    cart.products.length > 0 ? cart.products.map(product =>
                        product.quantity > 0 ?
                            <div className="cart__list-item" key={product.id}>
                                <div className="cart__list-item-name">
                                    {product.name}
                                </div>
                                <div className="cart__list-item-quantity">
                                    <span className='cart__icon' onClick={() => decrementQuantity(product)} ><FontAwesomeIcon icon={faAngleLeft} size='3x' /></span>
                                    <span className='cart__list-item-quantity-text'>{product.quantity}</span>
                                    <span className='cart__icon' onClick={() => incrementQuantity(product)}><FontAwesomeIcon icon={faAngleRight} size='3x' /></span>
                                </div>
                                
                                <span onClick={() => removeCart(product)} className='cart__icon'><FontAwesomeIcon icon={faTimes} size='3x' /></span>
                            </div>
                            
                        : 
                        null
                    )
                    :
                    <h1>
                        NOTHING IN CART.
                    </h1>
                }
            </div>

            {
                cart.products.length > 0 ?
                <React.Fragment>
                    <div className="cart__checkout">
                        <div className='subtotal'>Subtotal: $ {cart.subtotal} </div>
                        <div className='gst'>GST: $ {parseFloat(cart.gst.toFixed(2))}</div>
                        <div className='total'>Total: <span className='price'>${parseFloat(cart.total.toFixed(2))}</span></div>
                        {/* <Link to='#!' className="btn btn--primary">checkout</Link> */}
                        <div className="warning">
                            *This is a stripe test mode. Please use the following test credit cart for payments*
                            <br />
                            4242 4242 4242 4242 - Exp: 12/24 (any future date) - CVV: 123 (any 3 digits will work)
                        </div>
                    </div>

                    <StripeCheckOutButton price={parseFloat(cart.total.toFixed(2))} />
                </React.Fragment>
                :
                null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { incrementQuantity, decrementQuantity, removeCart })(Cart);
