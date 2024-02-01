import ItemProduct from "./ItemProduct"

const Products = ({productFilter}) => {
  console.log(productFilter)
  return (
    <div>
      {productFilter.products.map((item)=>(
        <ItemProduct key={item.id}/>
      ))}
    </div>
  )
}

export default Products