//import { useState } from "react";

const categories = [
    "Women's Fashion",
    "Men's Fashion",
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    "Baby's & Toys",
    'Groceries & Pets',
    'Health & Beauty',
  ];
  
  const Sidebar=()=> {
      
    return (
      
      <div className="  md:w-60 w-full bg-white p-5 md:border-r border-gray-300 justify-center items-center" >
        <ul className="md:mt-6  mt:4 md:space-y-3 space-y-0">
          {categories.map((category, index) => (
            <li key={index} className="mb-1 md:mb-3.5">
              <a href={`#${category}`} className="text-black hover:underline py-2 s md:text-[15px]  text-[10px]">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    );
  }
  
  export default Sidebar;
  