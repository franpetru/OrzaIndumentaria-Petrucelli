import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    return  <>
                <nav className="navBar">
                    <Link to="/">Inicio</Link>
                    <Link to="/categoria/1">Categoria 1</Link>
                    <Link to="/categoria/2">Categoria 2</Link>
                    <CartWidget/>
                </nav>
            </>;

}

export default NavBar 