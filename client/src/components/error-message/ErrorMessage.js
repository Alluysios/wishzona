import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ errors }) => {
    if(!errors) return null;
    return (
        <React.Fragment >
            {
                errors && errors.map(error => <div className='error'><p className='error__msg'>{error.msg}</p></div>)
            }
        </React.Fragment>
    )
}

export default ErrorMessage
