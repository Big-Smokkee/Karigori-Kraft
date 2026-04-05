import './App.css'
import Categories from './components/Categories/Categories'
import Characteristics from './components/Characteristics/Characteristics'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

const categoriesPromise = fetch('/categories.json').then(res => res.json())
function App() {

  return (
    <>
      <div className='root'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Characteristics></Characteristics>
        <Categories categoriesPromise={categoriesPromise}></Categories>
      </div>
    </>
  )
}

export default App
