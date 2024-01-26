import PhoneIcon from '@mui/icons-material/LocalPhone';
import OutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react';
import Footer from '../E-commerceHome/Footer';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
       phone: '',
        message: '',
        
      });
    
      const handleChange = (e) => {
    
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
  
  return (
    <div>
    <div className=' flex  mr-20 ml-20 mb-10 '>
    <div className="flex md:flex-row mt-20  justify-center flex-col   md:space-x-8 ">
        
      {/* Left Side */}
      <div className=" w-full md:w-1/3  p-4 flex flex-col border border-gray-400  ">
        <div className='border-b border-gray-400  mt-10 mb-10'>
      <div className=' flex flex-row space-x-3'>
        <PhoneIcon style={{backgroundColor:  '#c83d3d', borderRadius: '100%', color:'white' }} />
        <p className='font-semibold'> call to us </p>
      </div>
            <p className='mt-6 mb-10'> we are availabe 24/7, 7 days of a week
                <br/>Phone +251945467820 </p>
                </div>
        <div className='mt-12 mb-20'>
      <div className=' flex flex-row space-x-3'>
        <OutlineIcon style={{backgroundColor:  '#c83d3d', borderRadius: '100%', color:'white' }} />
        <p className='font-semibold'> Write to us </p>
      </div>
            <p className='flex flex-col space-y-6 mt-6'> <span> Fill out our form and we will conatct<br/>
            you within 24 hours</span>
            <span>Email customer merkato-gebeya@gmail.com</span>
            <span>Email support merkato-gebeya@gmail.com</span>

            </p>

                </div>
        
      </div> 

      {/* Right Side */}
      <div className=" mt-4 md:mt-0 w- full md:w-2/3 p-4  border border-gray-400 ">
      <div className="flex flex-row  justify-center items-center mt-10  space-x-14">
         <div className="mb-2  justify-center items-center ">
             
               <input
               type="text"
            placeholder='your name'
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>

        <div className="mb-2 ">
          
          <input
            type="text"
            name="email"
            placeholder='your email'
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>
        <div className="mb-2 ">
          
          <input
            type="text"
            name="phone"
            placeholder='your phone'
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>
        </div>
        <div className="mb-2 p-2 mt-24 justify-start items-start ">
        
          <textarea
            type="text"
            name="message"
            placeholder='your message'
            value={formData.message}
            onChange={handleChange}
            className="w-full h-60 p-2  border bg-gray-50"
          />
        </div>
        <div className=' flex justify-end items-end'>
        <button className= 'bg-red-500 border w-44 h-16 hover:bg-red-600 rounded-md text-white justify-end items end '>
           Send message </button>
        </div>
      </div>
    </div>
    
    
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
