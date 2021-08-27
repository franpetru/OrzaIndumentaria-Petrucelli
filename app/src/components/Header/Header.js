import NavBar from "../NavBar/NavBar"
import {NavLink} from "react-router-dom"
import "./style.css"

const Header = () =>{
    return <>
            <header className="headerMain">
                <NavLink to="/" exact>
                    <h1 className="tituloName">Orza Indumentaria</h1>
                </NavLink>
                <NavBar/>
            </header>
            </>;
}
export default Header