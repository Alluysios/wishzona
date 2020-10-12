import React from 'react';
import './AlertMessage.scss';

const AlertMessage = ({ errors, alertType }) => {
    if(!errors) return null;
    return (
        <React.Fragment >
            {
                errors && errors.map((error, i) => <div key={i} className='alert'><p className={`alert--${alertType}`}>{error.msg}</p></div>)
            }
        </React.Fragment>
    )
}

AlertMessage.defaultProps = {
    alertType: 'error'
}

export default AlertMessage;
