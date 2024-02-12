import { useState } from "react";
import "../css/head.css";
import { useFilters } from "../hooks/useFilters";


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
  
  const categoriasFiltradas = filterCategorias(productFilter)
  return (
    <>
      <div className="headContainer">
        <div className="pagLogo"> logo pagina</div>
        <div className="priceFilter">filtro precio</div>
        <div className="categoryFilter">
          {"Categoria:"}
          <select onChange={handleSelect} name="Categoria" id="">
            {categoriasFiltradas.map(item=>(
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Head;
