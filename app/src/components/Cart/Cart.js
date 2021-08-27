import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../CartContext";
import "./style.css"

const Cart = () => {

    const { carrito , removeItem , clear } = useContext(contexto)

    return ( 
        <div>
            Cart

            {carrito.map(item =>
                <div className="itemCartContainer" key={item.itemDetail[0].id}>
                    <Link className="itemCartTitle" to={`/producto/${item.itemDetail[0].id}`}><h2>{item.itemDetail[0].title}</h2></Link>
                    <img className="imagenCarrito" src={item.itemDetail[0].pictureUrl} alt="" />
                    <h2 className="itemCartTitle">Cantidad: {item.cantidad} Precio por unidad: ${item.itemDetail[0].price * item.cantidad}</h2>
                    <button onClick={()=>removeItem(item.itemDetail[0].id)}>borrar</button>
                </div>
            )}       
        </div>  
    )
}

export default Cart;