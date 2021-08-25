import React, { useEffect, useState } from "react"
import Data from "./json/JSONProductos.json"
import ItemDetailList from "./ItemDetailList"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

const [itemDetail,setItemsDetail] = useState()
const params = useParams()

console.log(Data)

useEffect(() => {

    

    setTimeout(() => {
            if(params.id){
            Promise
            .resolve(Data.find(producto=>producto.id === params.id))
            .then(response => {
                setItemsDetail(response)
            })}
    }, 1000)

}, [])

return (
            <div>
                <p>Detalle Item</p>
                <ItemDetailList itemDetail={itemDetail}/>
            </div>
        );
}

export default ItemDetailContainer;