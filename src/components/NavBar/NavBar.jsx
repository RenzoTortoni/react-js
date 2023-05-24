import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            
            <Link to="/">
                <Logo />
            </Link>
                        
            <div className="Categories">
                <NavLink to={`/category/inicio`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Inicio</NavLink>
                <NavLink to={`/category/categorias`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Categorias</NavLink>
                <NavLink to={`/category/nosotros`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Nosotros</NavLink>
                <NavLink to={`/category/soporte`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Soporte</NavLink>
            </div>
            
            
            {/* <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Categorias</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Soporte</a>
                </li>
            </ul> */}
            <CartWidget />
        </nav>
    );
}

export default NavBar