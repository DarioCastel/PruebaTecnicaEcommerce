import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export function useCart (){
const {openModal,setOpenModal,itemToBuy,setItemToBuy}= useContext(CartContext)



    return{

        openModal,
        setOpenModal,
        itemToBuy
    }
    
}