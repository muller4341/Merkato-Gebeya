
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar2 from './components/E-commerceHome/Navbar2';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp'
import Home from './components/E-commerceHome/E-commerce'
import Navbar1 from './components/E-commerceHome/Navbar1'
import Login from './components/Login/Login';
import Accountdropdown  from './components/AccountDropdown/Account'
import React, { useState } from 'react'
import Navbar3 from './components/AccountDropdown/Navbar3';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart'
import Account from './components/Account/Account'
import Check from './components/Check/Check';
import Error404 from './components/404error/404error'

// import Profile from './components/Account/Profile';
// import AddressBook from './components/Account/AddressBook';
// import MyPaymentOption from './components/Account/MyPaymentOption';

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      
       <Navbar1/>
       {isLoggedIn ? <Navbar3 /> : <Navbar2 />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && (
            <>
          <Route path="/accountdropdown" element={<Accountdropdown/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/check" element={<Check/>} />
          <Route path="/error404" element={<Error404/>} />
          </>
          )}
          
          
          
      
        </Routes> 
    
    </div>
    
  );
}

export default App;


{/* <Route path="/account/profile" element={<Profile/>} />
          <Route path="/account/addressbook" element={<AddressBook/>} />
          <Route path="/account/paymentoption" element={<MyPaymentOption/>} />
             */}


