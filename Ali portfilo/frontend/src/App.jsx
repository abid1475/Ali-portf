import React from 'react'
import './App.css'
import Navbar from './commponents/navbar/Navbar'
import Footer from './commponents/footer/Footer'
import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import WhatsappIcon from './commponents/whatsappIcon/Whatsappicon'
import Projects from './pages/projects/Projects'
function App() {

  return (
    <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>\
    <Route path='/skills' element={<Skills/>}/>
    {/* <Route path='/project' element={<Projects/>}/> */}
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
  </Routes>
   <Footer/>
   <WhatsappIcon/>
    </>
  )
}

export default App


