import React from "react"
import Item from "./Item"

const ItemList = ({items}) => {

    return (
        <ul>

            {items.map(items => {
                
                return <Item items={items}/>

            })}
        </ul>
    )

}
export default ItemList