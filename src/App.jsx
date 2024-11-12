import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/main'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App
