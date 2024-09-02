import React from 'react';
import Logo from '../assets/images/logo_dark.svg';
import { HashLoader, BarLoader, BounceLoader, BeatLoader, CircleLoader, ClimbingBoxLoader, ClipLoader, ClockLoader } from 'react-spinners';

function LoadingPage() {
  return (
    <div className='text-white w-full h-full absolute z-[100] bg-black flex justify-center items-center'>
      {/* <img
        className='w-[5%] animate-blink-zoom'
        src={Logo}
        alt="Loading"
      /> */}
      <HashLoader 
      color='white' 
      speedMultiplier={2}
      />
    </div>
  );
}

export default LoadingPage;
