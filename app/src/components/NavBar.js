import CartWidget from "./CartWidget"

const NavBar = () => {
    return  <>
                <nav className="navBar">
                    <p><a href="#">Inicio</a></p>
                    <p><a href="#">Catalogo</a></p>
                    <p><a href="#">Contacto</a></p>
                    <CartWidget/>
                </nav>
            </>;

}

export default NavBar 