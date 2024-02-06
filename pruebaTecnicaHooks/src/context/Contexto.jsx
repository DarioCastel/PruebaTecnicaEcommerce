import React, { createContext, useContext } from 'react'



const Contexto = () => {
    const miContexto = createContext()

    const ProveedorDeContexto= ({children})=>{
        const valorDeContext = "oli";
    }
  return (
    <miContexto.Provider value={valorDeContext}>
        {children}
    </miContexto.Provider>
  )
}

export default Contexto