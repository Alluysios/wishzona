import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const AccountScreen = ({ auth: { user } }) => {
    return (
        <div className='center'>
            <div className="center__info">
                { user ? <React.Fragment>
                    <h2>Account info</h2>
                    <p> Name: {user.firstname} {user.lastname} </p>
                    <p> Email: {user.email} </p>
                    <p> Account Created: <Moment format='YYYY/MM/DD'>{user.date}</Moment></p>
                </React.Fragment> : null}
            </div>
            <h1>This page is currently work in progress.</h1>
            <h1>Hello hope you enjoying, I would greatly appreciate it if you kindly give me some feedback.</h1>
            <h1>Email me at workalluysios@gmail.com</h1>
            <ul>
                <li><h2>What do you think?</h2></li>
                <li><h2>Did you like it?</h2></li>
                <li><h2>What do I need to do to improve.</h2></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(AccountScreen);
