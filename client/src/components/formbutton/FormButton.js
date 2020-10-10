import React from 'react';
import './FormButton.scss';

const FormButton = ({ value, btnClass, fluid }) => {
    return <input type='submit' className={`form-btn form-btn-${btnClass} ${fluid && 'fluid'}`} value={value} />
}

export default FormButton;