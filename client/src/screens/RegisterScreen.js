import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterForm from '../components/registerform/RegisterForm';

const RegisterScreen = ({ auth }) => {
    
    if(auth.isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <React.Fragment>
            <RegisterForm />
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(RegisterScreen);