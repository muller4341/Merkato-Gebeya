

 import Catagory5 from '../../assets/Category5.png'
import Catagory6 from '../../assets/Category6.png'
 import Catagory3 from '../../assets/Category3.png'
 import Catagory2 from '../../assets/Category2.png'
import Catagory1 from '../../assets/Category1.png'
import Catagory4 from '../../assets/Category4.png'
import Frame623 from '../../assets/Frame623.png'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
 
const BrowseCatalog= () => {
  return (

    <div className="w-screen md:h-[450px] h-auto flex flex-col  items-center border-b border-gray-400 ">
  {/* First row of small containers  */}
      <div className="flex w-screen h-[100px] flex-col">
        <div className=' h-[40px] w-[140px] ml-2'>
      <img src={Frame623} alt="Frame 625" className="object-cover h-full w-full" />
      </div>
      <p className='text-black  md:text-[16px] text-[12px] mt-4 ml-4  font-bold'>Browse By Catagory</p>
      <div  className=' hidden md:flex md:flex-row  justify-end mr-20'>
      <WestIcon />
      <EastIcon/>
      </div>

      </div>

      {/* Second row with images */}
      <div className="  flex  md:flex-row flex-wrap w-screen  bg-white md:justify-start justify-center space-x-2">
      <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
          <img src={Catagory1} alt='Catagory 1 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black '> Phones </p>
        </div>
        <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
        <img src={Catagory2} alt='Catagory 2 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black '> Computers </p>
        </div>
        <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
        <img src={Catagory3} alt='Catagory 3 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black '> Smartwatch </p>
        </div>
        <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
        <img src={Catagory4} alt='Catagory 4 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black '> Camera </p>
        </div>
        <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
        <img src={Catagory5} alt='Catagory 5 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black '> HeadPhones </p>
        </div>
        <div className=" flex flex-col justify-center items-center md:w-1/12 md:h-60 w-1/4 h-30 m-1 bg-white  border  border-solied  hover:bg-red-700  border-gray-500">
        <img src={Catagory6} alt='Catagory 6 'className='md:w-1/2 md:h-30 h-20' />
          <p className='justify-center md:text-[24px] text-[10px] font-bold text-black'> Gaming </p>
        </div>
      </div>
    </div>
  );
};
export default BrowseCatalog;
