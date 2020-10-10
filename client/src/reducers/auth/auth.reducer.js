import {
    LOAD_USER,
    REGISTER,
    LOGIN,
    LOGOUT,
    AUTH_ERROR
} from '../../actions/types';

import Cookies from 'js-cookie';

const initialState = {
    user: null,
    token: Cookies.get('token') ? Cookies.get('token') : null,
    isAuthenticated: false,
    loaded: false,
    errors: []
}

export default (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER:
            return {
                ...state,
                user: payload.user,
                isAuthenticated: true,
                loaded: true
            }
        case REGISTER:
        case LOGIN:
            Cookies.set('token', payload.token);
            return {
                ...state,
                user: payload.user,
                isAuthenticated: true,
                loaded: true,
                token: payload.token
            }
        case LOGOUT:
            Cookies.remove('token');
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loaded: true,
                payload: null
            }
        case AUTH_ERROR: 
            return {
                ...state,
                errors: payload
            }
        case 'CLEAR_ERROR_MESSAGES':
            return {
                ...state,
                errors: []
            }
        default:
            return state;
    }
}