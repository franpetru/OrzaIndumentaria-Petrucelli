import React, { useEffect, useState } from "react";
import {i} from "./items"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  
  const [itemsDetails,setItems] = useState([])
  const params = useParams()
  
  useEffect(()=>{

    const promesa = getItem()
      promesa.then(json=>{
          setItems(json)
      })

  }, [])
    
  const getItem = () => {

    const promesa = new Promise((res,rej)=>{
        setTimeout(() => {

            if(params.id){
                res(i.filter(producto=>producto.id == params.id))
            }
            else{
                res(i)
            }
        }, 2000)  
    })

    return promesa
}

console.log(i.id) 
    return (  
      <div>
        <h2 className="itemDetailContainer-title">Item Detail Container</h2>
        <ItemDetail itemsDetail={itemsDetails}/>
      </div>
    )
  }

export default ItemDetailContainer