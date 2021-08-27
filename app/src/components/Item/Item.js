import {Link} from "react-router-dom"
import "./style.css"

const Item = ({items}) => {

    return  (
                <article className="itemCard">
                    <h3 className="itemTitle">{items.title}</h3>
                    <img className="itemImg" src={items.pictureUrl} alt="" />
                    <button>
                        <Link to={`/producto/${items.id}`}>ver detalle</Link>
                    </button>
                </article>
            )
};

export default Item;