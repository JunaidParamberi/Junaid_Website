import React, {useState, useEffect, useRef} from 'react'
import Contact from '../components/Contact'



function ContactUs() {

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
    <div className=' flex flex-col items-center'>
      <Contact/>

      {/* <iframe 
      ref={ref}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6774065936115!2d54.32163757558514!3d24.461975161086578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6594a00580cb%3A0xdb8619f5482eaa78!2sAbu%20Dhabi%20National%20Oil%20Company%20(ADNOC)%20Headquarters!5e0!3m2!1sen!2sae!4v1723987748946!5m2!1sen!2sae"
      allowFullScreen
      loading="lazy"
      className={`iframe-container ${isVisible ? 'animate' : ''} w-[80%] h-[30vh] outline-none rounded-lg`}
       
      >

       </iframe>
 */}


    </div>
  )
}

export default ContactUs



