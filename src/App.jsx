import './App.css'
import { CartProvider } from './components/CartContext/CartContext'
import Categories from './components/Categories/Categories'
import Characteristics from './components/Characteristics/Characteristics'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

const categoriesPromise = fetch('/categories.json').then(res => res.json())
function App() {

  return (
    <>
      <div className='root'>
        <CartProvider>
          <Navbar></Navbar>
          <Hero></Hero>
          <Characteristics></Characteristics>
          <Categories categoriesPromise={categoriesPromise}></Categories>
          <Products></Products>
        </CartProvider>
      </div>
    </>
  )
}

export default App
