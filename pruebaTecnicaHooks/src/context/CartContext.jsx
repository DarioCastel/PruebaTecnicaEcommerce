import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartContexto ({children}) {

    const [openModal, setOpenModal] = useState(false)
    const [itemToBuy, setItemToBuy] = useState([])

    return(
        <CartContext.Provider value={{openModal,setOpenModal,itemToBuy,setItemToBuy}}>
            {children}
        </CartContext.Provider>
    )
}