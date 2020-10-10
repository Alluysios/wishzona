import {
    ADD_CART,
    DECREMENT_QUANTITY,
    INCREMENT_QUANTITY,
    REMOVE_CART,
    DISPLAY_CART
} from '../../actions/types';

const initialState = {
    products: [],
    subtotal: 0,
    gst: 0,
    total: 0,
    displayCart: false
}

export default (state = initialState, actions) => {
    const { type, payload } = actions;

    const handleAddCart = (products, payload) => {
        const product = products.filter(product => product.id === payload.id);

        if(product.length > 0) {
            const withoutFindProduct = products.filter(product => product.id !== payload.id);
            const modifiedProducts = [...withoutFindProduct, {...product[0], quantity: product[0].quantity + 1 }]
            return modifiedProducts;
        }

        const addProduct = [...products, { id: payload.id, name: payload.name, quantity: 1, price: payload.price }]
        return addProduct;
    }

    switch(type) {
        
        case ADD_CART:
            return {
                ...state,
                products: handleAddCart(state.products, payload),
                subtotal: state.subtotal + payload.price,
                gst: state.gst + payload.gst,
                total: state.total + payload.gst + payload.price
            }
        case REMOVE_CART:
            let productQuantity = state.products.filter(prod => prod.id === payload.id)[0].quantity;
            console.log(payload.price * productQuantity)
            return {
                ...state,
                products: [...state.products.filter(prod => prod.id !== payload.id)],
                subtotal: state.subtotal - (payload.price * productQuantity),
                gst: state.gst - ((payload.price * productQuantity) * 0.05),
                total: state.total  - (((payload.price * productQuantity) * 0.05) + (payload.price * productQuantity))
            }
        case INCREMENT_QUANTITY:
            return {
                ...state,
                products: [...state.products.map(prod => prod.id === payload.id ? {...prod, quantity: prod.quantity + 1 } : prod )],
                subtotal: state.subtotal + payload.price,
                gst: state.gst + payload.gst,
                total: state.total  + payload.gst + payload.price
            }
        case DECREMENT_QUANTITY:
            return {
                ...state,
                products: [...state.products.map(prod => prod.id === payload.id ? {...prod, quantity: prod.quantity - 1 } : prod )],
                subtotal: state.subtotal - payload.price,
                gst: state.gst - payload.gst,
                total: state.total  - (payload.gst + payload.price)
            }
        case DISPLAY_CART:
            return {
                ...state,
                displayCart: !state.displayCart
            }
        default:
            return state
    }
}