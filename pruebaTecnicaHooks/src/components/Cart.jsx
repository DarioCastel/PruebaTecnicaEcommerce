import "../css/cart.css";

const Cart = () => {
  return (
    <>
      <div className="cartLogo">loguito</div>
      <div className="containerCart">
        <div className="cartElement">aca van los elementos del carrito</div>
        <span>precio total actual</span>
        <div className="cartClean">boton de borrar todo</div>
      </div>
    </>
  );
};

export default Cart;
