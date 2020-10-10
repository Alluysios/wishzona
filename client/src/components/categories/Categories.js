import React from 'react';
import './Categories.scss';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { getProductsByPrice } from '../../actions/product.action';

const Categories = ({ getProductsByPrice, category }) => {
    return (
        <div className='categories'>
            <div className='categories__title'>Price</div>
            <ul className="categories__lists">
                <li className='categories__lists-item'>
                    <span onClick={() => getProductsByPrice('+price', category)}>
                        Lowest to Highest
                    </span>
                </li>
                <li className='categories__lists-item'>
                    <span onClick={() => getProductsByPrice('+price', category)}>
                        Highest to Lowest
                    </span>
                </li>
            </ul>

            <div className='categories__title'>Categories</div>
            <ul className="categories__lists">
                <li className='categories__lists-item'>
                    <Link to={`/shop`}>
                        All
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/clothing`}>
                        Clothing
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/cosmetics`}>
                        Cosmetics
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/hiking`}>
                        Hiking
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/children`}>
                        Children
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/electronics`}>
                        Electronics
                    </Link>
                </li>
                <li className='categories__lists-item'>
                    <Link to={`/shop/footwear`}>
                        Footwear
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default connect(null, { getProductsByPrice })(Categories);
