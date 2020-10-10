import React, { useEffect, useState } from 'react';
import './CategorySection.scss';
import { connect } from 'react-redux'

import CustomButton from '../custom-button/CustomButton';
import ProductList from '../product-list/ProductList';
import Spinner from '../spinner/Spinner';
import { getProducts } from '../../actions/product.action';

const CategorySection = (
    {   
        title,
        category,
        products,
        limit
    }
    ) => {
    const [productsCategory, setProductsCategory ] = useState(null);
    useEffect(() => {
        setProductsCategory((products.filter(product => product.category === category)).slice(0, limit));
    }, [products, category, limit])

    if(products.length === 0) {
        return <Spinner />
    }
    
    return (
        <React.Fragment>
            <div className='category-section'>
                <h2 className='category-section__title'>{title}</h2>
                <ProductList products={productsCategory} />
                <CustomButton title={`See More ${title}`} btnType='primary' size='xsm' link={`/shop/${category}`} />
            </div>
        </React.Fragment>
        
    )
}

CategorySection.defaultProps = {
    category: '',
    limit: 5
}

export default connect(null, { getProducts })(CategorySection);