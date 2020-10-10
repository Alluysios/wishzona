import axios from 'axios';

import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    WRITE_REVIEW,
    POST_ERROR,
    DELETE_REVIEW
} from './types';

export const getProducts = (category, limit = 100, page = 1) => async dispatch => {
    const config = { 'Content': 'application/json' }
    let response;
    try {
        category ?
            response = await axios.get(`/api/v1/products?category=${category}&limit=${limit*page}&page=${page}`, config)
            :
            response = await axios.get(`/api/v1/products?limit=${limit}&page=${page}`, config)
        dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: POST_ERROR, payload: errors });
    }
}

export const getProductsByPrice = (options = '-price', category, limit = 100, page = 1) => async dispatch => {
    const config = { 'Content': 'application/json' }
    let response;
    try {
        category ?
        response = await axios.get(`/api/v1/products?sort=${options}&category=${category}&limit=${limit*page}&page=${page}`, config)
            :
            response = await axios.get(`/api/v1/products?sort=${options}&limit=${limit*page}&page=${page}`, config)
        dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: POST_ERROR, payload: errors });
    }
}

export const getProductsByCategory = (category, limit = 10, page = 1) => async dispatch => {
    const config = { 'Content': 'application/json' }
    try {
        const response = await axios.get(`/api/v1/products?category=${category}&page=${page}&limit=${limit}`, config)
        dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: POST_ERROR, payload: errors });
    }
}

export const getProduct = slug => async dispatch => {
    const config = { 'Content': 'application/json' }
    try {
        const response = await axios.get(`/api/v1/products/${slug}`, config)
        dispatch({ type: GET_PRODUCT, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: POST_ERROR, payload: errors });
    }
}

export const writeReview = (formData, id) => async dispatch => {
    console.log(formData);
    const config = { 'Content': 'application/json' }
    try {
        const response = await axios.post(`/api/v1/products/${id}/reviews`, formData, config);
        console.log(response.data);
        dispatch({ type: WRITE_REVIEW, payload: response.data });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({ type: POST_ERROR, payload: errors });
    }
}