import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
const Home = () => {
  return (
    <div className='bg-[#E3E6E6]'>
        <div><Navbar/></div>
        {/* <div><Navbar/></div> */}
        <div><About/></div>
    </div>
  )
}

export default Home