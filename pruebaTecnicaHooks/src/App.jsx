import './App.css'
import Head from './components/Head'
import Products from './components/Products'
import productosTest from './mocks/productosTest.json'


function App() {

  return (
    <>

      <div className="containerMain">
        <Head
        productFilter={productosTest}/>
        <Products
        productFilter={productosTest}/>
      </div>

    </>
  )
}

export default App
