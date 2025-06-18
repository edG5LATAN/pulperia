import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Productos from './components/productos/Productos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      {/* <Header /> */}
       <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Productos />} />
        {/* <Route path='/' element={<Home />} /> */}
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
