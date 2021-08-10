import React, { useEffect, useState } from "react";
import {i} from "./items"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [items,setItems] = useState([])
    
    useEffect(()=>{
      
      const getItems = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(items)
        },2000)
        
      })
  
      getItems.then((items)=>setItems(i))
      
    },[])
    
  
    
    return (  
      
      <div>
        <h2 className="itemListContainer-title">Item List Container</h2>
        <ItemList items={items}/>
      </div>
      
    )
  }

export default ItemListContainer