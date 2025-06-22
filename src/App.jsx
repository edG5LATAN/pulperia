import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Productos from './components/productos/Productos'
import Aserca from './components/aserca/Aserca'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producto' element={<Productos />} />
        <Route path='/asercade' element={<Aserca />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
