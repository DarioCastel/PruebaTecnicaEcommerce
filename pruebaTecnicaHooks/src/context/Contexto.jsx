import React, { createContext, useContext, useState } from 'react'


export const MiContexto = createContext()



export function Contexto ({children}) {
  //aca tienen que ir los estados y sets de categoria y precio
  const [filter, setFilter] = useState({category:"all",price:0})


  return (
    <MiContexto.Provider value={{filter,setFilter}}>
        {children}
    </MiContexto.Provider>
  )
}

