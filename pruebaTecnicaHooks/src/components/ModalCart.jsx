import {createPortal} from 'react-dom'
import "../css/modalCart.css"
import { IoCloseCircleOutline } from "react-icons/io5";
import { useCart } from '../hooks/useCart';


const ModalCart = () => {


  const {setOpenModal,itemToBuy}= useCart()
  const handlerClose = ()=>{
    setOpenModal(false)
  }
  console.log(itemToBuy)
  return createPortal (
    <>
    <div className="modalContainer">
    <IoCloseCircleOutline className="iconClose" onClick={handlerClose}/>
      <h1>Carrito</h1>
      {itemToBuy.length===0&&<span>{"carrito vacio"}</span>}
      {itemToBuy.map((item)=>(
        <div className="rendItem">
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.cant}</span>
          <span>{item.subTotal}</span>
        </div>
      ))}
    </div>
    </>
  ,document.getElementById("cart"))
}

export default ModalCart