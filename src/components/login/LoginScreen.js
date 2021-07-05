import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import TYPES from '../../types/types';



function LoginScreen({history}) {
    
    const {dispatch} = useContext( AuthContext );
    const lastPath = localStorage.getItem('lastPath') || '/';
    
    const handleLoginClick = () => {

        history.replace(lastPath);

        const action = {
            payload: {
                name: "Jose"
            },
            type: TYPES.login
        }

        dispatch(action); 

    }


    return (
        <>
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button onClick={handleLoginClick} className="btn btn-primary">
                Login
            </button>
        </div>
        </>
    )
}

export default LoginScreen;
