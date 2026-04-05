import './App.css'
import { CartProvider } from './components/CartContext/CartContext'
import Categories from './components/Categories/Categories'
import Characteristics from './components/Characteristics/Characteristics'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'

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
          <Testimonials></Testimonials>
          <Newsletter></Newsletter>
          <Footer></Footer>
        </CartProvider>
      </div>
    </>
  )
}

export default App
