import { useState } from "react";
import "../css/head.css";
import { useFilters } from "../hooks/useFilters";


const Head = ({ productFilter }) => {
  const [optionSelect, setOptionSelect] = useState("all");

  const {setFilter,filter,filterCategorias} = useFilters()
  const handleSelect = () => {
    setOptionSelect();
  };
  
  const categoriasFiltradas = filterCategorias(productFilter)
  console.log(categoriasFiltradas)
  return (
    <>
      <div className="headContainer">
        <div className="pagLogo"> logo pagina</div>
        <div className="priceFilter">filtro precio</div>
        <div className="categoryFilter">
          {"Categoria:"}
          <select name="Categoria" id="">
            Categoria
          </select>
        </div>
      </div>
    </>
  );
};

export default Head;
