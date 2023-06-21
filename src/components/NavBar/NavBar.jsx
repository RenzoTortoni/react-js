import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="NavBar">

      <Link to="/">
        <Logo />
      </Link>

      <ul>
        <li>
            <NavLink to={`/`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Inicio</NavLink>
        </li>
        <li>
            <NavLink to={`/category/Acción y aventura`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Acción y aventura</NavLink>
        </li>
        <li>
            <NavLink to={`/category/MMORPG`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>MMORPG</NavLink>
        </li>
        <li>
            <NavLink to={`/category/Deportes`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Deportes</NavLink>
        </li>
      </ul>

      <CartWidget/>
    </nav>
  )
}

export default NavBar