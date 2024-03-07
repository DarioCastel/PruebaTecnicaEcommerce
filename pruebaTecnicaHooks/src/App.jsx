import './App.css'
import Head from './components/Head'
import Products from './components/Products'
import productosTest from './mocks/productosTest.json'
import { useFilters } from "./hooks/useFilters"
import ModalCart from './components/ModalCart'
import { useCart } from './hooks/useCart'



function App() {
  const {filterProductos} = useFilters()
  const prodFiltrados = filterProductos(productosTest.products)

  const {openModal,}= useCart()
  console.log(openModal)
  return (
    <>
      <div className="containerMain">
      {openModal&&<ModalCart/>}
        <Head
        productFilter={productosTest}/>
        <Products
        productFilter={prodFiltrados}/>
      </div>

    </>
  )
}

export default App
