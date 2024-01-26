import { useNavigate } from "react-router-dom";
const A404error =()=>
{
    const navigate = useNavigate(); 
  const handleHomeClick = () => {
    // Navigate to the wishlist page
    navigate('/home');
  }
return(
<div className=' flex  flex-col justify-center items-center space-y-40 '>
    <p className='mt-40 flex flex-col space-y-10'>
    <span className="font-bold text-[64px] text-black"> 404 Not Found</span>
    <span className="text-black font-semibold">Your visited page found. You may go home page </span>
    </p>
    
        <button    onClick={handleHomeClick} className = 'bg-red-500 border w-44 h-16 hover:bg-red-600 rounded-md text-white justify-end items end '>
           Back to home page </button>
        
        </div>
        
)
    };
    
    
    export default A404error;