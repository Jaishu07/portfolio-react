import React from 'react'
import Leetcode from './leetcode.png'
import face from './face2.png'
import img1 from '../assets/portfoliwo 2.jpg'
import img2 from '../assets/portfoliwo 3.jpg'
import img3 from '../assets/portfoliwo 4.jpg'
import img4 from '../assets/portfoliwo 5.jpg'
import img5 from '../assets/portfoliwo 6.jpg'
import img6 from '../assets/portfoliwo 7.jpg'
import './About.css'
import Footer from './Footer'

const About = () => {
  return (
    <div className='h1'>
      <h1>💡 Building Solutions: Images from My Collaborative and Competitive Projects in Tech Events and Hackathons.</h1>
    <div className="about">
      
      {/* <img className='img1' src={Leetcode} alt="" /> */}
      {/* <img className='img2' src={face} alt="" /> */}
      <img className='img3' src={img1} alt="" />
      <img className='img4' src={img2} alt="" />
      <img className='img5' src={img3} alt="" />
    
      <img className='img6' src={img4} alt="" />
      <img className='img7' src={img5} alt="" />
      <img className='img8' src={img6} alt="" />
    </div>
    <Footer/>
    </div>
  )
}

export default About
