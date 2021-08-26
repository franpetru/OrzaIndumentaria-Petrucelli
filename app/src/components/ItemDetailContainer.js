import React, { useEffect, useState } from "react"
import Data from "../components/json/JSONProductos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

const [itemsDetail,setItemsDetail] = useState()
const params = useParams()

console.log(Data)

useEffect(() => {

    

    setTimeout(() => {
            if(params.id){
            fetch()
            .resolve(Data.find(producto=>producto.id == params.id))
            .then(response => {
                setItemsDetail(response)
            })}
    }, 1000)

}, [])

return (  
    <div>
      <h2 className="itemDetailContainer-title">Item Detail Container</h2>
      <ItemDetail itemDetail={itemsDetail}/>
    </div>
  );
}

export default ItemDetailContainer;