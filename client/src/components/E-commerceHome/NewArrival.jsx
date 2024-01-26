import Frame730 from '../../assets/Frame730.png'
import Frame731 from '../../assets/Frame731.png'
import Frame732 from '../../assets/Frame732.png'
import Frame733 from '../../assets/Frame733.png'
const NewArrival= () => {
  return (
    <div className=" md:mt-40  w-screen md:h-[700px] h-auto flex flex-col justify-center items-center  ">
      {/* First row of small containers */}
      <div className="flex w-screen h-[100px]   flex-col   ">
      <div className=' h-[40px] w-[140px] ml-2'>
      <img src={Frame730} alt="Frame 625" className="object-cover md:h-[40px] md:w-[140px] h-[32px] w-[83px]" />
      </div>
      
      <p className='text-black  mt-4 ml-4 md:text-[16px] text-[12px] font-bold'>New Arrival</p>
      </div>
      {/* Second row with images */}
      <div className="flex  md:flex-row flex-col w-screen md:h-[450px]   mt-4 justify-center h-auto">
        <div className="   md:w-1/4 w-full md:h-[400px] h-36 m-2 flex justify-center">
          <img src={Frame731} alt="Explore 1" className=" md:h-[400px] h-36 md:w-full w-1/2 object-cover" />
        </div>
        <div className="  md:w-1/4 w-full  md:h-[400px] h-36 m-2 flex justify-center">
          <img src={Frame732} alt="Explore 2" className=" md:h-[400px] h-36 md:w-full w-1/2 object-cover" />
        </div>
      </div>
      {/* third row with images */}
      <div className="flex  w-screen md:h-[200px] h-auto mt-5 justify-center ">
        <div className="  md:w-2/7  ml-8 md:h-20 h-8 m-2 flex justify-center">
          <img src={Frame733} alt="Explore 5" className="w-full h-full object-cover" />
        </div> 
        </div>   
    
      </div>
  );
};
export default NewArrival;