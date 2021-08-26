import { useLocation } from "react-router-dom";

const ItemDetail = () => {

    const location = useLocation();
    const item = location.state
console.log(location)
    return (
        <article>
            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt="" />
            <h4>{item.price}</h4>
        </article>
    );
}
export default ItemDetail