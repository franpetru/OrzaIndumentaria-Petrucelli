import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"


const App = () => {

return (
        <>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/categoria/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Switch>
        </BrowserRouter>
            

        </>
        )
}

export default App