import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Products.scss';

// Components
import Categories from '../categories/Categories';
import ProductList from '../product-list/ProductList';

import { getProducts } from '../../actions/product.action';

const Products = ({ getProducts, products: { products }, category }) => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    useEffect(() => {
        getProducts(category, 999, page);
    }, [getProducts, category, page]);


    const changePage = (index) => {
        if(index === 1) {
            setPage(0);
            setLimit(10);
        } else {
            setPage((index-1)*10);
            setLimit(10*index);
        }
    }
    const renderPaginate = ({ pageLength }) => {
        return [...Array(pageLength)].map((num, i) =>
            <span key={i} onClick={() => changePage(i+1)} className={`products__pagination-button ${i === page/10 ? 'products__pagination-button-active' : null}`}>{i+1}</span>
        )
    }

    return (
        <div className='products'>
            <div className="products__categories">
                <Categories category={category} />
            </div>
            <div className="products__lists">
                <ProductList products={products.slice(page, limit)} title='CHECK OUR BEST OFFER' />
            </div>
            <div className="products__pagination">
                {
                renderPaginate({ pageLength: Math.ceil(products.length / 10)})
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, {getProducts})(Products);
