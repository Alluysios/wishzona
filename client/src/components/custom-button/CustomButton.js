import React from 'react';
import './CustomButton.scss';
import { Link } from 'react-router-dom';

const CustomButton = ({ title, btnType, size, link, onClick, className }) => {
    return (
        <Link onClick={onClick} to={`${link}`} className={`btn btn--${btnType} btn-${size} ${className}`}>
            {title}
        </Link>
    )
}

CustomButton.defaultProps = {
    title: 'Button',
    size: 'lg',
    link: '/',
    btnType: 'primary'
}

export default CustomButton
