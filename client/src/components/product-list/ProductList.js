import React from 'react';
import './ProductList.scss';

import ProductItem from '../product-item/ProductItem';
import Spinner from '../spinner/Spinner';

const ProductList = ({ products, title }) => {
    return (
        <React.Fragment>
            <div className='product-list'>
                <h1 className='product-list__heading'>{title ? title.toUpperCase() : null}</h1>
                {
                    !products ? <Spinner /> : products.map(product => <React.Fragment key={product._id}>
                        <ProductItem product={product} />                    
                    </React.Fragment>)
                }
            </div>
        </React.Fragment>
    )
}


export default ProductList;