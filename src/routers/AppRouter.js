import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';


// My components
import LoginScreen from '../components/login/LoginScreen';
import { AuthContext } from '../context/authContext';
import DashboardRouters from './DashboardRouters';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function AppRouter() {

    const {user:{logged}} = useContext(AuthContext);

    return (
        <Router>
            <div>
                
                <Switch>
                    <PublicRoute 
                        isAuth={logged}
                        exact
                        path="/login"
                        component={ LoginScreen } />
                    
                    <PrivateRoute 
                        path="/" 
                        isAuth={logged}
                        component={ DashboardRouters } />

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
