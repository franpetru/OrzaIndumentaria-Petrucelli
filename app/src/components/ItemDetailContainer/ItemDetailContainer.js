import React, { useEffect, useState } from "react"
import Data from "../json/JSONProductos.json"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

const [itemDetail,setItemsDetail] = useState([0])
const params = useParams()

console.log(itemDetail)

useEffect(() => {

    

    setTimeout(() => {
            if(params.id){
            Promise
            .resolve(Data.filter(producto=>producto.id == params.id))
            .then(response => {
                setItemsDetail(response)
            })}
    }, 1000)

}, [])

return (
            <div>
                <ItemDetail itemDetail={itemDetail}/>
            </div>
        );
}

export default ItemDetailContainer;