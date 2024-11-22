import React from 'react'
import Hero from './Hero'
import Aboutinfo from './Aboutinfo'
import ProjectCard from './ProjectCard'
import Projecs from './Projecs'
import MeetCall from './MeetCall'
import Footer from './Footer'



const Home = () => {
    
    
  return (
    <div>
      
       <Hero/>
       <Aboutinfo/>
       <MeetCall></MeetCall>
       <h3>Project</h3>
       {/* <ProjectCard></ProjectCard> */}
       <br />
       {/* <ProjectCard></ProjectCard> */}
       
       <Projecs/>
       <Footer/>
    </div>
  )
}

export default Home
