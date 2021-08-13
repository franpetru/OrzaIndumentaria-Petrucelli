import { Link } from "react-router-dom"

const ItemDetail = ({itemsDetail}) => {

    console.log(itemsDetail)
    return (
        <article className="itemsDetail">
            <h3>{itemsDetail.title}</h3>
            <img src={itemsDetail.pictureURL} alt="" />
            <h4>{itemsDetail.price}</h4>
            <button>
                <Link to={`/item/${itemsDetail.id}`}>ver detalle</Link>
            </button>
        </article>
    )

}
export default ItemDetail