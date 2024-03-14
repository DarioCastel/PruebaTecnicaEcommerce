import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export function useCart (){
const {openModal,setOpenModal,itemToBuy,setItemToBuy}= useContext(CartContext)

const addCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = itemToBuy.find(item => item.title === product.title);
  
    if (existingItem) {
      // Si el producto ya existe, actualiza la cantidad y el subtotal
      const updatedItem = {
        ...existingItem,
        cant: existingItem.cant + product.cant,
        subTotal: existingItem.subTotal + product.subTotal
      };
  
      // Crea un nuevo array con el elemento actualizado y los demás elementos sin cambios
      const updatedItems = itemToBuy.map(item =>
        item.title === product.title ? updatedItem : item
      );
  
      // Actualiza el estado con el nuevo array modificado
      setItemToBuy(updatedItems);
    } else {
      // Si el producto no existe, agrégalo al carrito
      setItemToBuy([...itemToBuy, product]);
    }
  };

const deleteItem= (titleToDelete)=>{
    const listFiltered= itemToBuy.filter(item => item.title !== titleToDelete)
    return(
        setItemToBuy(listFiltered)
    )
}

    return{

        openModal,
        setOpenModal,
        itemToBuy,
        addCart,
        setItemToBuy,
        deleteItem
    }
    
}