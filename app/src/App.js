import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {createContext} from "react"
import CartProvider from "./components/CartContext"
import "../src/components/style.css"


const App = () => {

const contexto = createContext({})

return (
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/categoria/:categoria" component={ItemListContainer} />
                    <Route path="/producto/:id" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </CartProvider>
        )
}

export default App