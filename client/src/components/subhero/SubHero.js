import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './SubHero.scss';

const SubHero = ({ title, btnText }) => {
    return (
        <div className='subhero'>
            <p className='subhero__title'>{title}</p>
            <CustomButton  title={btnText} btnType='secondary' size='lg' />
        </div>
    )
}

export default SubHero;
