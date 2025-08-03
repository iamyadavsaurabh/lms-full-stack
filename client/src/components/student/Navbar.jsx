import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

  const location = useLocation();

  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const becomeEducator = async () => {
    console.log('🔥 Become Educator button clicked!'); // Initial debug log

    try {

      if (isEducator) {
        console.log('User is already educator, navigating to dashboard');
        navigate('/educator')
        return;
      }

      console.log('Backend URL:', backendUrl); // Debug log
      console.log('User object:', user); // Debug log
      
      if (!user) {
        toast.error('Please sign in first to become an educator.');
        return;
      }

      // Test backend connectivity first
      console.log('Testing backend connectivity...');
      try {
        const testResponse = await axios.get(backendUrl);
        console.log('Backend test response:', testResponse.data);
      } catch (testError) {
        console.error('Backend connectivity test failed:', testError);
        toast.error('Cannot connect to backend server. Please try again later.');
        return;
      }

      const token = await getToken()
      console.log('Token received:', token ? 'Yes' : 'No'); // Debug log
      console.log('Full API URL:', backendUrl + '/api/educator/update-role'); // Debug log
      
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { 
        headers: { Authorization: `Bearer ${token}` },
        timeout: 10000 // 10 second timeout
      })
      
      console.log('API Response:', data); // Debug log
      
      if (data.success) {
        toast.success(data.message)
        setIsEducator(true)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.error('Become Educator Error:', error);
      console.error('Error details:', error.response?.data);
      
      if (error.code === 'NETWORK_ERROR' || error.code === 'ERR_NETWORK') {
        toast.error('Network error. Please check your connection and try again.')
      } else if (error.response?.status === 401) {
        toast.error('Please sign in first to become an educator.')
      } else if (error.response?.status === 404) {
        toast.error('Educator endpoint not found. Please check if backend is properly deployed.')
      } else if (error.response?.status === 500) {
        toast.error('Server error. Please try again later.')
      } else {
        toast.error(error.response?.data?.message || 'Failed to become educator. Please try again.')
      }
    }
  }

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {
            user && <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments' >My Enrollments</Link>
            </>
          }
        </div>
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Create Account
          </button>}
      </div>
      {/* For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
          | {
            user && <Link to='/my-enrollments' >My Enrollments</Link>
          }
        </div>
        {user
          ? <UserButton />
          : <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>}
      </div>
    </div>
  );
};

export default Navbar;