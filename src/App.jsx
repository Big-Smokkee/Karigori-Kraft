import './App.css'
import DownBanner from './components/DownBanner/DownBanner'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='root'>
        <Navbar></Navbar>
        <Hero></Hero>
        <DownBanner></DownBanner>
      </div>
    </>
  )
}

export default App
