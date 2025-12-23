import React from 'react'
import Slider from '../components/Slider'
import Cardsprice from '../components/Cardsprice'
import Cards from '../components/Cards'
import Bikeslider from '../components/Bikeslider'
import Fashionslider from '../components/Fashionslider'
import Contact from '../components/Contact'
const About = () => {
  return (
    <div>
        <div className='mt-[-642px] hidden lg:block '><Slider/></div>
        <div className=''><Cards/></div>
        <div className='pb-[20px] hidden lg:flex' ><Bikeslider/></div>
        <div className='pb-[90px] hidden lg:flex'><Fashionslider/></div>
         <div className='hidden lg:flex'><Cardsprice/></div>
          <div className='pb-[0px] hidden lg:flex '><Fashionslider/></div>
         <div className='hidden lg:block'><Contact/></div>
    </div>
  )
}

export default About