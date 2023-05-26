import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SubcategoriesNavbar from "../SubcategoriesNavbar/SubcategoriesNavbar";

const NavBar = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleMouseEnter = () => {
    setShowSubcategories(true);
  };

  const handleMouseLeave = () => {
    setShowSubcategories(false);
  };

  return (
    <nav className="NavBar">

    <Link to="/">
        <Logo />
    </Link>

      <ul>
        <li>
            <NavLink to={`/`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Inicio</NavLink>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a>Categorías</a>
            {showSubcategories && <SubcategoriesNavbar />}
        </li>
        <li>
            <NavLink to={`/category/Nosotros`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Nosotros</NavLink>
        </li>
        <li>
            <NavLink to={`/category/Soporte`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Soporte</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar