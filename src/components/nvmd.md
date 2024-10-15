<!-- import React, { useEffect, useState } from 'react';
import LogoDark from '../assets/images/logo_dark.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import WhatsApp from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsActive(false);
    }, [location]);

    return (
        <div className={`w-full flex flex-col items-center z-[100] py-3 bg-[#000000] ${isScrolled && "fixed top-0"}`}>
            <div className='flex w-[90%] items-center justify-between'>
                <Link
                    className='py-[10px] hover:scale-105 duration-200 transition-all cursor-pointer'
                    to='/'
                >
                    <img className='w-[160px]' src={LogoDark} alt='logo' />
                </Link>

                {/* Toggle Button for Mobile View */}
                <div className='relative flex justify-center items-center mr-4 md:hidden'>
                    <div
                        onClick={() => setIsActive(!isActive)}
                        className={`transition-transform duration-300 transform ${
                            isActive ? 'rotate-90' : 'rotate-0'
                        }`}
                    >
                        {isActive ? (
                            <CloseIcon fontSize='large' />
                        ) : (
                            <MenuIcon fontSize='large' />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isActive && (
                    <div className='absolute top-16 right-7 p-6 w-40 bg-white flex flex-col items-center rounded-xl shadow-lg'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `text-black p-[10px] transition-all duration-200 ease-in-out ${
                                    isActive ? 'border-b-[1px] opacity-100 font-bold' : 'opacity-50'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                `text-black p-[10px] transition-all duration-200 ease-in-out ${
                                    isActive ? 'border-b-[1px] opacity-100 font-bold' : 'opacity-50'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to='/projects'
                            className={({ isActive }) =>
                                `text-black p-[10px] transition-all duration-200 ease-in-out ${
                                    isActive ? 'border-b-[1px] opacity-100 font-bold' : 'opacity-50'
                                }`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `text-black p-[10px] transition-all duration-200 ease-in-out ${
                                    isActive ? 'border-b-[1px] opacity-100 font-bold' : 'opacity-50'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                )}

                {/* Desktop Menu */}
                <div
                    className={`p-1 flex gap-14 max-md:hidden duration-500 ease-in-out transition-all text-center text-[16px]`}
                >
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `text-white p-[10px] transition-all duration-200 ease-in-out ${
                                isActive ? 'border-b-[1px] opacity-100' : 'opacity-50'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            `text-white p-[10px] transition-all duration-200 ease-in-out ${
                                isActive ? 'border-b-[1px] opacity-100' : 'opacity-50'
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            `text-white p-[10px] transition-all duration-200 ease-in-out ${
                                isActive ? 'border-b-[1px] opacity-100' : 'opacity-50'
                            }`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `text-white p-[10px] transition-all duration-200 ease-in-out ${
                                isActive ? 'border-b-[1px] opacity-100' : 'opacity-50'
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar; -->






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

                <div className={`nav_links bg-[#242424] p-1 rounded-[30px] flex gap-7 
                     duration-500 ease-in-out transition-all text-center text-[18px] max-md:text-[12px] max-md:gap-0 max-md:hover:gap-0
                    ${isScrolled ? " fixed-nav" : "initial-nav "}
                    `}>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `text-[#C4C4C4] p-[10px] px-[20px] rounded-[27px] transition-all duration-3npm00 ease-in-out
                            ${isActive ? "  bg-white text-black opacity-100" : ""}`}>
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

