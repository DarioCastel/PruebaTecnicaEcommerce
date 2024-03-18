import "../css/cart.css";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {

  const {setOpenModal}= useCart()

  const handlerOpen= ()=>{
    setOpenModal(true)
  }
  return (
    <>
      <button className="btnCart" onClick={handlerOpen}><FaShoppingCart />  Carrito</button>
    </>
  );
};

export default Cart;
