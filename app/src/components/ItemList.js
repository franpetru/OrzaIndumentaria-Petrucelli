import Item from "./Item"


const ItemList = ({items}) => {
    console.log({items})
    return (
        <div className="itemsContainer">
            {items.map(item=>{
                return  (
                            <Item key={items.id} items={item}/>
                        )
            })}
        </div>
    )
}



export default ItemList