import React, { useContext } from 'react';
import { 
    NavLink, useHistory
 } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import TYPES from '../../types/types';

const Navbar = () => {

    const {user:{name}, dispatch} = useContext( AuthContext );
    const history = useHistory();

    const handlerLogout = () => {

        const action = {
            type: TYPES.logout
        }

        dispatch(action);
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid container">
                <NavLink to="/" className="navbar-brand" >Heroes App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <NavLink to="/marvel" className="nav-link" >Marvel</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/dc" className="nav-link" >DC</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/search" className="nav-link" >Search</NavLink>
                    </li>
                </ul>
                <span className="nav item nav-link text-info">
                    {name}
                </span>
                <span className="navbar-text">
                    <button onClick={handlerLogout} className="nav-item nav-link btn text-danger" >Logout</button>
                </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
