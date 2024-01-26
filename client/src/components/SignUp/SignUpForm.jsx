import SideImage from '../../assets/SideImage.png';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';

  
const SignUpForm = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Logic for creating an account goes here

    // Redirect to the login page after account creation
    navigate('/login');
  };

  return (
    <div className="flex  md:flex-row flex-col justify-center items-center h-auto">
      <div className=" ">
        <img src={SideImage} alt="SideImage" className="w-full h-auto" />
      </div>
      <div className="  md:p-24 p-8  ">
        <h2 className="md:text-[20px]  text-[16px] font-bold justify-center">Create an Account</h2>
        <p className='justify-center md:mt-4 mt-2 md:text-[16px]  text-[12px]'>Enter your details below</p>
        <form className="md:mt-4 mt-1">
          
            <input type="text" placeholder="Name" className="w-full md:mt-6 mt-2 md:p-2 p-1 border-b border-gray-300 rounded" />
            <input type="text" placeholder="Email or phone number" className="w-full md:mt-6 mt-2 md:p-2 p-1 border-b border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="w-full  border-b md:mt-6 mt-2 md:p-2 p-1 border-gray-300 rounded" />
             <button type="submit" onClick={handleCreateAccount} className="bg-red-400 hover:bg-red-500 text-white  rounded-md  md:mt-6 mt-2 md:p-2 p-1 w-full  md:text-[20px]  text-[14px]">Create Account</button>
        </form>
        
        <button className=" w-full mt-8 flex items-center hover:bg-gray-100 bg-white border border-gray-300 rounded p-2 cursor-pointer justify-center">
          <img src={google} alt="Google" className="w-8 h-8 mr-2" />
          <span className="text-blue-500 md:text-[16px]  text-[12px]">Sign Up with Google</span>
        </button>
        <p className="mt-6 ml-20 md:text-[16px]  text-[12px]">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;
