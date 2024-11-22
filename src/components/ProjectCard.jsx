import React from 'react'
import "./ProjectCard.css";
// import Projecs from './projecs';

const ProjectCard = ({title,content,link,date,live}) => {
  return (
    <div>
      
      <div className='project'>
        <div>
           <h1>{title}</h1>
           <a href={link}>Github</a>
           <a href={live}>Live link</a>
           <p>{content}</p>
        </div>
        <div>
           <p>{date}</p>
           
        </div>
        
        
      </div>
      
    </div>
  )
}

export default ProjectCard
