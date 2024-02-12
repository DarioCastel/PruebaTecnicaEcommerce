import { useContext } from "react";
import { MiContexto } from "../context/Contexto.jsx";

export function useFilters() {
  const { filter, setFilter } = useContext(MiContexto);

  const filterCategorias = (productosTest) => {
    const categories = productosTest.products.map((item) => item.category);
    const categoriasUnicas = [...new Set(categories)];
    return categoriasUnicas;
  };

  const filterProductos = (productosTest) => {
    return productosTest.filter((product) => {
      return (
        product.price >= filter.price &&
        (filter.category === "all" || product.category === filter.category)
      );
    });
  };
  return {
    filter,
    setFilter,
    filterCategorias,
    filterProductos,
  };
}
