import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import FeatureProducts from './Components/FeatureProducts'




function Home() {
  const data = {
    name : 'Shopping site'
  }
  return (
    <div>
      <HeroSection myData={data}/>
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </div>
  )
}


export default Home
