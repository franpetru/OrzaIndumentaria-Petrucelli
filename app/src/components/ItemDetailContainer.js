import React, { useEffect, useState } from "react";
import Data from "./json/JSONProductos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [itemDetail,setItemsDetail] = useState([])
  const params = useParams()
  
  useEffect(() => {

    setTimeout(() => {
        Promise
            .resolve(Data)
            .then(response => {
                setItemsDetail(response)
            })
    }, 1000)

}, [])

  return (
      <div>
          <p>Detalle Item</p>
          <ItemDetail itemDetail={itemDetail}/>
      </div>
  );
}

export default ItemDetailContainer;