import React, { useEffect, useState, Fragment, Suspense, lazy }  from 'react';
import { connect } from 'react-redux';

// Components
import HeaderHero from '../components/header-hero/HeaderHero';

import { getProducts } from '../actions/product.action';
import Spinner from '../components/spinner/Spinner';
const CategorySection = lazy(() => import('../components/category-section/CategorySection'))

const LandingScreen = ({ getProducts, products: { products } }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <div>
            <HeaderHero />
            <Suspense fallback={<Spinner />}>
                <CategorySection title='Clothing' products={products} category='clothing' />
                <CategorySection title='Children' products={products} category='children' />
            </Suspense>
            
            {
                show ? <Fragment>
                    <CategorySection title='Hiking' products={products} category='hiking' />
                    <CategorySection title='Cosmetics' products={products} category='cosmetics' />
                    <CategorySection title='Electronics' products={products} category='electronics' />
                </Fragment>
                :
                <p className='view-btn' onClick={() => setShow(!show)}>View More</p>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})
export default connect(mapStateToProps, { getProducts })(LandingScreen);