import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../authentication/AuthService";
import { AuthContext } from "../../authentication/AuthContext";
import "./style.css";
import Logo from '../Logo';
import SoundButton from "../SoundButton";

const NavBar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/login">
          <li className="nav-item pad nav-style">ADMIN</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/admin">
          <li className="nav-item pad nav-style">DASHBOARD</li>
        </Link>
        <li
          type="button"
          className="btn btn-link nav-item pad nav-style"
          onClick={onClickLogoutHandler}
        >
          LOGOUT
        </li>
      </>
    );
  };


   
  return (
    <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
      <ul className="nav navbar-nav navbar-expand-lg">
        <li>
          <Logo />
        </li>
        <li className="nav-item pad nav-style">
          <Link to="/">HOME</Link>
        </li>
        {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        <li> 
          <SoundButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// import React, {useContext} from 'react';
// import {Link} from 'react-router-dom';
// import './style.css';
// import AuthService from '../../authentication/AuthService';
// import { AuthContext } from '../../authentication/AuthContext';

// function Navbar(props) {
//   const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

//   const unauthenticatedNavBar = () => {
//     return(
//       <Link to="/login">ADMIN</Link>
//     )
//   }

//   const authenticatedNavBar = () => {
//     return(
//       <Link to="/admin">ADMIN</Link>
//     )
//   }

//   return(
//     <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
//       <ul className="nav navbar-nav navbar-expand-lg">
//       <li className="nav-item pad">
//           <Link to="/">HOME</Link>
//         </li>
//         <li className="nav-item pad">
//           { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar() }
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;
