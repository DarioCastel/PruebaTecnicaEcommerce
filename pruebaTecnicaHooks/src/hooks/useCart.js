import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"



export function useCart (){
const {openModal,setOpenModal,itemToBuy,setItemToBuy}= useContext(CartContext)


useEffect(() => {
  const cartLocal = localStorage.getItem("cart")
  if(cartLocal){
    setItemToBuy(JSON.parse(cartLocal))
  }

}, [])

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
      localStorage.setItem("cart",JSON.stringify(itemToBuy))
    }
  };

const deleteItem= (titleToDelete)=>{
    const listFiltered= itemToBuy.filter(item => item.title !== titleToDelete)
    
    return(
      setItemToBuy(listFiltered),
      localStorage.setItem("cart",JSON.stringify(listFiltered))
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