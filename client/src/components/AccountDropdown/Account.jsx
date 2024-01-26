import BestSelling from "../E-commerceHome/BestSelling"
import BrowseCatalog from "../E-commerceHome/Browsecatalog"
import Enhance from "../E-commerceHome/Enhance"
import Explore from "../E-commerceHome/Explore"
import Footer from "../E-commerceHome/Footer"
import NewArrival from "../E-commerceHome/NewArrival"
import SideBlack from "../E-commerceHome/SidbarBlack/SidebarBlack"
import MiddleContainer from "../E-commerceHome/MiddleContainer"
function Account() {
  

    return (
      <div className="flex  flex-col">
        
        <SideBlack />
        <MiddleContainer/>
        <BrowseCatalog/>
        <BestSelling/>
        <Enhance/>
        <Explore/>
        <NewArrival/>
        <Footer/>
        </div>
    )
  }
  
  export default Account
  