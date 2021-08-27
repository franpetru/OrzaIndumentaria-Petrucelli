import {createContext,useState} from "react"

export const contexto = createContext()

const {Consumer,Provider} = contexto

const CartProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])

    const addItem = (itemDetail) => {
        
        /* const copia = carrito.slice(0)
        copia.push(item)
        setCarrito(copia) */

        setCarrito([...carrito,itemDetail])
    }

    const removeItem = (itemId) => {
        console.log(itemId)
    }

    const clear = () => {
        console.log("Clear")
    }

    const isInCart = (id) => {}

    const contexto_para_consumir = {carrito,addItem,removeItem,clear,isInCart}
    
    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}

export default CartProvider