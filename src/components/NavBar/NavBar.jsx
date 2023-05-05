import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"


function NavBar() {
    return (
        <nav>
            <Logo />
            <ul>
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
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar