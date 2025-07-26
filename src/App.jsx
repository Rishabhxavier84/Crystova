import './App.css'
import Navbar from './Components/NavBar/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'

function App() {
  

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Crystova" element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
