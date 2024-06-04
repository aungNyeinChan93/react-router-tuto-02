import React from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-end py-1 px-4  fs-6 bg-light">
        <li className="nav-item">
          <NavLink className="nav-link active"
            style={({isActive})=>isActive? {color:"red",fontSize:"25px", borderBottom:"5px solid red"}:{color:"blue",borderBottom:"none"}}
          aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className={({isActive})=>isActive? "nav-link fs-5 text-danger ":"nav-link text-primary"} to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive? "nav-link fs-5 text-danger ":"nav-link text-primary"} to="/product">
            Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive? "nav-link fs-5 text-danger ":"nav-link text-primary"} to={"/about"} >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive? "nav-link fs-5 text-danger ":"nav-link text-primary"} to={"/dashboard"} >
            DashBoard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive? "nav-link fs-5 text-danger ":"nav-link text-primary"} to={"/login"} >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
