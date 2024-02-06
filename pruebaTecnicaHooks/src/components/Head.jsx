import { useState } from "react";
import "../css/head.css";

const Head = ({ productFilter }) => {
  const [optionSelect, setOptionSelect] = useState("all");

  const handleSelect = () => {
    setOptionSelect();
  };
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
