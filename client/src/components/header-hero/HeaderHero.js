import React from 'react';
import './HeaderHero.scss';

import CustomButton from '../custom-button/CustomButton';

const HeaderHero = () => {
    return (
        <div className='hero'>
            <div className='hero__content'>
                <h2 className='hero__content-title'>Early Blackfriday! <span className='bold'>UP TO 70% OFF</span> </h2>
                <p className='hero__content-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores commodi vitae libero aliquam quo iure ea perspiciatis? Nam libero cumque rerum repudiandae facilis nisi consequatur tempore ducimus, quos porro?Nam libero cumque rerum repudiandae facilis nisi consequatur tempore ducimus, quos porro?</p>
                <CustomButton link='/shop' title='Shop Now!' btnType='secondary' />
            </div>
            <div className='hero__background'>
            </div>
        </div>
    )
}

export default HeaderHero;
