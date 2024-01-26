import { useState } from "react";
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/ExpandMore';
function Navbar1() {
    const [language, setLanguage] = useState('en')
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
      };

  return (
    <div className="bg-black p-6  s">
      <div className="container mx-auto flex justify-between items-center h-2 space-x-2">
        {/* Left Section */}
        <div className="flex items-center md:text-lg sm:text-sm  ">
          <div className="text-white mr-4  md:text-[16px] text-[10px]">
            Summer Sale for All Summer Suits And Free Express Delivery - Off 50%
          </div>
          <a href="#" className="text-white underline md:text-[16px] text-[10px] hover:text-blue-400 transition duration-300" >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className= "text-white mt-2 md:text-[16px]  text-[10px] font-serif flex justify-center flex-col space-y-1  md:text-lg sm:text-sm" >
           {language === 'en' ? 'English' : 'Amharic'}
          
          <Button
            color="inherit"
            onClick={toggleLanguage}
            startIcon={<LanguageIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
