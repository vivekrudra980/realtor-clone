import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  function toggle() {
    setShowPassword((prevState) => !prevState);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className='font-bold text-center text-3xl m-2'>Sign Up</h1>
      <div className='flex items-center justify-center flex-wrap max-w-6xl mx-auto px-4 py-4'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='key'
            className='w-full rounded'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input
              type='text'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Full Name'
              className='w-full px-4 py-2 mb-6 bg-white rounded shadow-md text-lg text-gray-700 transition ease-in-out '
            />
            <input
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email Address'
              className='w-full px-4 py-2 mb-6 bg-white rounded shadow-md text-lg text-gray-700 transition ease-in-out '
            />
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={onChange}
                placeholder='Password'
                className='w-full px-4 py-2 mb-6 bg-white rounded shadow-md text-lg text-gray-700 transition ease-in-out '
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={toggle}
                  className='absolute right-3 text-xl top-3 cursor-pointer'
                />
              ) : (
                <AiFillEye
                  onClick={toggle}
                  className='absolute right-3 text-xl top-3 cursor-pointer'
                />
              )}
            </div>
            <div className='flex justify-between text-sm sm:text-md '>
              <p>
                Have an account?
                <Link
                  to='/sign-in'
                  className='ml-2 text-red-500 hover:text-red-700 transition duration-200 ease-in-out'
                >
                  Sign in
                </Link>
              </p>
              <Link
                to='/forgot-password'
                className=' text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out'
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type='submit'
              className='uppercase text-center w-full bg-blue-500 py-2 my-4 text-white font-semibold rounded hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800'
            >
              sign up
            </button>
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400'>
              <p className='text-center font-semibold mx-2'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
