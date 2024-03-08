import { useState } from "react"
import "../css/itemProduct.css"
import { useCart } from "../hooks/useCart"

const ItemProduct = ({key,name,price,category,thumbnail}) => {

  const {addCart}=useCart()
  
  const [contador, setContador] = useState(1)

  const handlerDisc = ()=>{
    if (contador>1){setContador(contador-1)}
  }

  const handlerAdd = ()=>{
    setContador(contador+1)
  }

  

 const handlerItemAdd= ()=>{
  const addItem ={
    "id":key,
    "title":name,
    "price":price,
    "cant":contador,
    "subTotal":(price*contador)
  }
  addCart(addItem)
 }
  

  return (
    <div className="itemProductContainer">
        <div className="itemImage">
            <img src={thumbnail} alt="" />
        </div>
        <div className="itemDescription">
            <span className="itemName">{name}</span>
            <span>{"$"}{price}</span>
            <span>{category}</span>
            <div className="btnItems">
              <button className="addItem" onClick={handlerItemAdd}>agregar carrito</button>
              <div className="contItems">
                <button className="discItem" onClick={handlerDisc}>{"-"}</button>
                <span className="cantItem">{contador}</span>
                <button className="addItem" onClick={handlerAdd}>{"+"}</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ItemProduct