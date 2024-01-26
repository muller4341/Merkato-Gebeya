
import Best1 from '../../assets/Best1.png'
import Best2 from '../../assets/Best2.png'
import Best3 from '../../assets/Best3.png'
import Best4 from '../../assets/Best4.png'
import Fivestar from '../../assets/Fivestar.png'
import FourHalfStar from '../../assets/FourHalfStar.png'
import Frame620 from '../../assets/Frame620.png'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
 import RemoveIcon from '@mui/icons-material/RemoveRedEyeRounded';
const BestSelling = () => {
 return (
   <div className=" mt-10 w-screen h-[500px] flex flex-col  items-center  mb-4">
     {/* First row of small containers */}
     <div className="flex w-screen h-[100px]  flex-col ">
     <div className=' md:h-[40px] md:w-[140px]  h-[30px] w-[100px] ml-2'>
     <img src={Frame620} alt="Frame 625" className="object-cover h-full w-full" />
     </div>
     <div className=' flex flex-row md:m-4 m-2 '>
     <p className='text-black  mt-4 ml-4 md:text-[16px]  text-[10px] font-bold'>Best Selling Products</p>
     
     <button className="bg-red-500 md:text-[16px]  text-[10px] border rounded-md  text-white px-4 py-2 ml-auto hover:bg-red-900">View All Products </button>
     
     </div>

     </div>

     {/* Second row with images */}
     <div className="  flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto md:justify-center  md:space-x-4  space-y-4 justify-start">
     {/* 1 */}
     <div className='flex   md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
            <div className=" flex flex-row justify-center items-center bg-gray-100 md:w-full w-1/2  md:h-44  h-20 ">
                  <img src={Best1} alt="Best 1" className="w-2/3 md:h-44 h-20 object-cover" />
                  <div className='flex flex-col justify-end mb-auto'>
                      <FavoriteIcon/>
                      <RemoveIcon/>
                </div>
            </div>


            <div className=" flex flex-col md:w-full w-1/2 h-20 m-2  justify-center    ">
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>The north cot </p>
                    <p className='md:ml-14 ml-4'>
                        <span className="text-red-500 md:text-[16px] text-[10px]">$260</span>{' '}
                <del className="text-black opacity-50 md:text-[16px] text-[10px]">$360</del>
                </p> 
                <div className=' flex flex-row'>
                    <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
                    <p className='md:text-[16px] text-[10px]'>(65)</p>
                </div>
        </div>

      </div>
      {/* 2 */}
      <div className='   flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
              <div className="  flex flex-row justify-center items-center bg-gray-100 md:w-full w-1/2  md:h-44  h-20 ">
                     <img src={Best2} alt="Best 2" className="w-2/3 md:h-44 h-20 object-cover" />
                   <div className='flex flex-col justify-end mb-auto'>
                  <FavoriteIcon/>
                      <RemoveIcon/>
                  </div>
              </div>
        <div className=" md:w-full w-1/2 h-20 m-2 felx flex-col justify-center ">
                <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Gucci duffle bag  </p>
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>
                        <span className="text-red-500 md:text-[16px] text-[10px]">$960</span>{' '}
                <del className="text-black opacity-50 md:text-[16px] text-[10px]">$1160</del>
                </p> 
                <div className='flex flex-row'>
                <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]'src={FourHalfStar} alt='Fivestar 5'/>
                <p className='md:text-[16px] text-[10px]'>(65)</p>
                </div>
        </div>

      </div>
      {/* 3 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
              <div className="  flex flex-row justify-center items-center bg-gray-100 md:w-full w-1/2  md:h-44  h-20 ">
                <img src={Best3} alt="Best 3" className="w-2/3 md:h-44 h-20 object-cover" />
                <div className='flex flex-col justify-end mb-auto'>
                    <FavoriteIcon/>
                       <RemoveIcon/>
        </div>
              </div>
              <div className=" md:w-full w-1/2 h-20 m-2 flex flex-col  justify-center ">
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>PGB liquid CPU Coolr </p>
                        <p className='md:ml-14 ml-4'>
                            <span className="text-red-500 md:text-[16px] text-[10px]">$160</span>{' '}
                    <del className="text-black opacity-50 md:text-[16px] text-[10px]">$170</del>
                    </p> 
                    <div className='flex flex-row'>
                    <img className='md:ml-14  ml-4 md:text-[16px] text-[10px]' src={FourHalfStar} alt='Fivestar 5'/>
                    <p className='md:text-[16px] text-[10px]'>(65)</p>
                    </div>
              </div>
      </div>
      {/* 4 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
              <div className="  flex flex-row justify-center items-center bg-gray-100 md:w-full w-1/2  md:h-44  h-20 ">
                <img src={Best4} alt="Best 4" className="w-2/3 md:h-44 h-20 object-cover" />
                     <div className='flex flex-col justify-end mb-auto'>
                  <FavoriteIcon/>
                 <RemoveIcon/>
                </div>
              </div>
          <div className="md:w-full w-1/2 h-20 m-2 flex flex-col justify-center ">
                    <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>Small Bookself</p>
                        <p className='md:ml-14 ml-4'>
                            <span className="text-red-500 md:text-[16px] text-[10px]">$360</span>
                    </p> 
                    <div className='flex flex-row'>
                    <img className='md:ml-14 ml-4 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>
                    <p className='md:text-[16px] text-[10px]'>(65)</p>
                    </div>
        </div>

       </div>
     </div>
   </div>
 );
};
export default BestSelling;






// {/* Second row with images */}
// <div className="   flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto md:justify-center  md:space-x-4  space-y-4 justify-start">
// <div className='flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-20 justify-center items-center  '>
      
//       {/* 1 */}
//       <div
//         className={`md:w-full w-1/2 bg-gray-100 md:h-44  h-20 m-2 flex flex-row justify-center items-center' ${
//           activeContainer === 1 && 'hover:bg-gray-100'
//         }`}
//         onMouseEnter={() => setActiveContainer(1)}
//         onMouseLeave={() => setActiveContainer(null)}
//       > <div className='flex flex-col w-full md:h-44 h-20  justify-center items-center'>
//         <img src={image2} alt="Image 2" className="w-2/3 md:h-44 h-20 object-cover" />
//         {activeContainer === 1 && (
//           <button className='w-full h-4 md:h-6 md:text-[16px] text-[10px] bg-black  text-white font-bold '>Add to Cart</button>
//         )}
//         </div>
//         <div className='flex flex-col justify-end mb-auto'>
//         <FavoriteIcon/>
//         <RemoveIcon/>
//         </div>


//       </div>
      
//       <div className="md:w-full w-1/2 h-20  md:mt-6  bg-white">
//       <p className='ml-14 md:text-[16px] text-[10px]'>HAVIT HV-G92 Gamepad </p>
//       <p className='ml-14'>
//           <span className="text-red-500 md:text-[16px] text-[10px]">$120</span>{' '}
//   <del className="text-black opacity-50 md:text-[16px] text-[10px]">$160</del>
//   </p> 
//   <img className='ml-14 md:text-[16px] text-[10px]' src={Fivestar} alt='Fivestar 5'/>

//   </div>
// </div>