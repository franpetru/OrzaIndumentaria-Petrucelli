import { useContext } from "react"
import { contexto } from "../CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./style.css"

const ItemDetail = ({ itemDetail }) => {



    const {addItem} = useContext(contexto)

    const onAdd = (quantity) => {

        const item_para_agregar = {
            itemDetail : itemDetail ,
            cantidad : quantity
        }

        addItem(item_para_agregar)
        
    }
    return (
        <article className="itemsDetail">
            <h3 className="itemDetailTitle">{itemDetail[0].title}</h3>
            <img className="itemDetailImg" src={itemDetail[0].pictureUrl} alt="" />
            <h4 className="itemDetailPrice">${itemDetail[0].price}</h4>
            <ItemCount stock={itemDetail[0].stock} initial={itemDetail[0].stock >= 1 ? 1 : 1} onAdd={onAdd}/>
        </article>
    )

}
export default ItemDetail