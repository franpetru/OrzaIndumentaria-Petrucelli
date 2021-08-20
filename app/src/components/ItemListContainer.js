import React, { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import Data from "./json/JSONProductos.json"


const ItemListContainer = () => {

    const [items,setItems] = useState([])
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
                  res(Data.filter(producto=>producto.id == params.id))
              }
              else{
                  res(Data)
              }
          }, 1000)  
      })

      return promesa
  }

    
    return (  
      
      <div>
        <h2 className="itemListContainer-title">Item List Container</h2>
        <ItemList items={items}/>
      </div>
      
    )
  }
export default ItemListContainer