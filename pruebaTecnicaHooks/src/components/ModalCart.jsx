import {createPortal} from 'react-dom'
import "../css/modalCart.css"
import { IoCloseCircleOutline } from "react-icons/io5";
import { useCart } from '../hooks/useCart';


const ModalCart = () => {


  const {setOpenModal,itemToBuy}= useCart()
  const handlerClose = ()=>{
    setOpenModal(false)
  }
  return createPortal (
    <>
    <div className="modalContainer">
    <IoCloseCircleOutline className="iconClose" onClick={handlerClose}/>
      <h1>Carrito</h1>
      {itemToBuy.length===0&&<span>{"carrito vacio"}</span>}
    </div>
    </>
  ,document.getElementById("cart"))
}

export default ModalCart