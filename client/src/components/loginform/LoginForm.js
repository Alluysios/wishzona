import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './LoginForm.scss';
import { Link, withRouter } from 'react-router-dom';

// Components
import FormInput from '../forminput/FormInput';
import FormButton from '../formbutton/FormButton';

// Actions
import { login } from '../../actions/auth.actions';
import AlertMessage from '../alert-message/AlertMessage';

const LoginForm = ({ login, history, auth: { errors } }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'CLEAR_ERROR_MESSAGES' })
        return () => {
            dispatch({ type: 'CLEAR_ERROR_MESSAGES' })
        }
    }, [dispatch])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = formData;
        login({email, password}, history);
    }

    return (
        <form className='form form--login' onSubmit={handleSubmit}>
            <h2 className='form-heading'>Login</h2>
            <Link to='/register' className='form-sub'>Don't have an account? register now!</Link>
            <AlertMessage errors={errors} />
            <FormInput 
                type='email'
                label='Email'
                name='email'
                id='email'
                placeholder=''
                onChange={handleInputChange}
            />
            <FormInput 
                type='password'
                label='Password'
                name='password'
                id='password'
                placeholder=''
                onChange={handleInputChange}
            />
            <FormButton value='Login' btnClass='primary' />
        </form>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, { login })(LoginForm));
