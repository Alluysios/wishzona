import axios from 'axios';
import Cookies from 'js-cookie';
import setAuthToken from '../helper/setAuthToken';

import {
    LOAD_USER,
    REGISTER,
    LOGIN,
    LOGOUT,
    AUTH_ERROR
} from './types';

// LOAD USER AND CHECK FOR TOKEN
export const loadUser = () => async dispatch => {
    if(Cookies.get('token')) setAuthToken(Cookies.get('token'))

    const config = { 'Content': 'application/json' }

    try {
        const response = await axios.get('/api/v1/auth', config);
        dispatch({ type: LOAD_USER, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: AUTH_ERROR, payload: errors });
    }
}

// REGISTER USER
export const register = (formData) => async dispatch => {
    const config = { 'Content': 'application/json' };
    try {
        const response = await axios.post('/api/v1/auth/signUp', formData, config);
        dispatch({ type: REGISTER, payload: response.data })
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: AUTH_ERROR, payload: errors });
    }
}

// LOGIN USER
export const login = ({ email, password }, history) => async dispatch => {
    const config = { 'Content': 'application/json' };
    try {
        const response = await axios.post('/api/v1/auth/signIn', { email, password }, config);
        dispatch({ type: LOGIN, payload: response.data })
        dispatch(loadUser());
        history.push('/')
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: AUTH_ERROR, payload: errors });
    }
}

// LOGOUT USER
export const logout = () => async dispatch => {
    const config = { 'Content': 'application/json' };
    try {
        await axios.get('/api/v1/auth/signOut', config);
        Cookies.remove('token');
        dispatch({ type: LOGOUT })
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: AUTH_ERROR, payload: errors });
    }
}