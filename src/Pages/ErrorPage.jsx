import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VectorImg from '../assets/images/404 Vector.svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function ErrorPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
      <div className='text-center flex flex-col justify-center items-center gap-5'>
        {/* <img src={VectorImg} className='w-[60%]' alt="404 Error" /> */}
         <h1 className=' text-[100px] max-md:text-[50px] font-semibold' ><span className=' text-[50px] max-md:text-[25px]'>oops...</span> 404</h1>
        <p className='text-[20px] max-md:text-[16px]'>Sorry, we were unable to find that page</p>
        <h2 className='text-[25px] max-md:text-[20px]'>
          Start From <Link to="/" className='font-semibold underline'>Home</Link>
        </h2>
        <button 
          onClick={() => navigate(-1)} // This will navigate to the previous page
          className=' hover:underline text-[25px] max-md:text-[20px] flex gap-2 justify-center items-center'
        >
          <KeyboardBackspaceIcon fontSize='large'/>Go back 
        </button>
      </div>
    </div>
  )
}

export default ErrorPage;
