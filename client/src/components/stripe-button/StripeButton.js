import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_iwR4UDnT2P2aXUaUonJ0WPih';
    const onToken = async (token) => {
        const res = await axios.post('api/v1/products/checkout', {
            token,
            price
        });
        console.log(res.data);
        if(res.data.status === 'success') {
            alert('success');
        }
    }

    return (
        <StripeCheckout 
            token={onToken}
            stripeKey={publishableKey}
            label='Pay Now'
            name='Wishzona'
            billingAddress
            shippingAddress
            image='https://eskipaper.com/images/fashion-wallpaper-12.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            
        />
    )
}

export default StripeCheckOutButton;