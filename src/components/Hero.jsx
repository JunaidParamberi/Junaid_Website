import React, {useState, useEffect, useRef}from 'react';
import SouthIcon from '@mui/icons-material/South';

function Hero() {
  const email = 'junaidparamberi@gmail.com';  // Your email
  const subject = 'Hello!';  // Desired subject
  const body = 'I wanted to reach out and say hello.';  // Desired body message

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


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
    <div ref={ref} 
    className={`hero-container ${isVisible ? 'animate' : ''} w-full flex justify-center items-center flex-col mt-20`}>
      <div className='w-[90%] flex flex-col justify-center'>
        <div className='text-[250px] flex flex-col font-black max-md:text-[70px]'>
          <h1 className='tracking-tighter'>Websites &</h1>
          <div className='flex gap-7 max-md:flex-col max-md:items-start max-md:gap-2'>
            <h1 className='tracking-tighter mt-[-130px] max-md:mt-[-20px]'>Branding</h1>
            <div className='flex justify-center items-center'>
              
              <a
                href='#projects'
                className='font-medium text-[20px] max-md:text-[16px]
                flex justify-center items-center bg-[#282828] p-4 rounded-[30px] hover:tracking-wider saturate-200 transition-all'>
                Scroll Down
                <SouthIcon fontSize='small' />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-5 max-md:mt-6'>
          <div className='text-[20px] font-light'>
            <p className='text-[25px] font-bold mb-[-10px]'>Let's Talk </p>
            <a href={mailtoLink} className='font-extralight hover:underline'>
              junaidparamberi@gmail.com
            </a>
          </div>
          <div className='text-[20px] font-light w-[50%] max-md:w-full'>
            <p className='leading-tight'>
              "Welcome to my digital workspace! I'm a freelance web developer with a knack for turning
              ideas into responsive and user-friendly websites. Let's collaborate and bring your vision to the web."
            </p>
          </div>
          {/* <video
      autoPlay = {true}
      loop
      muted
      className=' top-0 absolute z-[-10] opacity-80 h-full w-full object-cover grayscale '
      src={bgVideo}></video>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-[-5]"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
