import React, {useEffect, useState, useRef} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from './ProjectCard';


import { projectsItems } from '../ProjectItems';
import { Link, useLocation } from 'react-router-dom';

function Projects() {
    const location = useLocation()
    const displayedItems = location.pathname === "/projects" ? projectsItems :  projectsItems.slice(0, 4);

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
    className={`projects-container ${isVisible ? 'animate' : ''} w-full flex flex-col justify-center items-center py-5 my-[40px]`} id='projects'>
        <div className=' w-[90%]'>
            <div className=' flex justify-between items-center'>
                <h1 className=' text-[60px] max-md:text-[40px] font-semibold'>Projects</h1>

              { location.pathname !== "/projects" &&  <Link 
                to='projects'
                className=' flex justify-center items-center gap-1 text-[20px] hover:translate-x-1 duration-200 transition-all'>
                    See All
                    <ArrowForwardIcon/>
                </Link>}

            </div>

            <div className='w-full flex justify-between flex-wrap flex-grow  max-md:flex-col'>

                {
                    displayedItems.map((item, index)=> (
                        <ProjectCard key={index} item = {item}/>

                    ))
                }
         
            </div>

        </div>
    </div>
  )
}

export default Projects
