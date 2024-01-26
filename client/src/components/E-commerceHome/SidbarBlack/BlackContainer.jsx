import AppleIcon from '@mui/icons-material/Apple';
import image1 from '../../../assets/image1.png';
import Ellipse3 from '../../../assets/Ellipse3.png';
import RightIcon from '@mui/icons-material/ArrowRightAlt';

const BlackContainer = () => {
  return (
    <div className="bg-black md:p-6 p-0 md:w-screen md:mt-12 md:ml-10 md:mr-6 md:h-80 h-40 md:mb-14 flex items-center justify-between relative">
      {/* Left Section */}
      <div className=" md:h-80 h-40 w-1/3  flex items-center md:space-y-2  space-y-1 flex-col">
        <div className="md:h-40 space-x-2 h-20 p-3 w-full flex flex-row  justify-center items-center">
          <AppleIcon className='text-[40px] ' sx={{   color: 'white' }} /> 
          <p className=" text-white  md:text-[16px] text-[10px]  justify-center">
            iPhone 14 Series</p>
        </div>
        <div className="text-white md:h-40 h-20">
          <p className="text-[10px] md:text-[30px] font-bold">Up to 10% <br/> off voucher</p>
          <a href="#" className="text-[10px] md:text-[24px] md:mt-4 mt-2 text-white underline">
            Shop Now <RightIcon />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="h-10 md:flex mb-[-14rem] flex-row hidden">
      <img src={Ellipse3} alt="ellipse3" className="w-8 h-8 m-1  " />
      <img src={Ellipse3} alt="ellipse3" className="w-8 h-8 m-1" />
      <img src={Ellipse3} alt="ellipse3" className="w-8 h-8 m-1" />
      <img src={Ellipse3} alt="ellipse3" className="w-8 h-8 m-1" />  
      </div>

      {/* Right Section */}
      <img src={image1} alt="Image1" className=" md:w-1/3  sm:w-3/13 md:h-80 h-24" />
    </div>
  );
}

export default BlackContainer;
