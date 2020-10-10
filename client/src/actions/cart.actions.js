import {
    ADD_CART,
    REMOVE_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    DISPLAY_CART
} from './types';

export const addCart = product => {
    const productGst = product.price * 0.05;
    return {
        type: ADD_CART,
        payload: { id: product.id, name: product.name, price: product.price, gst: productGst }
    }
}

export const removeCart = product => {
    return {
        type: REMOVE_CART,
        payload: { id: product.id, name: product.name, price: product.price }
    }
}

export const incrementQuantity = product => {
    const productGst = product.price * 0.05;
    return {
        type: INCREMENT_QUANTITY,
        payload: { id: product.id, name: product.name, price: product.price, gst: productGst }
    }
}

export const decrementQuantity = product => {
    const productGst = product.price * 0.05;
    return {
        type: DECREMENT_QUANTITY,
        payload: { id: product.id, name: product.name, price: product.price, gst: productGst }
    }
}

export const displayCart = () => {
    return {
        type: DISPLAY_CART
    }
}