
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
 import wishlist5 from '../../assets/Best2.png'
 import wishlist6  from  '../../assets/Best3.png'
 import wishlist7 from '../../assets/Explore7.png'
 import wishlist8 from '../../assets/Explore8.png'
 import DeleteIcon from '@mui/icons-material/Delete';
 
 
const WishlistForm = () => {
  return (
    <div className="w-screen md:h-[400px] h-auto flex flex-col  items-center  mb-10">
      {/* First row of small containers */}
      <div className="flex w-screen h-[100px] flex-row   ">
        <div className=" flex  flex-col justify-center w-1/2 h-20 md:m-2">
        <p className='mt-1  font-bold md:text-[24px] text-[16px]'>Wishlist(4) </p>
        </div>
        <div className=" w-1/2 h-20 md:m-2 flex md:flex-row md:justify-end flex-col justify-center  md:right-10    ">
            <button className='border border-gray-300 md:h-16 h-8 w-32 md:w-40 md:mr-10 rounded-md hover:bg-gray-100 md:text-[14px] text-[10px]'> Move All To Bag </button>
             </div>
      </div>

      {/* Second row with images */}
      <div className="  flex  mt-2 flex-col md:flex-row w-screen md:h-[350px] h-auto md:justify-center  md:space-x-4  space-y-4 justify-start">
      <div className=' flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center  '>
      {/* 1 */}
              <div className=" md:w-full w-1/2 md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
                <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100' >
                <img src={wishlist5} alt=" wishlist 1" className="w-full md:h-36 h-20 object-cover " />
                <DeleteIcon/>
                </div>
                  <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold '>
                    <ShoppingCart style={{fontSize: '16px'}} /> Add to Cart</button>
                
              </div>
            <div className=" md:w-full w-1/2 h-20  md:mt-6   flex flex-col justify-center">
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Gucci duffle dog </p>
                  <p className='ml-14 md:text-[16px] text-[12px]'>
                      <span className="text-red-500">$960</span>{' '}
              <del className="text-black opacity-50">$1160</del>
              </p>
              </div>
      </div>
      {/* 2 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center  '>
            <div className=" md:w-full w-1/2  md:h-44  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
             <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100'>
              <img src={wishlist6} alt="Image 3" className="w-full md:h-36 h-20 object-cover" />
              <DeleteIcon />
              </div>
                <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px] bg-gray-900 hover:bg-black text-white font-bold '>
                  <ShoppingCart  style={{fontSize: '16px'}}/> Add to Cart</button>
              
            </div>
            <div className=" md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
              <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Rgb liquid CPU cooler </p>
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                      <span className="text-red-500">$1960</span>
              </p> 
              </div>
      </div>
      {/* 3 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-4 md:h-72 h-24 justify-center items-center   '>
            <div className="md:w-full w-1/2 md:h-48  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
            <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100'>
              <img src={wishlist7} alt="Image 4" className="w-full md:h-36 h-20 object-cover" />
              <DeleteIcon/>
              </div>
                <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px] bg-gray-900 hover:bg-black text-white font-bold '>
                  <ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
              
            </div>
            <div className=" md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
              <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Gp11 shooter Gamepad </p>
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                  <span className="text-red-500">$5504</span>
              </p> 
              </div>
      </div>
      {/* 4 */}
      <div className='  flex md:flex-col flex-row md:w-1/5 w-full mt-40 md:h-72 h-24 justify-center items-center  '>
            <div className=" md:w-full w-1/2  md:h-48  h-24 md:m-2 m-0 flex flex-col justify-center items-center">
              <div className='flex flex-row w-2/3 md:h-44  h-24 bg-gray-100'>
              <img src={wishlist8} alt="Image 5" className="w-full md:h-36 h-20 object-cover" />
             <DeleteIcon/>
             </div>
                <button className='w-2/3 h-4 md:h-6 md:text-[16px] text-[10px]  bg-gray-900 hover:bg-black text-white font-bold '>
                  <ShoppingCart style={{fontSize: '16px'}}/>Add to Cart</button>
              </div>
              <div className="md:w-full w-1/2 h-20  md:mt-6    flex flex-col justify-center">
              <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>Quilted stair Jacket </p>
                  <p className='md:ml-14 ml-4 md:text-[16px] text-[12px]'>
                      <span className="text-red-500">$750</span>
              </p> 
            </div>
        </div>


      </div>
  
      
  
      </div>
      
      
     


    
  );
};
export default WishlistForm;




