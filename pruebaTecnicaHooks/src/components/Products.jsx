import ItemProduct from "./ItemProduct"
import "../css/products.css"

const Products = ({productFilter}) => {
  return (
    <div className="productContainer">
      {productFilter.length===0&&"No se encontró productos"}
      {productFilter.slice(0,10).map((item)=>(
        <ItemProduct key={item.id} name={item.title} price={item.price} category={item.category} thumbnail={item.thumbnail}/>
      ))}
    </div>
  )
}

export default Products