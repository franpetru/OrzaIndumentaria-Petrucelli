import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
    return  <>
                <nav className="navBar">
                    <NavLink to="/" exact>Inicio</NavLink>
                    <Link to="/item/:precio">Categoria 1</Link>
                    <Link to="/item/:id">Categoria 2</Link>
                    <CartWidget/>
                </nav>
            </>;

}

export default NavBar 