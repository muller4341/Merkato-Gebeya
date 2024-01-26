import{ useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckForm= () => {
    const checkboxstyle={
        color: 'rgba(255, 0, 0, 0.857)',
        border: ' #808080'

    }
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartmentFloor: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=' flex flex-col md:flex-row h-auto'>
      <div className='md:w-1/2 w-full  flex justify-center'>
    <div className="flex w-full p-8 justify-center">
      <div className=" w-full md:w-1/2 h-2/3 pr-4">
        <p  className='font-bold   md:text-[24px] text-[16px]'>Billing Details </p>
        <div className="mb-2 mt-4">
          <label className="block mb-1 font-semibold md:text-[18px] text-[14px]">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold md:text-[18px] text-[14px] ">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold md:text-[18px] text-[14px] ">Street Address:</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold md:text-[18px] text-[14px]">Apartment/Floor:</label>
          <input
            type="text"
            name="apartmentFloor"
            value={formData.apartmentFloor}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold   md:text-[18px] text-[14px]">Town/City:</label>
          <input
            type="text"
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold  md:text-[18px] text-[14px]">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-semibold   md:text-[18px] text-[14px]">Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full md:p-2 p-1 border bg-gray-100"
          />
        </div>
        <div className=' flex  flex-row mt-4 justify-center items-center'>
        < Checkbox style={checkboxstyle}/>
        <p className='md:text-[18px] text-[14px]'>Solve this information  for faster check-out next time </p>
        </div>
      </div>
      
    </div>
    </div>
                          <div className='md:w-1/2 w-full bg-yellow-800 h-[1000px]'>

                          </div>

       </div>

  );
};

export default CheckForm;
