import './App.css'
import Characteristics from './components/Characteristics/Characteristics'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='root'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Characteristics></Characteristics>
      </div>
    </>
  )
}

export default App
