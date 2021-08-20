
const ItemDetail = ({itemDetail}) => {

console.log(itemDetail)

    return (
        <article className="itemsDetail">
            <h3>{itemDetail.title}</h3>
            <img src={itemDetail.pictureUrl} alt="" />
            <h4>{itemDetail.price}</h4>
        </article>
    );
    
}

export default ItemDetail