import React, { useState, useEffect } from 'react';
import './RegisterForm.scss';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// Components
import FormInput from '../forminput/FormInput';
import FormButton from '../formbutton/FormButton';

import { register } from '../../actions/auth.actions';
import ErrorMessage from '../error-message/ErrorMessage';

const RegisterForm = ({ register, history, auth: { errors } }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch({ type: 'CLEAR_ERROR_MESSAGES' })
        }
    }, [dispatch])

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        register(formData, history);
    }

    return (
        <form className='form form--register' onSubmit={handleSubmit}>
            <h2 className='form-heading'>Register</h2>
            <Link to='/login' className='form-sub'>Already have an account? login now!</Link>
            <ErrorMessage errors={errors} />
            <FormInput 
                type='text'
                label='Firstname'
                name='firstname'
                id='firstname'
                placeholder='john'
                onChange={handleInputChange}
            />
            <FormInput 
                type='text'
                label='Lastname'
                name='lastname'
                id='lastname'
                placeholder='doe'
                onChange={handleInputChange}
            />
            <FormInput 
                type='email'
                label='Email'
                name='email'
                id='email'
                placeholder='johndoe@gmail.com'
                onChange={handleInputChange}
            />
            <FormInput 
                type='password'
                label='Password'
                name='password'
                id='password'
                placeholder='********'
                onChange={handleInputChange}
            />
            <FormInput 
                type='password'
                label='Confirm Password'
                name='passwordConfirm'
                id='passwordConfirm'
                placeholder='********'
                onChange={handleInputChange}
            />
            <FormButton value='Register' btnClass='primary' />
        </form>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, { register })(RegisterForm));