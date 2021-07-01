import React from 'react';

function LoginScreen({history}) {


    const handleLoginClick = () => {
        console.log("Click login");
        history.replace("./");
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
