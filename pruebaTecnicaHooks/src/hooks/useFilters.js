import { useContext } from "react";
import {MiContexto} from "../context/Contexto.jsx";


export function useFilters() {

  const { filter, setFilter } = useContext(MiContexto);

  const filterCategorias = (productosTest) => {
    const categories = productosTest.products.map((item) => item.category);
    const categoriasUnicas = [...new Set(categories)];
    return categoriasUnicas;
  };
  return (
    //lo que va a estar disponible para enviar
    filter, setFilter,filterCategorias
  );
}
