
// import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
// import FaSearch from '@mui/icons-material/Search';
// import FaHeart from '@mui/icons-material/FavoriteBorder';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import './Navbar2.css';
// import {  Link } from 'react-router-dom';
// import  { useState, useEffect, useRef } from 'react';
// //import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';





// function Navbar2() {
//     const [showMenu, setShowMenu] = useState(false);
//     const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setShowMenu(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
    
    
//     return (
//       <nav className="bg-white md:p-6   p-0 flex items-center justify-between border-b-2 border-gray-300 mt-2 ">
//         {/* Left Section */}
//         <div className="flex items-center">
//           <h1 className="md:text-lg text-sm font-bold">Merkato Gebya</h1>
//         </div>
  
//         {/* Middle Section - Navigation Links */}
//         <div>
//         <ul className="hidden md:flex">
//           <li className=" menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
//             <a href="/#home">Home</a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             < Link to="/about">About </Link>
//           </li>
//           <li className="menuItem hover:scale-110">
//           <Link to="/contact">Contact</Link>
//           </li>
//           <li className="menuItem hover:scale-110">
//           <Link to="/signup">Sign up</Link>
//           </li>
//         </ul>
//       </div>



//        {/* Responsive Menu Icon */}
//        <div className="md:hidden" ref={menuRef}>
//       {showMenu ? (
//         <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
//       ) : (
//         <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
//       )}

//       {/* Responsive Menu */}
//       {showMenu && (
//         <div className="absolute top-20 right-40 bg-white border border-gray-300 p-4">
//           <ul className="flex flex-col">
//             <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
//               <a href="/#home">Home</a>
//             </li>
//             <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
//             < Link to="/about">About </Link>
//             </li>
//             <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
//               <Link to="/signup">Sign up</Link>
//                 {/* <a href="/#signup">Sign up</a> */}
//               </li>
//           </ul>
//         </div>
//       )}
//     </div>
      
//         {/* Right Section - Search and Icons */}
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="border border-gray-300 px-2 py-1 bg-gray-300 w-40 text-[10px] md:w-[400px] md:text-[16px] rounded-md"
//             />
//             <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
  
//           <FaHeart className="text-gray-500 hover:text-red-500  hidden" />
//           <ShoppingCart className="text-gray-500 hover:text-blue-500  hidden" />
      
//         </div>

        
//       </nav>
//     );
//   }
  
//   export default Navbar2;



import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import FaSearch from '@mui/icons-material/Search';
import FaHeart from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar2.css';

function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white md:p-6 p-0 flex items-center justify-between border-b-2 border-gray-300 mt-2">
      {/* Left Section */}
      <div className="flex items-center">
        <h1 className="md:text-lg text-sm font-bold">Merkato Gebya</h1>
      </div>

      {/* Middle Section - Navigation Links */}
      <div>
        <ul className="hidden md:flex">
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/about">About</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>

      {/* Responsive Menu Icon */}
      <div className="md:hidden" ref={menuRef}>
        {showMenu ? (
          <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
        ) : (
          <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
        )}

        {/* Responsive Menu */}
        {showMenu && (
          <div className="absolute top-20 right-40 bg-white border border-gray-300 p-4">
            <ul className="flex flex-col">
              <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
                <a href="/home">Home</a>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
                <Link to="/about">About</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={toggleMenu}>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - Search and Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border border-gray-300 px-2 py-1 bg-gray-300 w-40 text-[10px] md:w-[400px] md:text-[16px] rounded-md"
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <FaHeart className="text-gray-500 hover:text-red-500 hidden" />
        <ShoppingCart className="text-gray-500 hover:text-blue-500 hidden" />
      </div>
    </nav>
  );
}

export default Navbar2;