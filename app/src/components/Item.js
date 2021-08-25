import {Link} from "react-router-dom"

const Item = ({items}) => {

    return  (
                <article className="itemCard">
                    <h3 className="itemTitle">{items.title}</h3>
                    <img className="itemImg" src={items.pictureUrl} alt="" />
                    <button>
                        <Link to={{ pathname: `/item/${items.id}`, state: items }}>ver detalle</Link>
                    </button>
                </article>
            )
};

export default Item;