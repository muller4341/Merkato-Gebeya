import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
 import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
 import image6 from '../../assets/image6.png'
 import EastIcon from '@mui/icons-material/East';
 import WestIcon from '@mui/icons-material/West';
 import Fivestar from '../../assets/Fivestar.png'
 import FourStar from '../../assets/FourStar.png' 
 import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
 import RemoveIcon from '@mui/icons-material/RemoveRedEyeRounded';
 import { useState } from 'react'
 import Frame625 from '../../assets/Frame625.png'

const MiddleContainer = () => {
  const [activeContainer, setActiveContainer] = useState(null);
  
  return (
    <div className="mt-2 w-screen md:h-[600px]  h-auto flex flex-col  items-center border-b border-gray-400 mb-4">
      {/* First row of small containers */}
      <div className="flex w-screen h-[100px] ">
        <div className="w-1/5 h-20 m-2">
        <img src={Frame625} alt="Frame625" className="  " />
        <p className='mt-1 md:text-[24px] text-[10px] font-bold'>Flash Sales </p>
        </div>
        <div className="md:w-1/5  w-3/5 h-20 m-2">
            <p className='ml-2 mt-2   md:text-[16px] text-[12px]'>  Days  Hours  Minutes  Seconds </p>
            <p className='ml-2 mt-2 font-bold md:text-[24px] text-[16px]'>  03 : 23 : 19 :  56  </p>
        </div>
        
        <div className="hidden md:w-1/5 md:h-20 m-2 md:flex flex-1  justify-end absolute  right-10 ">
            <WestIcon/>
            <EastIcon/>
             </div>
        
      </div>

      {/* Second row with images */}
      <div className="   flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto md:justify-center  md:space-x-4  space-y-4 justify-start">
      <div className='flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
            
            {/* 1 */}
            <div
              className={`md:w-full w-1/2 bg-gray-100 md:h-44  h-20 m-2 flex flex-row justify-center items-center' ${
                activeContainer === 1 && 'hover:bg-gray-100'
              }`}
              onMouseEnter={() => setActiveContainer(1)}
              onMouseLeave={() => setActiveContainer(null)}
            > <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
              <img src={image2} alt="Image 2" className="w-2/3 md:h-44 h-20 object-cover" />
              {activeContainer === 1 && (
                <button className='w-full h-4 md:h-6 md:text-[16px] text-[10px] bg-black  text-white font-bold '>Add to Cart</button>
              )}
              </div>
              <div className='flex flex-col justify-end mb-auto'>
              <FavoriteIcon/>
              <RemoveIcon/>
              </div>


            </div>
            
            <div className="md:w-full w-1/2 h-20  md:mt-6   bg-white">
            <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>HAVIT HV-G92 Gamepad </p>
            <p className='md:ml-14 ml-4'>
                <span className="text-red-500 md:text-[16px] text-[10px]">$120</span>{' '}
        <del className="text-black opacity-50 md:text-[16px] text-[10px]">$160</del>
        </p> 
        <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>

        </div>
      </div>
      {/* 2 */}
      <div className='flex md:flex-col flex-row md:w-1/5 w-full  md:h-72 h-20 justify-center items-center '>
            <div
              className={`md:w-full  md:h-44 h-20 w-1/2  bg-gray-100 m-2 flex flex-row justify-center items-center ${
                activeContainer === 2 && 'bg-gray-100'
              }`}
              onMouseEnter={() => setActiveContainer(2)}
              onMouseLeave={() => setActiveContainer(null)}
            >
              <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
              <img src={image3} alt="Image 3" className="w-3/4 md:h-40 h-20 object-cover" />
              {activeContainer === 2 && (
                <button className='w-full bg-black text-white font-bold h-4 md:h-6 md:text-[16px] text-[10px]'>Add to Cart</button>
              )}
              </div>
              <div className='flex flex-col justify-end mb-auto'>
              <FavoriteIcon/>
              <RemoveIcon/>
              </div>

            </div>
            <div className=" md:w-full h-20 md:mt-6 w-1/2    bg-white">
        <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>AK-900 wired keyboard </p>
            <p className='md:ml-14 ml-4 '>
                <span className="text-red-500 md:text-[16px] text-[10px]">$960</span>{' '}
        <del className="text-black opacity-50 md:text-[16px] text-[10px]">$1160</del>
        </p> 
        <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]'src={FourStar} alt='Fivestar 5'/>
        </div>
      </div>
      {/* 3 */}
      <div className='flex md:flex-col flex-row md:w-1/5 w-full md:h-72 h-20 justify-center items-center  '>
            <div
              className={`md:w-full bg-gray-100 w-1/2 h-20 md:h-44 m-2 flex flex-row justify-center items-center ${
                activeContainer === 3 && 'hover:bg-gray-100'
              }`}
              onMouseEnter={() => setActiveContainer(3)}
              onMouseLeave={() => setActiveContainer(null)}
            >
              <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
              <img src={image4} alt="Image 4" className="w-2/3 md:h-44 h-20 object-cover" />
              {activeContainer === 3 && (
                <button className='w-full bg-black text-white font-bold h-4 md:h-6 md:text-[16px] text-[10px]'>Add to Cart</button>
              )}
            </div>

            <div className='flex flex-col justify-end mb-auto'>
              <FavoriteIcon/>
              <RemoveIcon/>
              </div>
              </div>
            <div className=" md:w-full w-1/2 md:mt-6 h-20   bg-white">
        <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>IPS LCD Gaming Moniter </p>
            <p className='md:ml-14 ml-4'>
                <span className="text-red-500 md:text-[16px] text-[10px]">$370</span>{' '}
        <del className="text-black opacity-50 md:text-[16px] text-[10px]">$400</del>
        </p> 
        <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
        </div>
        </div>
        {/* 4 */}
      <div className='flex md:flex-col flex-row md:w-1/5 w-full md:h-72 h-20 justify-center items-center  '>
            <div
              className={`md:w-full w-1/2 bg-gray-100 md:h-44 h-20 m-2 flex flex-row justify-center items-center ${
                activeContainer === 4 && 'hover:bg-gray-100'
              }`}
              onMouseEnter={() => setActiveContainer(4)}
              onMouseLeave={() => setActiveContainer(null)}
            >
              <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
              <img src={image5} alt="Image 5" className="w-2/3 md:h-44 h-20 object-cover" />
              {activeContainer === 4 && (
                <button className='w-full bg-black text-white font-bold h-4 md:h-6 md:text-[16px] text-[10px]'>Add to Cart</button>
              )}
              </div>
              <div className='flex flex-col justify-end mb-auto'>
              <FavoriteIcon/>
              <RemoveIcon/>
              </div>

            </div>
            <div className="md:w-full w-1/2 md:mt-6 h-20  bg-white">
        <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>S-serais comfort chair </p>
            <p className='md:ml-14 ml-4'>
                <span className="text-red-500 md:text-[16px] text-[10px]">$375</span>{' '}
        <del className="text-black opacity-50 md:text-[16px] text-[10px]">$400</del>
        </p> 
        <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
        </div>
      </div>
      {/* 5 */}
      <div className='flex md:flex-col flex-row md:w-1/5 w-full md:h-72  h-20 justify-center items-center  '>
              <div
                className={` w-1/2 md:w-full bg-gray-100 md:h-44 h-20 m-2 flex flex-row justify-center items-center ${
                  activeContainer === 5 && 'hover:bg-gray-100'
                }`}
                onMouseEnter={() => setActiveContainer(5)}
                onMouseLeave={() => setActiveContainer(null)}
              >
                <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
                <img src={image6} alt="Image 6" className="w-2/3 md:h-44 h-20 object-cover" />
                {activeContainer === 5 && (
                  <button className='w-full bg-black text-white font-bold h-4 md:h-6 md:text-[16px] text-[10px]'>Add to Cart</button>
                )}
              </div> 
              <div className='flex flex-col justify-end mb-auto'>
              <FavoriteIcon/>
              <RemoveIcon/>
              </div>

              </div>
          <div className=" md:w-full w-1/2 h-20 md:mt-6 bg-white">
        <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>S-serais comfort chair </p>
            <p className='md:ml-14 ml-4'>
                <span className="text-red-500 md:text-[16px] text-[10px]">$375</span>{' '}
        <del className="text-black opacity-50 md:text-[16px] text-[10px]">$400</del>
        </p> 
        <img  className='md:ml-14 ml-4 md:text-[16px] text-[10px]'src={Fivestar} alt='Fivestar 5'/>
        </div>
        </div>
        
    </div>  
  <button className="bg-red-500 border rounded-md text-white px-4 mb-4 md:w-40  w-24 md:text-[16px] text-[8px] py-2 mt-4 hover:bg-red-900">View All Products </button>
    </div>
  );
};
export default MiddleContainer;
