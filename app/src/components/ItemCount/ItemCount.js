import {useState} from "react"
import "./style.css"

const ItemCount = ({initial, stock, onAdd}) => {

const [contador, setContador] = useState(initial)

const aumentarContador = () => {
    if (contador < stock) {
        setContador(contador + 1)
    }
}

const disminuirContador = () => {
    if (contador > 1) {
        setContador(contador - 1)
    }
}

const confirmar = () => {
    if (stock > 0) {
        onAdd(contador)
    }
    else{
        alert("No hay stock")
    }
    console.log({onAdd})
}
return  <>
        <div className="divContador">
            <button className="btnIcon" onClick={disminuirContador}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-dash-lg iconMenos" viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                </svg><i class="bi bi-plus-lg"></i>
            </button>

            <h2 class="numeroContador">{contador}</h2>

            <button className="btnIcon" onClick={aumentarContador}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus-lg iconMas" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </button>

        </div>
        
        <h2 className="stockDisponibleTxt">Stock disponible: {stock}</h2>

        <div className="btnAgregarCarritoContainer">
            <button className="btnAgregarCarrito" onClick={confirmar}>Agregar al carrito</button>
        </div>
        
        </>;
}
export default ItemCount