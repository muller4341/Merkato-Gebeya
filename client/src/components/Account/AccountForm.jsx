import  { useState } from 'react';
import { Link } from 'react-router-dom';


const AccountForm = ({ onSelect, selected }) => {
  const [manageAccountOpen, setManageAccountOpen] = useState(false);
  const [myOrdersOpen, setMyOrdersOpen] = useState(false);

  const handleManageAccountClick = () => {
    setManageAccountOpen(!manageAccountOpen);
    // Close My Orders if open
    setMyOrdersOpen(false);
  };

  const handleMyOrdersClick = () => {
    setMyOrdersOpen(!myOrdersOpen);
    // Close Manage Account if open
    setManageAccountOpen(false);
  };

  return (
    
    <div className="flex flex-col max-w-xs p-16">
      <button
        className={`p-2 w-full text-left font-semibold ${
          manageAccountOpen ? 'bg-gray-200' : ''
        }`}
        onClick={handleManageAccountClick}
      >
        Manage My Account
      </button>

      {manageAccountOpen && (
        <div className="pl-4">
          <ul className=' space-y-3'>
        <li>
        <Link className='hover:text-red-700' to="/account/addressbook" onClick={() => onSelect('AddressBook')}>
          AddressBook
        </Link>
      </li>
      <li>
        <Link className='hover:text-red-700'to="/account/paymentoption" onClick={() => onSelect('Mypayment')}>
          Mypayment
        </Link>
      </li>
      <li>
        <Link className='hover:text-red-700' to="/account/Profile" onClick={() => onSelect('Profile')}>
          Profile
        </Link>
      </li>
      </ul>
        </div>
      )}

      <button
        className={`p-2 w-full text-left font-semibold  ${
          myOrdersOpen ? 'bg-gray-100' : ''
        }`}
        onClick={handleMyOrdersClick}
      >
        My Orders
      </button>

      {myOrdersOpen && (
        <div className="pl-4">
            <ul className=' space-y-3'>
        <li>
        <Link className='hover:text-red-700' to="/account/MyReturns" onClick={() => onSelect('MyReturns')}>
          My Returns
        </Link>
      </li>
      <li>
        <Link className='hover:text-red-700'to="/account/MyCancellation" onClick={() => onSelect('MyCancellation')}>
          my Cancellation
        </Link>
      </li>
      
      </ul>
        </div>
      )}

      <button className="p-2 w-full text-left  font-semibold">
        My Wishlist
      </button>
    </div>
  );
};

export default  AccountForm;
