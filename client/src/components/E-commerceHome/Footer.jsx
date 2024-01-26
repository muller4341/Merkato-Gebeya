import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Frame740 from '../../assets/Frame 718.png';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer= () => {
  return (
    <div className='flex mb-0  w-full mt-24 flex-col md:h-[350px] h-auto bg-black'>
    <div className=" w-screen mr-10 md:h-[300px] h-auto flex  justify-center  items-center  ">
      
      {/* Second row with images */}
      <div className="flex  w-screen md:h-[250px] h-auto mb-auto md:flex-row  flex-col">
        <div className=" md:w-1/5 w-full md:h-50 md:m-3 m-1 bg-black h-auto justify-center flex flex-col"> 
        <p className='  ml-12 font font-bold md:text-[24px] text-[16px] text-white '>Merkato Gebeya</p>
        <p className='  ml-12  md:text-[18px] text-[12px] text-white'>subscribe</p>
        <p className=' ml-12  md:mt-3 mt-1  md:text-[18px] text-[12px] text-white'>Get 10% of your first order</p>
        <div className="relative ">
            <Input 
              className="mt-3 ml-12 md:text-[18px] text-[12px] text-white w-46 h-8 pl-2 pr-2 bg-black border border-solid  border-white rounded"
              type="text"
              placeholder="Enter your email"
              inputProps={{ style: { color: 'white' } }}
              endAdornment={<SendIcon className="cursor-pointer justify-end bg-white" />}
            />
          </div>
        </div>
        <div className=" md:w-1/5 w-full md:h-50 md:m-3 m-1 bg-black  justify-center flex flex-col"> 
        <p className='  ml-12  font-bold md:text-[24px] text-[16px] text-white '>Support</p>
        <p className='  ml-12  md:text-[18px] text-[12px] text-white'>1000, Addis Ababa,</p>
        <p className=' ml-12   md:text-[18px] text-[12px] text-white'>6kilo Ethiopia</p>
        <p className=' ml-12  md:mt-4  mt-2 md:text-[18px] text-[12px] text-white'>Info@merkat-gebeya.com</p>
        <p className=' ml-12  md:mt-2 mt-1 md:text-[18px] text-[12px] text-white'>+2519857854565</p>
        </div>
        
        <div className=" md:w-1/5 w-full md:h-50 md:m-3 m-1 bg-black  justify-center flex flex-col"> 
      <p className='  ml-12  text-white  font-bold md:text-[24px] text-[16px]'>Account</p>
      <a href="/account" className='ml-12 text-white md:text-[18px] text-[12px] cursor-pointer hover:text-blue-500'>My Account</a>
      <a href="/login" className='ml-12 text-white  md:text-[18px] text-[12px] cursor-pointer hover:text-blue-500'>Login/Register</a>
      <a href="/cart" className='ml-12 text-white md:text-[18px] text-[12px] cursor-pointer hover:text-blue-500'>Cart</a>
      <a href="/wishlist" className='ml-12  text-white md:text-[18px] text-[12px] cursor-pointer hover:text-blue-500'>Wishlist</a>
      <a href="/shop" className='ml-12   text-white font-bold md:text-[18px] text-[12px] cursor-pointer hover:text-blue-500'>Shop</a>
        </div>
        
        <div className=" md:w-1/5 w-full md:h-50 md:m-3 m-1 bg-black  justify-center flex flex-col"> 
        <p className='  ml-12 text-white font font-bold md:text-[24px] text-[16px]'>Quick Link </p>
        <p className='  ml-12  mt-2  text-white  md:text-[18px] text-[12px]'>privacy police </p>
        <p className=' ml-12  mt-2 text-white  md:text-[18px] text-[12px]'>Terms of Use </p>
        <p className='  ml-12   text-white md:text-[18px] text-[12px]'>FAQ </p>
        <p className='  ml-12  text-white md:text-[18px] text-[12px]'>Contact</p>
        </div>
    
        <div className=" md:w-1/5 w-full md:h-50 md:m-3 m-1 bg-black  justify-center flex flex-col"> 
        <p className='  ml-12 font font-bold md:text-[24px] text-[16px] text-white '>Download App</p>
        <p className='  ml-12  md:text-[18px] text-[12px] text-white'>save $3 with App New User only</p>
        <div className='flex  flex-row ml-12'>
                <QrCode2Icon style={{ fontSize: '54px' }} />
                <div className=" w-1/ h-10   m-2">
            <img src={Frame740} alt="Image 6" className="w-full h-full object-cover" />
        </div>
                

        </div>
        <div className=' flex flex-row  ml-12'>
        
                <a href="https://www.facebook.com"><FacebookIcon style={{ color: 'white' }}/>  </a>
                <a href="https://www.twitter.com"><TwitterIcon  style={{ color: 'white' }}/></a>
                <a href="https://www.instagram.com"><InstagramIcon style={{ color: 'white' }} /></a>
                <a href="https://www.linkedin.com"><LinkedInIcon style={{ color: 'white' }} /></a>

        </div>
      
        </div>
      </div>
      
    </div>
    <div className='flex flex-row justify-center items-center '>
    <CopyrightIcon style={{ color:'gray' }}/>
    <p className='text-gray-500 md:text-[16px] text-[12px]'>Copyright Merkato-Gebeya 2024 All right reserved </p>
    </div>
    </div>
  );
};
export default Footer;