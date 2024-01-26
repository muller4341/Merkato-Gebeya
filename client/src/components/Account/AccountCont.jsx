 

import { useState } from 'react';
import AccountForm from './AccountForm';
import AddressBook from './AddressBook';
import Mypayment from './MyPaymentOption';
import Profile from './Profile';
import MyCancellation from './MyCancellation';
import MyReturns from './MyReturns';

const AccountCont = () => {
  const [selectedComponent, setSelectedComponent] = useState('Profile');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'AddressBook':
        return <AddressBook />;
      case 'Mypayment':
        return <Mypayment />;
        case 'MyCancellation':
        return <MyCancellation />;
        case 'MyReturns':
        return <MyReturns/>;
      case 'Profile':
      default:
        return <Profile />;
    }
  };

  return (
    <div className="bg-yellow-300 h-auto flex md:flex-row flex-col mt-20 justify-center mr-20 ml-20">
        {/* <div className='justify-end absolute '>
        <p className='text-black'>   Wellcome </p>
        </div> */}
      {/* Left Side */}
      <div className="md:w-1/3 w-1/2  md:p-4 p-2 bg-slate-500">
        <AccountForm
          onSelect={(component) => setSelectedComponent(component)}
          selected={selectedComponent}
        />
      </div>

      {/* Right Side */}
      <div className="md:w-2/3  w-full md:p-4 bg-green-400 p-2 border border-gray-200">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AccountCont;
