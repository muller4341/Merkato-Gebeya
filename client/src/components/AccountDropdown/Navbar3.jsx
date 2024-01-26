import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import FaSearch from '@mui/icons-material/Search';
import FaHeart from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../E-commerceHome/Navbar2.css';
import AccountIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

import  { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar3() {
  const navigate = useNavigate(); 
  const handleWishlistClick = () => {
    // Navigate to the wishlist page
    navigate('/wishlist');
  };
  const handleCartClick = () => {
    // Navigate to the wishlist page
    navigate('/cart');
  };

  const goToAccountPage = () => {
    navigate('/account'); // Use navigate to go to the '/account' page
    toggleAccountMenu(); // Optionally close the menu after navigating
  };
  const goToCheckPage = () => {
    navigate('/check'); // Use navigate to go to the '/check' page
    toggleAccountMenu(); // Optionally close the menu after navigating
  };
  const goTo404Page = () => {
    navigate('/error404'); // Use navigate to go to the '/check' page
    toggleAccountMenu(); // Optionally close the menu after navigating
  };
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    };
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowAccountMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };
    
  
    
    return (
      <nav className="bg-white md:p-6 w-full  p-0 flex items-center justify-between border-b-2 border-gray-300 mt-2 ">
        {/* Left Section */}
        <div className="flex items-center">
          <h1 className="md:text-[16px] text-[10px] font-bold">Merkato Gebya</h1>
        </div>
  
        {/* Middle Section - Navigation Links */}
        <div>
        <ul className="hidden md:flex">
          <li className=" menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
          <a href="/home">Home</a>
          </li>
          <li className="menuItem hover:scale-110">
          <Link to="/about">About</Link>
          </li>
          <li className="menuItem hover:scale-110">
          <Link to="/contact">Contact</Link>
          </li>
          <li className="menuItem hover:scale-110">
          <Link to="/signup">Sign Up</Link>
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
        <div className="flex items-center md:space-x-4 space-x-2">
          <div className="  relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 px-2 py-1 bg-gray-300  text-[10px] md:w-[400px] w-36 md:text-[16px] rounded-md"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[10px] md:text-[16px] text-gray-500" />
          </div>
  
          <FaHeart  onClick={handleWishlistClick} className="text-gray-500 hover:text-red-500  hidden" />
          <ShoppingCart onClick={handleCartClick} className="text-gray-500 hover:text-blue-500  hidden" />
    <div className="relative flex items-start" ref={dropdownRef}>
  <AccountIcon style={{ color: 'red' }} onClick={toggleAccountMenu} />
  {showAccountMenu && (
    <div className=" absolute top-10  right-0 bg-gray-500 border border-gray-300  p-4 z-10">
      <ul className="flex flex-col md:w-80 h-40  w-40">
        <li className=" p-1 menuItem flex  hover:scale-110">
        <div className='flex flex-row' onClick={goToAccountPage}>
  <AccountBoxIcon className="ml-[-4] " />
  <Link to="/account" className="ml-2 md:text-[14px] text-[10px]">Manage my account</Link>
</div>
        </li>
        <li className=" p-1 menuItem flex  hover:scale-110">
          <LocalMallIcon className="mr-2" />
          <p className='ml-2 md:text-[14px] text-[10px]'>My order</p>
        </li> 
        <li className="p-1 menuItem flex  hover:scale-110">
        <div className='flex flex-row' onClick={goTo404Page}>
          <HighlightOffIcon className="mr-2" />
          <Link to="/error404" className='ml-2 md:text-[14px] text-[10px]'>My cancellation</Link>
          </div>
        </li>
        <li className="p-1 menuItem flex hover:scale-110">
          <StarBorderIcon className="mr-2" />
          <div className='flex flex-row' onClick={goToCheckPage}>
          <Link to="/check" className='ml-2 md:text-[14px] text-[10px]'>My reviews</Link>
          </div>
        </li>
        <li className="p-1menuItem flex  hover:scale-110">
          <LogoutOutlinedIcon className="mr-2" />
          <p className='ml-2 md:text-[14px] text-[10px]'>Logout</p>
        </li>
      </ul>
    </div>
  )}
</div>

        </div>
        
        
        
      </nav>
        
      
    );
  }
  
  export default Navbar3;