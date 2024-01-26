import SideImage from '../../assets/SideImage.png'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
const handleLogin = () => {
    // Logic for creating an account goes here

    // Redirect to the login page after account creation
    navigate('/accountdropdown');
  };
  return (
    <div className="flex mt-10 mb-10 md:flex-row flex-col justify-center items-center h-auto">
      <div className="">
        <img src={SideImage} alt="SideImage" className="w-full h-auto" />
      </div>
      <div className=" md:p-24 p-16  ">
        <h2 className="md:text-[24px] text-[16px] font-bold justify-center">Login to Merkato-Gebeya</h2>
        <p className='justify-center md:mt-4 mt-1 md:text-[16px] text-[12px]'>Enter your details below</p>
        <form className="md:mt-4 mt-2 ">
          
            <input type="text" placeholder="Email or phone number" className="w-full md:mt-6 mt-2 md:p-2 p-1 border-b border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="w-full  border-b md:mt-6 mt-2 md:p-2 p-1 border-gray-300 rounded" />
            <div className='flex flex-row justify-center items-center  mt-8 '>
         <button type="submit"  onClick={handleLogin} className="bg-red-400 text-white  md:text-[16px] text-[12px]   rounded md:h-12 h-8 flex-1 w-full">log in</button>
         <a href="/login" className="text-red-500  md:text-[16px] text-[10px] flex-1 justify-start ml-6 ">Forget password?</a>
         </div>
        </form>

        
        
      </div>
    </div>
  );
};

export default LoginForm;
