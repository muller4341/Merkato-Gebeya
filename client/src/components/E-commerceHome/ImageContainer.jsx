import { useState } from 'react';

const ImageContainer = ({ imageSrc, buttonLabel, containerNumber }) => {
  const [showButton, setShowButton] = useState(false);

  return (
<div className=" flex md:flex-col flex-row  md:w-full  w-1/2  md:h-72 h-26 justify-center items-center ">
    <div
      className={`w-full  bg-gray-100 md:h-44  h-20 m-2 flex flex-col justify-center items-center ${
        showButton && 'hover:bg-gray-100'
      }`}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img src={imageSrc} alt={`Image ${containerNumber}`} className="w-2/3 md:h-44 h-20" />
      {showButton && (
        <button className='w-full bg-black md:text-[16px] text-[8px] text-white font-bold md:h-16 h-8'>{buttonLabel}</button>
      )}
    </div>
    </div>

  );
};

export default ImageContainer;
