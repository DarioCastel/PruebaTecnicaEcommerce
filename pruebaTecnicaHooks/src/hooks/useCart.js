import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export function useCart (){
const {openModal,setOpenModal,itemToBuy,setItemToBuy}= useContext(CartContext)

const addCart= (product)=>{
    const newCart = [...itemToBuy,product]
    setItemToBuy(newCart)
}

    return{

        openModal,
        setOpenModal,
        itemToBuy,
        addCart,
        setItemToBuy
    }
    
}