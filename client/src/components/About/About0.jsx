import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoneyBag from '../../assets/MoneyBag.jpg'
import About1 from '../../assets/About1.png'
import About2 from '../../assets/About2.png'
import About3 from '../../assets/About3.png'
import About4 from '../../assets/About4.png'
import RadioIcon from '@mui/icons-material/RadioButtonUnchecked';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import OutlineIcon from '@mui/icons-material/CheckCircleOutline';
const About0 = () => {
  
  return (
    <div className=' flex flex-col mr-20 ml-20  mb-10'>
    <div className="flex md:flex-row mt-20 justify-center  flex-col ">
        
      {/* Left Side */}
      <div className="md:w-1/2 w-full  p-4 flex flex-col ">
        <p className='font-bold text-black text-3xl'> Our Story</p>
        <p className=' text-black space-y-1  mt-4 font-serif'> Lounched in 2015, Merkato- Gebeya is Ethiopian's premier online<br/>
        shopping marketplace with an active presence in Ethiopa,<br/>
        supported by wide range of tailerd marketing , data and service<br/>
        solutions, Merkato-Gbeya has 10,500 sellers and 300 brands and<br/>
        serves 3 millions customers across the region.<br/>
        <p className='mt-4'>
        Exclusive has more than i moillion products to offer, growing at a<br/>
        very fast. Merkato-gebeya offrs a diverse assatment in <br/>
        catagories ranging from consumer</p>
        </p>
      </div> 

      {/* Right Side */}
      <div className="md:w-1/2 w-full p-4  borderh-100">
        <img src={About1} alt='About 1' className='h-full w-full'/>
      </div>
    </div>
    {/* middle conatainer */}
    <div className='flex md:flex-row flex-wrap mt-10 mb-10 md:h-44 h-24 space-x-8 justify-center  space-y-4'>
        <div className='md:w-1/5 h-full  w-1/3 border hover:bg-red-600 border-gray-200 flex flex-col justify-center items-center'>
            <StorefrontIcon style={{ height: '50%', width: '50%' }}/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>10.5k
            </span>
            <span className='font-semibold'>seller in our site
            </span></p>
            
            
        </div>
        <div className='md:w-1/5 h-full w-1/3 border hover:bg-red-600 border-gray-200 flex flex-col justify-center items-center'>
            <MonetizationOnIcon style={{ height: '50%', width: '50%' }}/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>33k
            </span>
            <span className='font-semibold'>monthly product sale
            </span></p>
            
        </div>

        <div className='md:w-1/5 h-full w-1/3 border hover:bg-red-600 border-gray-200 flex flex-col justify-center items-center'>
            <ShoppingBagIcon style={{ height: '50%', width: '50%' }}/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>45.5k
            </span>
            <span className='font-semibold'>customer active in our site
            </span></p>
            
        </div>
        <div className='md:w-1/5 h-full w-1/3 border hover:bg-red-600 border-gray-200 flex flex-col justify-center items-center'>
            <img src={MoneyBag} alt='MoneyBag' className='h-50% w-50% bg-black '/>
            
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>25k 
            </span>
            <span className='font-semibold'>Anual grose sale in our site
            </span></p>
            
        </div>

    </div>
    {/* middle container 2 */}
    <div className='flex flex-row mt-20 mb-40 h-44 space-x-12'>
       < div className='w-1/4 flex flex-col'>
            <img src={About2} alt='About 2' className='w-50% h-50%'/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>Tom Cruise
            </span>
            <span className='font-semibold'>founder & chairman
            </span></p>
            <div className=' flex  flex-row'>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
            </div>
        </div>
        
        < div className='w-1/4  felx flex-col'>
            <img src={About3} alt='About 3 ' className='h-50% w-50%'/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>Emma Watson
            </span>
            <span className='font-semibold'>managing director
            </span></p>
            <div className=' flex  flex-row'>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
            </div>
        </div>
        
        < div className='w-1/4 flex flex-col'>
            <img src={About4} alt='About 2' className='h-50% w-50%'/>
            <p className='flex flex-col' > 
            <span className='font-bold text-2xl'>Will Smith
            </span>
            <span className='font-semibold'>Product manager
            </span></p>
            <div className=' flex  flex-row'>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/> 
            
        </div>
        <div className=' justify-center  items-center flex felx-row mt-10'>
            <RadioIcon  style={{ }}/>
            <RadioIcon  style={{  }}/>
            <RadioIcon   style={{ backgroundColor: '#FF0000' }}/>
            <RadioIcon  style={{  }}/>
            <RadioIcon  style={{  }}/>
        </div>
         </div>
    </div>

 
    {/* botton container */}
    <div className='flex flex-row mt-80 mb-10 h-44 space-x-8 justify-center items-center'>
        < div className='w-1/4 justify-center items-center flex flex-col space-y-4'>
            <LocalShippingIcon style={{ height: '15%', width: '15%' , backgroundColor:  '#72777a', borderRadius: '80%' }}/>
            
            <p className='flex flex-col' > 
            <span className='font-bold text-1xl'>FREE AND FAST DELIVERY
            </span>
            <span className='font-semibold'>free delivery on all orders over $199
            </span></p>
            

        </div>
        < div className='w-1/4  justify-center items-center flex flex-col space-y-4'>
            <HeadphonesIcon style={{ height: '15%', width: '15%', backgroundColor:  '#72777a', borderRadius: '80%' }}/>
            <p className='flex flex-col' > 
            <span className='font-bold text-1xl'>24/7 CUSTOMER SERVICE
            </span>
            <span className='font-semibold'>friendly 24/7 customer service
            </span></p>
        </div>
        < div className='w-1/4  justify-center items-center flex flex-col space-y-4'>
            <OutlineIcon style={{ height: '15%', width: '15%',  backgroundColor:  '#72777a', borderRadius: '80%'  }}/>
            <p className='flex flex-col' > 
            <span className='font-bold text-1xl'>MONEY BACK GUARANTEE
            </span>
            <span className='font-semibold'>we return money within  a 30 days
            </span></p>
        </div>
    </div> 
    
    </div>
  );
};

export default About0;
