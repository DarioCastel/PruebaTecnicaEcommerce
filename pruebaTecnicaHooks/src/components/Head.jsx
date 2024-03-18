import { useState } from "react";
import "../css/head.css";
import { useFilters } from "../hooks/useFilters";
import Logo from "../img/Captura.png"
import Cart from "./Cart";



const Head = ({ productFilter }) => {
  

  const {setFilter,filter,filterCategorias} = useFilters()
  const handleSelect = (event) => {
    setFilter(
      prevState=>({
        ...prevState,
        category:event.target.value
      })
    )
  };

  const handleSlice = (event)=>{
    setFilter(prevState=>({
      ...prevState,
      price:event.target.value
    }))
  }
  
  const categoriasFiltradas = filterCategorias(productFilter)
  return (
    <>
      <div className="headContainer">
        <div className="pagLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="priceFilter">
          {"Price filter: "}
          <input type="range" min="0" max="2000" onChange={handleSlice}/>
          <span>{"$"}{filter.price}</span>
        </div>
        <div className="categoryFilter">
          {"Category: "}
          <select onChange={handleSelect} name="Categoria" id="">
            <option value="all">all</option>
            {categoriasFiltradas.map(item=>(
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="cartContainer">
          <Cart/>
        </div>
      </div>
    </>
  );
};

export default Head;
