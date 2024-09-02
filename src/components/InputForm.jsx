import React, { useState, useEffect, useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { MoonLoader, PulseLoader } from 'react-spinners';
import CircularProgress from '@mui/material/CircularProgress';


function InputForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Add submission state
  const [isSending, setIsSending] = useState(false)

  const generateUniqueId = () => {
    const userAgent = window.navigator.userAgent.replace(/[^a-zA-Z0-9]/g, '_');
    const location = window.location.href.replace(/[^a-zA-Z0-9]/g, '_');
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substr(2, 9);

    return `${userAgent}-${location}-${timestamp}-${randomString}`;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true)

    if(email){

      try {
        // Generate a sanitized unique ID
        const uniqueId = generateUniqueId();
  
        // Add a new document in collection "emails" with the generated ID
        await setDoc(doc(db, "emails", uniqueId), {
          email: email,
          createdAt: new Date(),
          userid : uuidv4()
          
        });
  
        // Clear the input field after submission
        setEmail('');
  
        // Set submission state to true
        setIsSubmitted(true);
        setIsSending(false)
  
      } catch (error) {
        console.error("Error adding document: ", error);
        setIsSending(false)
        // Optionally handle error
      }
    }

  };


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
    className={` input-container ${isVisible ? 'animate' : ''}  w-full flex flex-col justify-center items-center mt-12`}>
      <div className='flex w-[90%] justify-center items-center gap-5 flex-col'>
        <h1 className='text-[60px] text-center max-md:text-[40px] 
        font-light w-[70%] max-md:w-full tracking-tighter leading-snug flex flex-col'>
          Have an Awesome Project Idea?
          <span className='text-[#ffffff] font-bold'>Let's Discuss</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex justify-between items-center 
          bg-transparent border-[1px] rounded-[50px] px-3 py-2 w-[40%] max-md:w-full'
          
        >
          <div className='flex items-center gap-3 w-[90%]'>
            <div className='bg-[#ffffff75] p-2 rounded-full '>
              <EmailIcon  />
            </div>
            <input
              className='bg-transparent focus:outline-none w-[90%]'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              placeholder='Enter Email Address'
              required 
              disabled={isSubmitted}
              aria-autocomplete='email'
            />
          </div>
             {
               !isSending ? 
          <button
            type='submit'
            className='bg-[#ffffff75] px-4 cursor-pointer  p-2 rounded-3xl active:bg-white active:text-black'
            disabled={isSubmitted}
          >
            Send
          </button>
              : 
              <div className=' px-2 flex justify-center items-center bg-[#ffffff75] py-2 rounded-full'>
                <CircularProgress size={25} color="inherit" />

              </div>
             }
            
        </form>


          <div className={`mt-4 ${isSubmitted ? "opacity-100" : "opacity-0"} transition-all duration-200 `}>
          Thank you! Your email has been submitted. We will get back to you shortly.
          </div>

      </div>
    </div>
  );
}

export default InputForm;
