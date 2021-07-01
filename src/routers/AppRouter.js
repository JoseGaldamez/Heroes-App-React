import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


// My components
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouters from './DashboardRouters';


function AppRouter() {
    return (
        <Router>
            <div>
                
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component={ DashboardRouters } />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
