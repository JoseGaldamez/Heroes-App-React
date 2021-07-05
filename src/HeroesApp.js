import React, { useEffect, useReducer } from 'react';
import authReducer from './auth/authReducer';
import { AuthContext } from './context/authContext';
import AppRouter from './routers/AppRouter';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

const HeroesApp = () => {
    
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        
        localStorage.setItem('user', JSON.stringify(user) )
        
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter>
                <h1>Heroes App</h1>
                <hr />
            </AppRouter>
        </AuthContext.Provider>
    );
}

export default HeroesApp;
