import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
    return  <>
                <nav className="navBar">
                    <NavLink to="/" exact>Inicio</NavLink>
                    <Link to="/categoria/1">Categoria 1</Link>
                    <Link to="/categoria/2">Categoria 2</Link>
                    <CartWidget/>
                </nav>
            </>;

}

export default NavBar 