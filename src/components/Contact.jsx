import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import BehanceIcon from '../assets/images/Behance.svg'


function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] =useState("")
  const [message, setMessage] = useState("")
  const [isSubmited, setIsSubmited] =useState(false)
  const [isSending, setIsSending] = useState(false)


  
const uid = uuidv4()

 

const mailtoLink = `mailto:junaidparamberi@gmail.com`;

const handleSubmit = async (e) => {
  e.preventDefault()

  
  if(firstName && lastName && email){
    setIsSending(true)

    try{
      await setDoc(doc(db, "users", uid ), {
        firstName : firstName,
        lastName : lastName,
        email : email,
        message : message,
        createdAt:  serverTimestamp()
        
      })
      
      setFirstName("")
      setLastName("")
      setEmail("")
      setMessage("")
  
      setIsSubmited(true)
      setIsSending(false)
  
    } catch(e){
      console.log(e.message)
      setIsSubmited(false)
      setIsSending(false)
    }

  } else {
   return ;
  }


  

}


const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(ref.current); // Stop observing once it's visible
            }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
    };
}, []);


  return (

    <div 
    ref={ref}
    className={` contact-container ${isVisible ? 'animate' : ''} flex w-[80%] my-20 max-md:my-5`}
    >
      
      <div className='flex max-md:flex-col justify-between w-full  items-center '>
        <div className=' flex flex-col justify-evenly w-[50%] max-md:w-full h-[50vh]'>
        <h1 className=' text-[40px] max-md:text-[40px] font-semibold'>Reach out me</h1>
        <div>

          <div className=' flex flex-col gap-4'>
        <h1 className='text-[25px] font-medium'>
          <a  href="https://wa.me/971581976818" target='_blank' >
          +971 58 197 6818</a>
          </h1>
            <a href={mailtoLink}
            className=' text-[25px] font-medium]'
            >junaidparamberi@gmail.com</a>

          <p className=''>
            Abu Dhabi - United Arab Emirates
          </p>
          </div>
        </div>
        <div className=' text-[16px] flex gap-6 max-md:text-[12px] items-end'>
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

        <div className=' border-l-[0.2px] pl-20 p-10 pt-[6px] max-md:pt-[20px] flex flex-col justify-evenly 
         max-md:w-full max-md:p-0 max-md:border-l-[0px] max-md:border-t-[0.2px] w-[50%] '>
        <h1 className=' text-[40px] max-md:text-[40px] font-semibold'>Any Projects</h1>
        <form 
        action="" 
        className=' flex flex-col  gap-10'
        onSubmit={handleSubmit}
        >

        
       {/* { <Alert variant='filled' severity="error">Fill The Inputs </Alert>} */}
        

        <div className=' flex w-full gap-7 mt-4'>
          <input 
          type="text" 
          name="Name" 
          id="name" 
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}
          placeholder='First Name'
          className=' p-1 bg-transparent outline-none border-b w-full'
          required
          />

          <input 
          type="text" 
          name="Name" 
          id="name" 
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          placeholder='Last Neme'
          className=' p-1 bg-transparent outline-none border-b w-full'
          required
          />

        </div>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='Email'
          className=' p-1 bg-transparent outline-none border-b w-full'
          required
          />


        <textarea 
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        id="message" 
        rows="5"
        placeholder='Message'
        className=' p-1 bg-transparent outline-none border-b w-full max-h-28'
        >

        </textarea>

       {!isSubmited ?
       
       <button 
        className={`${isSending && "opacity-20"} bg-white text-black p-[10px] rounded-lg flex justify-center items-center`}
        onClick={handleSubmit}
        disabled = {isSending}
        >
          {
            isSending ?

            <CircularProgress size={23} color="inherit" />
            :
            "Submit"
          }


          
        </button>
        :
          <div className={`mt-4} `}>
          Thank you! Your email has been submitted. We will get back to you shortly.
          </div>
          }
        </form>
        </div>
      </div>
    </div>
      

  )
}

export default Contact
