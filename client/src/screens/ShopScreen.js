import React from 'react';

import Products from '../components/products/Products';

const ShopScreen = ({ match }) => {
    return (
        <React.Fragment>
            <Products category={match.params.category} />
        </React.Fragment>
    )
}

export default ShopScreen;