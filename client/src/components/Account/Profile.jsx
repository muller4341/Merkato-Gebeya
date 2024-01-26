import{ useState } from 'react';


const Profile= () => {
    

    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex mt-16 flex-col justify-center items-center">
        
      <div className=" w-full md:w-2/3 h-2/3 pr-4    justify-center items-center">
      <p  className='font-semibold   text-[24px] '>Edit your profile </p>
          <div className="flex flex-row  justify-center items-center  space-x-14">
         <div className="mb-2 mt-4  justify-center items-center ">
             <label className="block mb-1 ">First Name:</label>
               <input
               type="text"
            placeholder='First Name'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>

        <div className="mb-2 ">
          <label className="block mb-1 mt-4">last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>
        </div>
        <div className="flex flex-row   justify-center items-center space-x-14">

        <div className="mb-2">
          <label className="block mb-1 ">Email:</label>
          <input
            type="text"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 ">Address:</label>
          <input
            type="text"
            name="address"
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"
          />
        </div>
        </div>

        <div className="flex flex-row   justify-center items-center  ">
        <div className="mb-2 space-y-5 ">
          <label className="block mb-1  ">Password changes:</label>
          <input
            type="text"
            name="currentPassword"
            placeholder='Current Password'
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"/>
            <input
            type="text"
            name="newPassword"
            placeholder='New Password'
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"/>
            <input
            type="text"
            name="confirmNewPassword"
            placeholder='Confirm New Password'
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="w-full p-2 border bg-gray-50"/>
           </div>  
             </div>  
             <div className='flex flex-row mb-4 backdrop: justify-end items-end mt-8 space-x-4 w-30'>
        <button className='hover:bg-red-600 border  hover:text-white  bg-whihte  text-black  p-2 rounded-md'>Save changes</button>
        <button className='hover:bg-red-600 border hover:text-white  bg-white text-black p-2 rounded-md'>Cancel</button>
        </div>
        </div>
        
      </div>
      
    
  );
};

export default Profile;
