import React from 'react'
import Slider from '../components/Slider'
import Cardsprice from '../components/Cardsprice'
import Cards from '../components/Cards'
import Bikeslider from '../components/BikeSlider'
import Fashionslider from '../components/Fashionslider'
import Contact from '../components/Contact'
const About = () => {
  return (
    <div>
        <Slider/>
        <Cards/>
        <div className='pb-[20px]' ><Bikeslider/></div>
        <div className='pb-[90px]'><Fashionslider/></div>
         <Cardsprice/>
         <Contact/>
    </div>
  )
}

export default About