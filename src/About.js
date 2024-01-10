import React from 'react'
import HeroSection from './Components/HeroSection'


function About() {

 

  const data = {
    name : 'Shopping store'
  }
  return (
    <div>
      
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
