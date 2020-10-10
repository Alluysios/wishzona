import { combineReducers } from 'redux';

import products from './product/product.reducer';
import auth from './auth/auth.reducer';
import cart from './cart/cart.reducer'

export default combineReducers({
    products,
    cart,
    auth
})