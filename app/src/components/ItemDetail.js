import React from "react"

const ItemDetail = ({itemDetail}) => {

    return (
        <li className="itemsDetail">
            <h3>{itemDetail.title}</h3>
            <img src={itemDetail.pictureURL} alt="" />
            <h4>{itemDetail.price}</h4>
        </li>
    )

}
export default ItemDetail