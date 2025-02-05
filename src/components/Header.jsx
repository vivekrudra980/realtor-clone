import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  function pathMatch(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  const navigate = useNavigate();

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            className='h-5 cursor-pointer'
            src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg'
            alt='logo'
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-10 '>
            <li
              className={`py-3 text-gray-400 border-b-[3px] border-transparent cursor-pointer ${
                pathMatch('/') ? 'text-gray-950 border-b-red-500' : ''
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-gray-400 border-b-[3px] border-transparent cursor-pointer ${
                pathMatch('/offers') && ' text-gray-950 border-b-red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 text-gray-400 border-b-[3px] border-transparent cursor-pointer ${
                pathMatch('/sign-in') && 'text-gray-950 border-b-red-500'
              }`}
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
