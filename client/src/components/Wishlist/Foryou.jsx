 import wishlist4 from '../../assets/image2.png'
import wishlist3 from '../../assets/image3.png'
  import wishlist2 from '../../assets/image4.png'
 import wishlist1 from '../../assets/Explore3.png'
 import Fivestar from   '../../assets/Fivestar.png'
 import Fram785 from '../../assets/Frame 785.png'
 import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
 import VisibilityIcon from '@mui/icons-material/Visibility';

const Foryou = () => {
 return (
   <div className="w-screen md:h-[600px]  h-auto flex flex-col  items-center border-b border-gray-400 mb-4">
     {/* First row of small containers */}
     <div className="flex w-screen md:h-[100px] h-[60px]  flex-row justify-center  ">
       <div className="w-1/2  flex flex-col justify-center h-full  ">
        <p className=''></p>
       <img src={Fram785} alt="Image 3" className=" md:w-1/6  w-1/2 h- [60px] object-cover" />
       </div>
       <div className="w-1/2 md:h-full  h-[60px]  flex  flex-col  justify-center  md:flex-row md:justify-end    
        md:right-10 ">
           <button className='border border-gray-300 md:h-16 h-8 w-32 md:w-40 md:mr-10  md:mt-2 rounded-md hover:bg-gray-100 md:text-[14px] text-[10px]'> See All </button>
            </div>
     </div>

     {/* Second row with images */}
     <div className=" mb-  flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto md:justify-center  md:space-x-4  space-y-4 justify-start">
           {/* 1 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center  '>
                  <div className=" md:w-full w-1/2  md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
                  <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100' >
                    <img src={wishlist1} alt=" wishlist 1" className="w-full md:h-36 h-20 object-cover" />
                    <VisibilityIcon/>
                    </div>
                    <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold '>
                      <ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
                
                  </div>
                  <div className=" md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
                          <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Asus FHD Gaming Laptop </p>
                          <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                              <span className="text-red-500">$960</span>{' '}
                      <del className="text-black opacity-50">$1160</del>
                      </p>
                      <div className='flex flex-row j'>
                      <img className='md:ml-14 ml-4 w-[100px] h-[16px]' src={Fivestar} alt='Fivestar 5' />
                      <p className=''>(65)</p>
                      </div>
       
                   </div>
     </div>

     {/* 2 */}
     <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center  '>
              <div className=" md:w-full w-1/2  md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
              <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100' >
                <img src={wishlist2} alt="Image 3" className="w-full md:h-36 h-20 object-cover" />
                <VisibilityIcon/>
                </div>
                  <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold'>
                    <ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
                
              </div>
              <div className=" md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
                <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>IPS LCD Gming Monitor </p>
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                        <span className="text-red-500">$1160</span>
                </p> 
                <img className='md:ml-14 ml-4 w-[100px] h-[16px]' src={Fivestar} alt='Fivestar 5' />
       </div>
      </div>
      {/* 3 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center  '>
                  <div className=" md:w-full w-1/2  md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
                  <div className=' flex flex-row w-2/3 md:h-44  h-24 bg-gray-100 ' >
                    <img src={wishlist3} alt="Image 4" className="w-full md:h-36 h-20 object-cover" />
                    <VisibilityIcon/>
                    </div>
                      <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold
                      '><ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
                    
                  </div>
                  <div className=" md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>HAVITHV-G92 Gamingpad  </p>
                        <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                        <span className="text-red-500">$560</span>
                    </p> 
                    <img className='md:ml-14 ml-4 w-[100px] h-[16px]]' src={Fivestar} alt='Fivestar 5' />
                  </div>
      </div>
      {/* 4 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mb-6 mt-4 md:h-72 h-24 justify-center items-center  '>
              <div className=" md:w-full w-1/2  md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
              <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100' >
                <img src={wishlist4} alt="Image 5" className="w-full md:h-36 h-20 object-cover" />
                <VisibilityIcon/>
                </div>  
                  <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold'>
                    <ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
              </div>

              <div className="md:w-full w-1/2 h-20  md:mt-6    flex flex-col ">
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Ak-900 wired Keyboard </p>
                      <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                          <span className="text-red-500">$200</span>
                  </p> 
                  <img className='md:ml-14 ml-4 w-[100px] h-[16px] ' src={Fivestar} alt='Fivestar 5' />
              </div>
      </div>
     
     </div>
     </div>
     
       
 );
};
export default Foryou;








      







