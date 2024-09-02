import React, {useState, useEffect, useRef} from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experties from '../components/Experties'
import WorkExp from '../components/WorkExp'
import InputForm from '../components/InputForm'


function Home() {


  
  return (
    <div>


   
      <Hero/>
        
      <Projects/>
      <Experties/>
      <WorkExp/>
      <InputForm/>
    </div>
  )
}

export default Home
