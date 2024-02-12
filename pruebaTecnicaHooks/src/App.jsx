import './App.css'
import Head from './components/Head'
import Products from './components/Products'
import productosTest from './mocks/productosTest.json'
import { useFilters } from "./hooks/useFilters"


function App() {
  const {filterProductos} = useFilters()
  const prodFiltrados = filterProductos(productosTest.products)
  return (
    <>

      <div className="containerMain">
        <Head
        productFilter={productosTest}/>
        <Products
        productFilter={prodFiltrados}/>
      </div>

    </>
  )
}

export default App
