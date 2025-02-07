import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className='my-2 w-full flex items-center justify-center bg-red-600 py-2 rounded text-white transition duration-150 ease-in-out active:bg-red-800 hover:bg-red-700'>
      <FcGoogle className='text-xl bg-white rounded-xl mr-2' />
      Continue with Google
    </button>
  );
}
