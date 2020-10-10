import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    WRITE_REVIEW,
    DELETE_REVIEW,
    POST_ERROR
} from '../../actions/types';

const initialState = {
    products: [],
    product: null,
    loaded: false,
    errors: []
}

export default (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload.products,
                loaded: true
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload.product,
                loaded: true
            }
        case WRITE_REVIEW:
            return {
                ...state,
                product: {...state.product, review: [...state.product.review, payload.review]},
                loaded: true
            }
        case POST_ERROR:
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