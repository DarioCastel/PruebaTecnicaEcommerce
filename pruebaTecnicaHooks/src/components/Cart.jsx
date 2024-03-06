import "../css/cart.css";
import { useCart } from "../hooks/useCart";

const Cart = () => {

  const {setOpenModal}= useCart()

  const handlerOpen= ()=>{
    setOpenModal(true)
  }
  return (
    <>
      <button className="btnCart" onClick={handlerOpen}>Carrito</button>
      <div className="containerCart">
        <div className="cartElement">aca van los elementos del carrito</div>
        <span>precio total actual</span>
        <div className="cartClean">boton de borrar todo</div>
      </div>
    </>
  );
};

export default Cart;
