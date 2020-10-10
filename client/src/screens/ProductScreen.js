import React from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';

const ProductScreen = ({ match }) => {
    return (
        <React.Fragment>
            <ProductDetail slug={match.params.slug} />
        </React.Fragment>
    )
}

export default ProductScreen
