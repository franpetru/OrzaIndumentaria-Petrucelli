
import React, { useEffect, useState } from "react";
import {i} from "./items"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [items,setItems] = useState([])
    
    useEffect(()=>{
      
      const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(items)
        },2000)
      })
  
      promise.then((items)=>setItems(i))
    
    },[])
  
    
    return (  
      <div>
        Item List Container
        <ItemList items={items}/>
      </div>
    )
  }

export default ItemListContainer