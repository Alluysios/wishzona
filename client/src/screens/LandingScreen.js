import React, { useEffect }  from 'react';
import { connect } from 'react-redux';

// Components
import HeaderHero from '../components/header-hero/HeaderHero';
import CategorySection from '../components/category-section/CategorySection';

import { getProducts } from '../actions/product.action';
import Spinner from '../components/spinner/Spinner';

const LandingScreen = ({ getProducts, products: { products } }) => {

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    if(!products) return <Spinner />;

    return (
        <div>
            <HeaderHero />
            <CategorySection title='Clothing' products={products} category='clothing' />
            <CategorySection title='Children' products={products} category='children' />
            <CategorySection title='Hiking' products={products} category='hiking' />
            <CategorySection title='Cosmetics' products={products} category='cosmetics' />
            {/* <SubHero title='Explore now!. UP TO 70% OFF!' btnText='CHECK IT OUT!' /> */}
            <CategorySection title='Electronics' products={products} category='electronics' />
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})
export default connect(mapStateToProps, { getProducts })(LandingScreen);