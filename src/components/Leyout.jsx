import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Leyout() {


  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
  
      
      <Navbar/>


      <Outlet/>

      {/* <a 
      href="https://wa.me/971581976818" 
      target="_blank" rel="noopener noreferrer"
      className={` bg-[#ffffff] flex  fixed gap-1 border-[0.2px] text-black
        ${isScrolled ? "bottom-[70px] max-md:bottom-[95px]" : "bottom-[-70px]"} 
         right-[70px] max-md:right-[25px]  p-[10px] justify-center items-center 
         rounded-[10px] duration-300 ease-in-out transition-all
         text-[16px] font-semibold
          hover:scale-105 active:scale-110
        `}
      >
        <WhatsAppIcon

          fontSize='medium'
          sx={{
        
            transition: 'bottom 0.2s ease-in-out', // Smooth transition
          }}
        />
        <p className=' max-md:hidden'>Chat With Us</p>
      </a> */}

      <Footer/>
    </div>
  )
}

export default Leyout
