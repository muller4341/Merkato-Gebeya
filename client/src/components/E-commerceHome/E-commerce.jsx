
import BrowseCatalog from "./Browsecatalog"
import Enhance from "./Enhance"
import Explore from "./Explore"
import Footer from "./Footer"  
//import Navbar1 from "./Navbar1"
//import Navbar from "./Navbar"
import NewArrival from "./NewArrival"
import SideBlack from "./SidbarBlack/SidebarBlack"
import BestSelling from "./BestSelling"
import MiddleContainere from "./MiddleContainer"


//mport { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Ecommerce() {
  return (
    
      <div className="flex flex-col">
        <SideBlack />
        <MiddleContainere />
        <BrowseCatalog/>
        <BestSelling/>
        <Enhance/>
        <Explore/>
        <NewArrival/>
        <Footer />
      </div>
    
  );
}

export default Ecommerce;

  




