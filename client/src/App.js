import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import store from './store';
import { loadUser } from './actions/auth.actions';

// SCREENS
import LandingScreen from './screens/LandingScreen';
import AccountScreen from './screens/AccountScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import ShopScreen from './screens/ShopScreen';
import CheckoutScreen from './screens/CheckoutScreen';

// COMPONENTS
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import setAuthToken from './helper/setAuthToken';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

const App = () => {
    if(Cookies.get('token')) {
        setAuthToken(Cookies.get('token'));
    }
    useEffect(() => { 
        store.dispatch(loadUser());
    }, [])

    return (
        <Router>
            <Navigation />
            <div className='container'>
                <Switch>
                        <Route exact path='/' component={LandingScreen} />
                        <ProtectedRoute exact path='/account' component={AccountScreen} />
                        <Route exact path='/product/:slug' component={ProductScreen} />
                        <Route exact path='/shop' component={ShopScreen} />
                        <Route exact path='/shop/:category' component={ShopScreen} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/register' component={RegisterScreen} />
                        <Route exact path='/cart' component={CartScreen} />
                        <ProtectedRoute exact path='/checkout' component={CheckoutScreen} />
                        <Route path='/resume-view' component={() => { 
                            window.location.href = 'https://drive.google.com/file/d/1mLZOtcos3W7XH2JcioHF7fCu4JBWmMiZ/view?usp=sharing'; 
                            return null;
                        }}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}

export default App;