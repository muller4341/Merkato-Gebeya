
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar2 from './Navbar2';
import About from '../About/About';
import Contact from '../Contact/Contact';
import SignUp from '../SignUp/SignUp';
import Home from '../E-commerceHome/E-commerce'
import Navbar1 from './Navbar1';
function Navbar() {
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    
    </div>
    
  );
}

export default Navbar;