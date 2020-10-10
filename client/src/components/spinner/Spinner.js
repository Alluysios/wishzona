import React from 'react';
import './Spinner.scss';
import spinnergif from './Spinner.gif';

const Spinner = () => {
    return (
        <div className='spinner'>
            <img src={spinnergif} alt="Spinner" className='spinner__gif' />
            <p className="spinner__text">Loading Please Wait...</p>
        </div>
    )
}

export default Spinner;
