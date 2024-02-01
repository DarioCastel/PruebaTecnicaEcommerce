import './App.css'
import Head from './components/Head'
import Products from './components/Products'
import productosTest from './mocks/productosTest.json'


function App() {
  console.log(productosTest)
  return (
    <>
      <div className="containerMain">
        <Head/>
        <Products
        productFilter={productosTest}/>
      </div>
    </>
  )
}

export default App
