
import ItemCount from "./itemCount"
const ItemListContainer = ({greeting}) => {

    return  <>
                
                <h1 className="tituloContador">{greeting}</h1>
                <ItemCount initial = {1} stock = {10} onAdd={(cantidad) => {console.log(cantidad)}}/>

            </>;
}
export default ItemListContainer