import React from 'react';
import { connect } from 'react-redux';
import './Navigation.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEnvelope, faIdCard, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { logout } from '../../actions/auth.actions';
import { displayCart } from '../../actions/cart.actions';

import CartDropdown from '../cart-dropdown/CartDropdown';

const Navigation = ({ auth: { isAuthenticated, loaded }, logout, cart, displayCart }) => {
    return (
        <div className='nav'>
            <div className="nav__contact">
                <span className="nav__contact-item"><FontAwesomeIcon icon={faEnvelope} /> a.alluysios@gmail.com</span>
                <span className="nav__contact-item"><FontAwesomeIcon icon={faIdCard} /> HIRE ME!</span>
            </div>

            <ul className='nav__list'>
                {
                    isAuthenticated && loaded ?
                    <React.Fragment>
                        <Link to='/account' className='nav__list-item'>Account</Link>
                        <Link to='/' onClick={() => logout()} className='nav__list-item'>Logout</Link>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Link to='/login' className='nav__list-item'>Login</Link>
                        <Link to='/register' className='nav__list-item'>Register</Link>
                    </React.Fragment>
                }
                
            </ul>
            <div className='nav__shopnow'>
                <Link to='/shop' className='nav__product-categories-item nav__product-shop'>Shop Now!</Link>
            </div>
            <ul className='nav__product-categories'>
                <li className='nav__product-categories-item' >
                    <Link to={`/shop/clothing`}>
                        Clothing
                    </Link>
                </li>
                <li className='nav__product-categories-item' >
                    <Link to={`/shop/electronics`}>
                        Electronics
                    </Link>
                </li>
                <li className='nav__product-categories-item' >
                    <Link to={`/shop/footwear`}>
                        Footwear
                    </Link>
                </li>
                <Link to='/shop' className='nav__product-categories-item nav__product-shop'>Shop Now!</Link>
            </ul>

            <div className="nav__brand">
                <Link to='/'>WISHZONA</Link>
            </div>

            <ul className='nav__cart'>
                <span className='nav__cart-item'>
                    <span className='nav__cart-item-dropdown' onClick={() => displayCart()}>
                        <FontAwesomeIcon icon={faAngleDown} size='lg' />
                        <FontAwesomeIcon icon={faShoppingCart} size='lg' />
                    </span>
                    <span className='cart-items'>{cart.products.length} items</span>
                </span>
                <div className="nav__cart-container">
                    <CartDropdown />
                </div>
            </ul>
        </div>
    )
}


const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart
})

export default connect(mapStateToProps, { logout, displayCart })(Navigation);
