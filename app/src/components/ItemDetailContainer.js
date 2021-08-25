import React, { useEffect, useState } from "react"
import Data from "./json/JSONProductos.json"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

const [itemDetail,setItemsDetail] = useState()

console.log(Data)

useEffect(() => {

    

    setTimeout(() => {
        Promise
            .resolve.filter(Data.id)
            .then(response => {
                setItemsDetail(response)
            })
    }, 1000)

}, [])

return (
            <div>
                <p>Detalle Item</p>
                <ItemDetail itemDetails={itemDetail}/>
            </div>
        );
}

export default ItemDetailContainer;