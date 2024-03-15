import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export function useCart (){
const {openModal,setOpenModal,itemToBuy,setItemToBuy}= useContext(CartContext)

const addCart = (product) => {
    const existingItem = itemToBuy.find(item => item.title === product.title);
  
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        cant: existingItem.cant + product.cant,
        subTotal: existingItem.subTotal + product.subTotal
      };
  
      const updatedItems = itemToBuy.map(item =>
        item.title === product.title ? updatedItem : item
      );
  
      setItemToBuy(updatedItems);
    } else {
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