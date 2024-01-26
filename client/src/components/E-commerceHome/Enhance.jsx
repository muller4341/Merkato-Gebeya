import Frame690 from '../../assets/Frame690.png'
import Frame600 from '../../assets/Frame 600.png'
const Enhance = () => {
    return (
      <div className="bg-black p-5 w-screen md:mt-12 md:ml-10 md:mr-6  md:h-80 h-40 md:mb-14 flex items-center justify-between relative">
        {/* Left Section */}
        <div className="flex md:space-y-4 space-y-2 flex-col justify-start w-1/2 md:h-70 h-30">
            <p className='text-green-700 md:text-[24px] text-[12px]'>catagories</p>
            <p className=' text-white  font-bold  md:text-[40px] text-[16px]'> Enhance Your <br/> Music Experience </p>
          <div className="  flex md:flex-row flex-col ">
           <img src={Frame600} alt="Frame 600" className= " md:text-[16px] text-[8px] "/>
          </div>
          <button className='bg-green-700 text-white border rounded-md p-2 mt-1 md:w-40 w-24 md:text-[16px] text-[8px] hover:bg-green-900 '>Buy Now</button>
        </div>
  
        
        
  
        {/* Right Section */}
        <div className='flex justify-center w-1/2 md:h-70 h-30  '>
        <img src={Frame690} alt="Frame 690" className="md:w-1/2  w-2/3 md:h-auto h-20" />
        </div>
      </div>
    );
  }
  
  export default Enhance;