import React, {useState, useEffect, useRef} from 'react'
import heroImage from '../assets/images/about_photo.png'
import StarIcon from '@mui/icons-material/Star';
import vector from "../assets/images/Vector.svg"
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';

import html5Img from '@/assets/images/html5.svg';
import css3Img from '@/assets/images/css3.svg';
import jsImg from '@/assets/images/js.svg';
import reactjsImg from '@/assets/images/reactjs.svg';
import gitImg from '@/assets/images/git.svg';
import firebaseImg from '@/assets/images/firebase.svg';
import figmaImg from '@/assets/images/figma.svg';


export function Stacks (){

  const arr = [
    {
      imgUrs: html5Img,
      name: "HTML"
    },
    {
      imgUrs: css3Img,
      name: "CSS"
    },
    {
      imgUrs: jsImg,
      name: "JavaScript"
    },
    {
      imgUrs: reactjsImg,
      name: "React"
    },
    {
      imgUrs: gitImg,
      name: "Git"
    },
    {
      imgUrs: firebaseImg,
      name: "Firebase"
    },
    {
      imgUrs: figmaImg,
      name: "Figma"
    }
  ];





  return (
    <div
   
    className={` flex flex-col justify-center items-center border-dotted border-[#ffffff]`}
    
    >
       <h2 className=' text-center text-[20px] max-md:text-[18px]'>Experince With </h2>

       <div className=' flex gap-2 max-md:gap-1 items-start'>
        {
          arr.map((item, index)=> 
            <div
            className=' text-center flex items-center flex-col justify-center'
            key={index}>

            <img 
              className=' h-12 p-1 max-md:h-9'
              src={item.imgUrs} 
              alt={item.name} 
               />

               {/* <h3 className=' text-[8px]'>{item.name}</h3> */}
              </div>
          )
        }
       </div>
    </div>
  )
}

export function Rating (){


  
  function generateStars(n){
    let stars = []

    for(let i = 0; i < n; i ++ ){
      stars.push( <StarIcon 
        fontSize={window.innerWidth <= 900 ? 'small' : 'large'}
        key={i}
        />)
    }
    return stars;
  }

  return (
    <div className=' flex flex-col items-end justify-end'>
      <div className=' flex '>
       {generateStars(5)}
      </div>
      <h1 className=' text-[30px] font-semibold text-right leading-tight flex flex-col justify-end items-end mr-1 max-md:text-[22px]'>
        5+ Years
    
        <span className=' text-[15px] font-light max-md:text-[12px]'>Experince</span>
        </h1>

    </div>
  )
}

function About() {


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
    className={`about-container ${isVisible ? 'animate' : ''} w-full flex flex-col justify-center items-center mt-10 `}>
        <div className=' w-[90%] relative '>
          <div className=' absolute right-24 bottom-[500px] z-50 max-md:right-[10px] max-md:top-[220px] '>

          <Rating/>
          </div>

          <h2 className=' text-center text-[30px]'>Hello</h2>
          <h1 className=' text-[120px] text-center font-normal leading-[1] absolute w-full max-md:text-[50px]'>
            I'm 
            <span className=' font-black'> Junaid,</span> 
            <br /> Web Developer</h1>

          <div className=' w-full flex justify-center relative mt-[180px]'>
            <img src={heroImage} className=' w-[45%] max-md:w-[70%]  grayscale' alt="" />

            <div className=' h-[400px] w-[60%] bg-[#9d9d9d] absolute bottom-0 z-[-1] rounded-t-[600px] max-md:h-[200px] max-md:w-[80%]'></div>
            {/* <img
            className=' w-[80%] opacity-30 absolute bottom-0 z-[-10]'
            src={vector} alt="" /> */}
          </div>
          <div className=' flex w-full justify-center'>

          <p className=' w-[90%] max-md:w-[95%] max-md:p-3 text-wrap text-center mt-2 border-r-[5px] border-l-[5px] ] text-[18px] p-7 rounded-xl max-md:text-[13px] '>Welcome to my creative world! I'm a versatile artist with a passion for visual storytelling. As a Graphic Designer, I transform ideas into stunning visuals that captivate and communicate.
            My lens is my canvas, and as a Photographer, I freeze moments in time, turning them into unforgettable memories. But that's just the beginning.I'm also an experienced Videographer, capturing emotions and narratives through my lens, and a skilled Video Editor who weaves together footage into cinematic masterpieces.
            And to add a digital dimension to my creativity, I'm a Web Developer, crafting interactive online experiences that bridge imagination and technology. Every project I take on is a unique opportunity to blend artistry and innovation.
            {/* <div className=' bg-white h-[0.5px] w-full mt-1'></div> */}
            </p>
          </div>
          <div className=' mt-4'>
          <Stacks/>

          </div>
        </div>
    </div>
  )
}

export default About
