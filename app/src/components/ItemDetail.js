import React from "react"

const ItemDetail = ({itemsDetail}) => {

    return (
        <li className="itemsDetail">
            <h3>{itemsDetail.title}</h3>
            <img src={itemsDetail.pictureURL} alt="" />
            <h4>{itemsDetail.price}</h4>
        </li>
    )

}
export default ItemDetail