import React,{ useContext } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


const NavBar = () => {

    const navigate = useNavigate();

    //context en el navbar
    const {user, dispatch} = useContext(AuthContext)

    //redirigir a login con el botón logout
    const handleLogout = () =>{

        dispatch({
            type: types.logout,
        })

        navigate('/login',{
            replace: true // no se puede devolver atras
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link 
                className="navbar-brand"
                to="/"
            >
                Heroes App
            </Link>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <NavLink
                    className={ ( {isActive} ) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/marvel"
                >
                    Marvel
                </NavLink>
                <NavLink
                    className={ ( {isActive} ) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    className={ ( {isActive} ) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/search"
                >
                    Search
                </NavLink>
            </div>
          </div>
          <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info"> 
                    {user.name}
                </span>
                <button 
                    className="nav-item nav-link btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
