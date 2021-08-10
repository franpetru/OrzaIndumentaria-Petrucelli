import React, { useEffect, useState } from "react";
import {i} from "./items"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [itemsDetail,setItemsDetail] = useState([])
    
    useEffect(()=>{
      
      const getItems = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(itemsDetail)
        },2000)
      })
  
      getItems.then((itemsDetail)=>setItemsDetail(i))
    
    },[])
    
  
    
    return (  
      <div>
        <h2 className="itemDetailContainer-title">Item Detail Container</h2>
        <ItemDetail itemsDetail={itemsDetail}/>
      </div>
    )
  }

export default ItemDetailContainer