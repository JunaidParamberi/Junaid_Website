import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import BehanceIcon from '../assets/images/Behance.svg'


function Footer() {
  return (
    <div className=' flex w-full justify-center items-center mt-12 flex-col'>
        <div className=' bg-[#ffffffe6] h-[0.2px] w-[90%]'></div>
      <div className=' w-[90%] flex justify-between py-5 max-md:items-center max-md:gap-2 max-md:flex-col-reverse'>
        <p className=' text-[14px]'>2024 © — Made by Junaid Parambery</p>

        <div className=' text-[14px]  flex gap-6'>
        <a 
            className=' opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'
            href="https://github.com/JunaidParamberi" target='_blank'><GitHubIcon/></a>
            <a 
            className=' opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'
            href="https://www.instagram.com/junaid_paramberi/" target='_blank'><InstagramIcon/></a>
            <a 
             className=' opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'
             href="https://x.com/ParamberiJunaid" target='_blank'><XIcon/></a>
            {/* <a 
             className=' hover:translate-y-[-4px] hover:text-[#7982da] hover:underline duration-200 transition-all'
             href="https://discord.com/users/junaid_55235" target='_blank'>Discord</a> */}
            <a 
             className=' opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'
             href="https://www.behance.net/junaidkdr" target='_blank'><img src={BehanceIcon} alt="" /></a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
