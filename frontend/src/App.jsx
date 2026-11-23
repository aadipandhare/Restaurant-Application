import React from 'react'
import {Routes,Route,Router} from 'react-router-dom'  
import { Home } from './pages/Home.jsx';
import { Navbar } from './components/Navbar'
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu'
import { Gallery } from './pages/Gallery';
import MenuBook from './components/MenuBook';

export const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/book" element={<MenuBook/>}/>

          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>      
    </div>
  )
}
