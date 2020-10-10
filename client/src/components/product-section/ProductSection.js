import React from 'react';
import './ProductSection.scss';

// Components
import ProductList from '../product-list/ProductList';
import CustomButton from '../custom-button/CustomButton';

const ProductSection = ({ title, queryString }) => {
    return (
        <div className='product-section'>
            <h2 className='product-section__title'>{title}</h2>
            <ProductList queryString={queryString} />
            <CustomButton title={`See More ${title}`} btnType='primary' size='xsm' />
        </div>
    )
}

export default ProductSection
