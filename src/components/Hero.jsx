import React from 'react'
import face from './face2.png'

import './Hero.css'
const Hero = () => {
  return (
    <>
  
    <div className='hero'>

         <div className='hero-img'>  
            <img src={face} alt="" />
      
        </div>
        <div className='intro'>
          <h2> 👋hi i,m <span>Yashwant</span></h2>
          <p>A half MERN  software engineer, half designer from India.
<br />20, he/him</p>
        </div>
       
         
    </div>
     
   </>
  )
}

export default Hero
