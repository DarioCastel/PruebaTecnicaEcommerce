import { createPortal } from "react-dom";
import "../css/modalCart.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";

const ModalCart = () => {
  const { setOpenModal, itemToBuy } = useCart();
  const handlerClose = () => {
    setOpenModal(false);
  };

  const [acumulador, setAcumulador] = useState(0)

  useEffect(() => {
    itemToBuy.forEach((item) => {
      setAcumulador(acumulador + item.subTotal)
    });
  
  }, [itemToBuy])
  
  return createPortal(
    <>
      <div className="modalContainer">
        <IoCloseCircleOutline className="iconClose" onClick={handlerClose} />
        <h1>Carrito</h1>
        {itemToBuy.length === 0 && <span>{"carrito vacio"}</span>}
        {itemToBuy.length > 0 && (
          <table className="cartTable">
            <thead>
              <th>{"Item name"}</th>
              <th>{"Item price"}</th>
              <th>{"Item cant"}</th>
              <th>{"SubTotal"}</th>
            </thead>
            <tbody>
              {itemToBuy.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.cant}</td>
                  <td className="tdSub">{item.subTotal}</td>
                </tr>
              ))}
                <td className="nameTotal" colSpan="2" style={{textAlign:"left", borderTop:"1px solid black"}}>Total</td>
                <td className="tdTotal" colSpan="2" style={{textAlign:"right", borderTop:"1px solid black"}}>{"$ "}{acumulador}</td>

            </tbody>
          </table>
        )}
      </div>
    </>,
    document.getElementById("cart")
  );
};

export default ModalCart;
