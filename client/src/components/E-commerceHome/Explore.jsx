import { useState } from 'react'
import ImageContainer from './ImageContainer'
import Frame700 from '../../assets/Frame700.png'
 import Explore1 from '../../assets/Explore1.png'
 import Explore2 from '../../assets/Explore2.png'
 import Explore3 from '../../assets/Explore3.png'
 import Explore4 from '../../assets/Explore4.png'
 import Explore6 from '../../assets/Explore6.png'
 import Explore5 from '../../assets/Explore5.png'
 import Explore7 from '../../assets/Explore7.png'
 import Explore8 from '../../assets/Explore8.png'
 import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
 import Fivestar from '../../assets/Fivestar.png'
 import FourStar from '../../assets/FourStar.png' 
 
 import FourHalfStar from '../../assets/FourHalfStar.png'
//import OneStar from '../assets'
 //import TwoStar from '../assets'
 import ThreeStar from '../../assets/ThreeStar.png'

const Explore = () => {
  const [activeContainer, setActiveContainer] = useState(null);
  
  return (
    <div className=" md:mb-20 mt-10 w-screen md:h-[600px] h-auto  flex flex-col  items-center ">
      {/* First row of small containers */}
      <div className="flex w-screen h-[100px]  flex-col ">
      <div className=' h-[40px] w-[140px] ml-2'>
      <img src={Frame700} alt="Frame 625" className="object-cover  md:h-[40px] md:w-[140px] h-[28px] w-[100px]" />
      </div>
      
      <p className='text-black  md:mt-4  mt-2 mb-2 ml-4 md:text-[16px] text-[12px] font-bold'>Explore Our Products</p>
      
      <div  className=' hidden md:flex flex-row  justify-end mr-20'>
      <WestIcon />
      <EastIcon/>
      </div>

      </div>
       {/* Second row with images */}
       <div className="   flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto justify-center  md:space-x-4  space-y-4 ">
       {/* 1 */}
       <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
                 
                <ImageContainer
                
                imageSrc={Explore1}
                buttonLabel="Add to Cart"
                containerNumber={1}
                onMouseEnter={() => setActiveContainer(1)}
                onMouseLeave={() => setActiveContainer(null)}
              />
              

              <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col  justify-center">
                          <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Breed Dry Dog Food </p>
                          <div className='flex flex-row'>
                              <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$100</p>
                          <img className=' md:text-[16px] text-[10px]' src={ThreeStar} alt='Fivestar 5'/>
                          <p className='md:text-[16px] text-[10px]'>(35)</p>
                          </div>

              </div>
      </div>
      {/* 2 */}
      <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
                 
        <ImageContainer
          imageSrc={Explore2}
          buttonLabel="Add to Cart"
          containerNumber={2}
          onMouseEnter={() => setActiveContainer(2)}
          onMouseLeave={() => setActiveContainer(null)}
        />
              <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center ">
                          <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>CANON EOS DSLR Camera</p>
                              <div className='flex flex-row'>
                                  <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$360</p>
                          <img className=' md:text-[16px] text-[10px]' src={FourStar} alt='Fivestar 5'/>
                              <p className='md:text-[16px] text-[10px]'>(95)</p>
                          </div>
              </div>
        </div>
        {/* 3 */}
        <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore3}
          buttonLabel="Add to Cart"
          containerNumber={3}
          onMouseEnter={() => setActiveContainer(3)}
          onMouseLeave={() => setActiveContainer(null)}
        />
            <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center">
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>ASUS FHD Gaming Laptop </p>
                      <div className='flex flex-row'>
                          <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$700</p>
                  <img className=' md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
                      <p className='md:text-[16px] text-[10px]'>(325)</p>
                  </div>
            </div> 
        </div>
        {/* 4 */}
        <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore4}
          buttonLabel="Add to Cart"
          containerNumber={4}
          onMouseEnter={() => setActiveContainer(4)}
          onMouseLeave={() => setActiveContainer(null)}
        />
              <div className="md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col  justify-center">
                      <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Curology Product Set </p>
                          <div className='flex flex-row'>
                              <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$500</p>
                      <img className=' md:text-[16px] text-[10px]' src={FourStar} alt='Fivestar 5'/>
                          <p className='md:text-[16px] text-[10px]'>(145)</p>
                      </div>
              </div>
      </div>
      </div>
      
      {/* Fourth row with images */}
      <div className="   flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto justify-center  md:space-x-4  space-y-4 ">
        {/* 5 */}
       <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore5}
          buttonLabel="Add to Cart"
          containerNumber={5}
          onMouseEnter={() => setActiveContainer(5)}
          onMouseLeave={() => setActiveContainer(null)}
        />

                <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center">
                                  <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Kids Electric Car </p>
                                      <div className='flex flex-row'>
                                          <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$960</p>
                                  <img className=' md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
                                      <p className='md:text-[16px] text-[10px]'>(65)</p>
                                  </div>

                </div>
        </div>
        {/* 6 */}
        <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore6}
          buttonLabel="Add to Cart"
          containerNumber={6}
          onMouseEnter={() => setActiveContainer(6)}
          onMouseLeave={() => setActiveContainer(null)}
        />

                    <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center ">
                                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Jr.Zoom Soccer Cleats </p>
                                        <div className='flex flex-row'>
                                            <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$1160</p>
                                    <img className=' md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
                                        <p className='md:text-[16px] text-[10px]'>(35)</p>
                                    </div>
                    </div>
        </div>
        {/* 7 */}
        <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore7}
          buttonLabel="Add to Cart"
          containerNumber={7}
          onMouseEnter={() => setActiveContainer(7)}
          onMouseLeave={() => setActiveContainer(null)}
        />
                <div className=" md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center ">
                            <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>GP11 Shooter USB GamePad    </p>
                                <div className='flex flex-row'>
                                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$600</p>
                            <img className=' md:text-[16px] text-[10px]' src={FourHalfStar} alt='Fivestar 5'/>
                                <p className='md:text-[16px] text-[10px]'>(55)</p>
                            </div>
                </div>



        </div>
        {/* 8 */}
         <div className='  flex md:flex-col flex-row  w-full mt-4 md:h-72 h-30 justify-center   '>
        <ImageContainer
          imageSrc={Explore8}
          buttonLabel="Add to Cart"
          containerNumber={8}
          onMouseEnter={() => setActiveContainer(8)}
          onMouseLeave={() => setActiveContainer(null)}
        />


        <div className="md:w-full w-1/2 h-30 r  md:mt-6 flex flex-col justify-center">
                              <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Qulited Satin Jacket</p>
                                  <div className='flex flex-row'>
                                      <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>$660</p>
                              <img className=' md:text-[16px] text-[10px]' src={FourHalfStar} alt='Fivestar 5'/>
                                  <p className='md:text-[16px] text-[10px]'>(55)</p>
                              </div>
                </div>
        </div>
      </div>

      <button className="bg-red-500 text-white  border rounded-md px-4 py-2 mt-6 mb-4 md:text-[16px] text-[10px] hover:bg-red-600">View All Products </button>
    </div>
  );
};
export default Explore;




