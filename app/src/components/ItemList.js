import Item from "./Item"


const ItemList = ({items}) => {
    return (
        <div className="itemsContainer">
            {items.map(item=>{
                return  (
                            <Item key={items.categoria} items={item}/>
                        )
            })}
        </div>
    )
}



export default ItemList