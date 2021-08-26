import ItemDetail from "./ItemDetail"


const ItemDetailList = ({itemsDetail}) => {
    console.log({itemsDetail})
    return (
        <div className="itemsContainer">
            {itemsDetail.map(itemDetail=>{
                return  (
                            <ItemDetail key={itemDetail.id} itemsDetail={itemDetail}/>
                        )
            })}
        </div>
    )
}



export default ItemDetailList