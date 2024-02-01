import "../css/itemProduct.css"

const ItemProduct = ({key,name,price,category,thumbnail}) => {
  return (
    <div className="ItemProductContainer">
        <div className="ItemImage">
            <img src={thumbnail} alt="" />
        </div>
        <div className="itemDescription">
            <span className="itemName">{name}</span>
            <span>{"$"}{price}</span>
            <span>{category}</span>
        </div>
    </div>
  )
}

export default ItemProduct