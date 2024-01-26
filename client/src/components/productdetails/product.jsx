//write acode wich has three containers
import { useState } from 'react'
import more1 from '../../assets/more1.png'
import more2 from '../../assets/more2.png' 
import more3 from '../../assets/more3.png' 
import more4 from '../../assets/more4.png'
import more5 from '../../assets/more5.png'
import more6 from '../../assets/more6.png'
import FourHalfStar from '../../assets/FourHalfStar.png'
import RadioIcon from '@mui/icons-material/RadioButtonUnchecked';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import Delivery  from '@mui/icons-material/LocalShipping';
import AutoIcon from '@mui/icons-material/Autorenew';
import product1 from '../../assets/image2.png'
import product2 from '../../assets/image3.png'
import product3 from '../../assets/image4.png'
import product4 from '../../assets/Best3.png'
 import Fivestar from '../../assets/Fivestar.png'
 import FourStar from '../../assets/FourStar.png' 
const Product = () => {
  const [activeContainer, setActiveContainer] = useState(null);
    const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1 >= 0 ? value - 1 : 0);
  };
    return (
      <div className=' flex flex-col'>
        <div className='flex flex-col  md:flex-row justify-center items-center space-x-4 mr-10 ml-10 mt-20 mb-20'>
             {/* left side */}
        <div className="w-1/5 flex justify-center items-center flex-col h-full space-y-4">
            <div ><img src={more1} alt='more 1' /></div>
            <div><img src={more2} alt='more 2' /></div>
            <div><img src={more3} alt='more 3' /></div>
            <div><img src={more4} alt='more 4' /></div>
        </div>
        {/* middle */}
        
  <div className="w-2/5 justify-center items-center flex  ">
           <img src={more5} alt='more 5'/>
  </div>
  {/* right */}
  <div className=' w-2/5 flex justify-center items-center :'>
  <div className=" flex  flex-col justify-start items-start mt-0">
    <p className=' font-bold'> Havic G-92 Gamepad</p>
    <div className='flex flex-row'>
         <img src={FourHalfStar} alt='FourHalfStar'/>
        <p>
            <span>(150 Reviwes) |</span> <span className='text-green-500'>  in store </span></p>
    </div>
    <p className=' flex flex-col border-b border-gray-600 mb-10 mt-4'>
        <span className=' font-bold'> &192.00</span>
        <span className='mb-10'> platsation 5 controller skin high quality vinyl  with air<br/>
        channel adhesive for easy bubble free install & mess<br/>
         free removal pressure sensitive </span>
    </p>
    <div className=' flex flex-row space-x-4 '>
    
           <p className="font-bold"> colors: </p>
           <div className=' space-x-2'>
        
               <div style={{ background: 'gray', borderRadius: '50%', display: 'inline-block' }}>
                   <RadioIcon style={{ color: 'black' }} />
               </div>

               <div style={{ background: 'red', borderRadius: '50%', display: 'inline-block' }}>
                    <RadioIcon style={{ color: 'red' }} />
               </div>
           </div>
    </div>

         <div className='flex flex-row justify-center space-x-2 mt-4 mb-2'>
         <p className="font-bold"> size: </p>
               <div className='space-x-2 flex flex-row '>
                       <div  className='rounded-md w-10 h-10 flex justify-center hover:bg-red-600 border border-gray-200 '>
                            <p>xS</p>
                       </div>
                       <div  className='rounded-md w-10 h-10 flex justify-center hover:bg-red-600 border border-gray-200 '>
                            <p>S</p>
                       </div>
                       <div  className=' rounded-md w-10 h-10  flex justify-center hover:bg-red-600 border border-gray-200 '>
                            <p>M</p>
                       </div>
                       <div  className=' rounded-md w-10 h-10 flex justify-center hover:bg-red-600 border border-gray-200 '>
                            <p>L</p>
                       </div>
                       <div  className=' rounded-md w-10 h-10  flex justify-center hover:bg-red-600 border border-gray-200 '>
                            <p>xL</p>
                       </div>
                       

               </div>       
        </div>
     <div  className='flex flex-row justify-center items-center space-x-4  mt-5'>
        <div className='flex flex-row'>
                <IconButton onClick={handleDecrement}aria-label="decrement"
                style={{ border: '1px solid gray', borderRadius: '4px', 
                ':hover': {
                  backgroundColor: 'green', // Change the background color on hover
                }, }}
                
                >
                    <RemoveIcon />
                </IconButton>
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    variant="outlined"
                    className='w-16'
                />
                <IconButton onClick={handleIncrement} 
                aria-label="increment"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
                className='hover:bg-green-400'
                >
                    <AddIcon  />
                </IconButton>
       </div>
       <button className='border border-gray-400  w-36 h-10 hover:bg-red-600'>Buy NOw</button>
       <FavoriteIcon  style={{ color:'red',  border: '2px light gray', borderRadius: '2%'}}/>
    </div>
    <div className='border border-gray-200 mb-5 mt-5'>
    <div className=' flex felx-row justify-items-center items-center space-x-6 border border-gray-200'>
                  <Delivery/>
                  <p className='flex flex-col space-y-2'>
                      <span className='font-bold'> Free delivery</span>
                      <span> Enter your postalcodes for your delivery Availablity</span>
                  </p>

    </div>
    <div className=' flex felx-row justify-items-center items-center space-x-6 border border-gray-200'>
                  <AutoIcon/>
                  <p className='flex flex-col space-y-2 '>
                      <span className='font-bold'>Return Delivery</span>
                      <span> free 30 days delivery return delivery</span>
                  </p>

    </div>
    </div>
    </div>
    
  </div>
</div>

{/* Buttom container  */}
<div className="w-screen h-[600px] flex md:flex-col flex-row  items-center border-b border-gray-400 mb-4">
      {/* First row of small containers */}
           <div className="flex w-screen h-[100px] bg-white  ">
                <div className="w-1/5 h-20 m-2">
                <img src={more6} alt="Frame625" className=" m" />
                </div>
        
            </div>

      {/* Second row with images */}
      <div className="  flex   md:flex-row flex-col w-screen h-[300px] bg-white justify-center items-center">
      <div
        className={`w-1/5 h-60 m-2 flex flex-col justify-center items-center ${
          activeContainer === 1 && 'hover:bg-gray-200'
        }`}
        onMouseEnter={() => setActiveContainer(1)}
        onMouseLeave={() => setActiveContainer(null)}
      >
        <img src={product1} alt="Image 2" className="w-90% h-90% object-cover" />
        {activeContainer === 1 && (
          <button className='w-full bg-black text-white font-bold h-16'>Add to Cart</button>
        )}
      </div>
      <div
        className={`w-1/5 h-60 m-2 flex flex-col justify-center items-center ${
          activeContainer === 2 && 'hover:bg-gray-200'
        }`}
        onMouseEnter={() => setActiveContainer(2)}
        onMouseLeave={() => setActiveContainer(null)}
      >
        <img src={product2} alt="Image 3" className="w-80% h-full object-cover" />
        {activeContainer === 2 && (
          <button className='w-full bg-black text-white font-bold h-16'>Add to Cart</button>
        )}
      </div>
      <div
        className={`w-1/5 h-60 m-2 flex flex-col justify-center items-center ${
          activeContainer === 3 && 'hover:bg-gray-200'
        }`}
        onMouseEnter={() => setActiveContainer(3)}
        onMouseLeave={() => setActiveContainer(null)}
      >
        <img src={product3} alt="Image 4" className="w-full h-full object-cover" />
        {activeContainer === 3 && (
          <button className='w-full bg-black text-white font-bold h-16'>Add to Cart</button>
        )}
      </div>
      <div
        className={`w-1/5 h-60 m-2 flex flex-col justify-center items-center ${
          activeContainer === 4 && 'hover:bg-gray-200'
        }`}
        onMouseEnter={() => setActiveContainer(4)}
        onMouseLeave={() => setActiveContainer(null)}
      >
        <img src={product4} alt="Image 5" className="w-full h-full object-cover" />
        {activeContainer === 4 && (
          <button className='w-full bg-black text-white font-bold h-16'>Add to Cart</button>
        )}
      </div>
      
    </div>
      {/*third container*/}
      <div className="flex w-screen h-[100px] md:flex-row  flex-col  justify-center">
        <div className=" w-1/5 h-20 m-2 bg-white">
            <p className='ml-14'>HAVIT HV-G92 Gamepad </p>
            <p className='ml-14'>
                <span className="text-red-500">$120</span>{' '}
        <del className="text-black opacity-50">$160</del>
        </p> 
        <img className='ml-14' src={Fivestar} alt='Fivestar 5'/>

        </div>
        <div className=" w-1/5 h-20 m-2">
        <p className='ml-14'>AK-900 wired keyboard </p>
            <p className='ml-14'>
                <span className="text-red-500">$960</span>{' '}
        <del className="text-black opacity-50">$1160</del>
        </p> 
        <img className='ml-14'src={FourStar} alt='Fivestar 5'/>
        </div>
        <div className=" w-1/5 h-20 m-2  bg-white">
        <p className='ml-14'>IPS LCD Gaming Moniter </p>
            <p className='ml-14'>
                <span className="text-red-500">$370</span>{' '}
        <del className="text-black opacity-50">$400</del>
        </p> 
        <img className='ml-14' src={Fivestar} alt='Fivestar 5'/>
        </div>
        <div className="w-1/5 h-20 m-2">
        <p className='ml-14'>RGB liquid CPU Cooler  </p>
            <p className='ml-14'>
                <span className="text-red-500">$375</span>{' '}
        <del className="text-black opacity-50">$400</del>
        </p> 
        <img className='ml-14' src={FourHalfStar} alt='Fivestar 5'/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;




