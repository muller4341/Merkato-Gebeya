
import Sidebar from './Sidebar';
import BlackContainer from './BlackContainer';

function SideBlack() {
  return (
    <div className="flex flex-col md:flex-row  ">
      <Sidebar />
      <BlackContainer className="md:p-10"/>
        
    </div>
  );
}

export default SideBlack;
