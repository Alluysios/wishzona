import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../components/loginform/LoginForm';

const LoginScreen = ({ auth }) => {

    if(auth.isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <React.Fragment>
            <LoginForm />
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LoginScreen);
