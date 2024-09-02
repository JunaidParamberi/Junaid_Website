import React, { useEffect, useState } from 'react';
import LogoDark from '../assets/images/logo_dark.svg';
import { Link, NavLink } from 'react-router-dom';
import WhatsApp from '@mui/icons-material/WhatsApp';

function Navbar() {
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
        <div className='w-full'>
            
            <div className='w-full flex flex-col items-center justify-center'>
                <Link className='py-[30px] w-[160px] hover:scale-105 duration-200 transition-all' to='/'>
                    <img className='w-full' src={LogoDark} alt="logo" />
                </Link>

                <div className={`nav_links bg-[#282828] p-1 rounded-[30px] flex gap-7 
                     duration-500 ease-in-out transition-all text-center text-[18px] max-md:text-[12px] max-md:gap-0 max-md:hover:gap-0
                    ${isScrolled ? "fixed-nav" : "initial-nav "}
                    `}>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `text-[#C4C4C4] p-[10px] px-[20px] rounded-[27px] transition-all duration-3npm00 ease-in-out
                            ${isActive ? "bg-white text-black opacity-100" : ""}`}>
                        Home
                    </NavLink>
                    
                    <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    `text-[#C4C4C4] p-[10px] px-[20px] rounded-[27px] transition-all duration-3npm00 ease-in-out
                                    ${isActive ? "bg-white text-black opacity-100" : ""}`}>
                                About
                    </NavLink>

                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            `text-[#C4C4C4] p-[10px] px-[20px] rounded-[27px] transition-all duration-3npm00 ease-in-out
                            ${isActive ? "bg-white text-black opacity-100" : ""}`}>
                        Projects
                    </NavLink>


                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `text-[#C4C4C4] p-[10px] px-[20px] rounded-[27px] transition-all duration-3npm00 ease-in-out
                            ${isActive ? "bg-white text-black opacity-100" : ""}`}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
