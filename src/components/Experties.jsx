import React, {useEffect, useState, useRef} from 'react'

export function ExpertiesCard({item}){
    return (
        <div className=' w-[47%] max-md:w-full mt-3 mb-8 hover:scale-[1.02] duration-300 transition-all select-none '>
            <div className=' flex items-center gap-2'>
                <div className=' bg-white w-[5px] h-[5px] rounded-full'></div>
                <h1 className='text-[25px] font-medium'>{item.title}</h1>
            </div>
            <p className=' text-[16px] font-extralight'>{item.description}</p>

        </div>
    )
}

function Experties() {

    const arr = [
        {
          title: "Graphic Design",
          description: "Crafting visually stunning designs that capture your brand’s essence. From logo creation to marketing materials, my designs are tailored to convey your brand message and engage your audience effectively."
        },
        {
          title: "Photography & Videography",
          description: "Capture the essence of your moments with high-quality photography and videography services. Whether it's for personal milestones or professional projects, I provide a range of services to meet your needs"
        },
        {
          title: "Branding",
          description: "Developing a cohesive and impactful brand identity that resonates with your target audience. My branding services include brand strategy, logo design, and comprehensive brand guidelines to ensure consistent and memorable brand experiences."
        },
        {
          title: "Web Development",
          description: "Building responsive, user-friendly websites that meet your business objectives. From front-end design to back-end development, I deliver high-performing websites optimized for speed, security, and seamless user experiences."
        }
      ];


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
    className={`exp-container ${isVisible ? 'animate' : ''} w-full flex flex-col justify-center items-center  mb-16`}>
        <div className="heding w-[90%] text-[60px] max-md:text-[40px] font-semibold">
            <h1>Expertise</h1>
        </div>

        <div className=' w-[90%] justify-between flex flex-grow flex-wrap'>
            {
                arr.map((item, index)=> (
                    <ExpertiesCard key={index} item = {item}/>
                ))
            }
           
        </div>


    </div>
  )
}

export default Experties
