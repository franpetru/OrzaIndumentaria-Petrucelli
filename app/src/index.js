
//1- TENER REACT EN SCOPE
import React from "react"
//2- TENER REACT.DOM EN SCOPE
import ReactDOM from "react-dom"
//3- CREAR UN COMPONENTE O IMPORTARLO

import App from "./App.js"
//const App = () => "Hola Mundo"

//4- RENDERIZAR LA APLICACION UNA UNICA VEZ
ReactDOM.render(<App/>, document.getElementById('root'))