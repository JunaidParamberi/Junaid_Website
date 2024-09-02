import React, {useState, useEffect, useRef} from 'react'


export function Exp({ place, index, arr }) {
    return (
        <div className='flex justify-between w-full items-start hover:scale-[1.02] duration-200 transition-all max-md:leading-snug'>
            <div className='w-[40%]'>
                <h1 className='text-[25px] font-medium w-full max-md:text-[16px]'>{place.companyName}</h1>
                <h2 className='text-[18px] font-normal w-full max-md:text-[12px]'>
                    {`${place.startYear} - ${place.endYear <= 0 ? "Present" : place.endYear}`}
                </h2>
            </div>

            <div className='flex flex-col justify-center items-center h-full'>
                <div className='w-[35px] h-[35px] bg-transparent rounded-full border-dotted border-[2px] flex justify-center items-center p-1'>
                    <div className='w-full h-full bg-white rounded-full'></div>
                </div>
                {index < arr.length - 1 && <div className='w-[1px] h-[120px] border-l-[2px] border-dotted border-white'></div>}
            </div>

            <div className='w-[40%] flex flex-col items-end'>
                <h1 className='text-[25px] font-medium text-right max-md:text-[16px]'>{place.jobTitle}</h1>
                <p className='text-[16px] font-extralight w-full text-right max-md:text-[12px] max-md:font-[200] max-md:tracking-tight max-md:leading-snug'>{place.jobDescription}</p>
            </div>
        </div>
    );
}





function WorkExp() {

    const placesWorked = [
        {
            companyName : "3S Lighting Solutions, Abu Dhabi",
            jobTitle : "Photographer & Graphic Designer",
            jobDescription : "Senior Videographer, Graphic Designer For ADNOC HQ Facade Screens",
            startYear : 2023,
            endYear : 0,
             
        },
        {
            companyName : "Pink Apple Events & Gulf Vaartha",
            jobTitle : "Videographer & Social Media Handler",
            jobDescription : "Senior Videographer, Graphic Designer, Video Editor & Social Media Handler.",
            startYear : 2020,
            endYear : 2023,
             
        },
        {
            companyName : "Pink Apple Events",
            jobTitle : "Graphic Designer",
            jobDescription : "Graphic Designer, Videographer, Photographer, Video Editor &Event Cordinator.",
            startYear : 2018,
            endYear : 2020,
             
        },
    ]



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
    className={`work-container ${isVisible ? 'animate' : ''} w-full flex flex-col items-center`}>
        <div className="flex w-[90%] flex-col gap-3">
            <div>
            <h1 className=' text-[60px] max-md:text-[40px] mb-5 font-semibold '>My Work Experince </h1>

            </div>
            <div className=' flex flex-col'>
                {
                    placesWorked.map((place, index)=> (
                        <div key={index} className=' flex justify-center items-center flex-col' >
                           <Exp key={index} place={place} index={index} arr={placesWorked} />
                            

                        </div>
                        
                    ))
                }

            </div>
        </div>
      
    </div>
  )
}

export default WorkExp
