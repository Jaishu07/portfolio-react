import React from 'react'
import ProjectCard from './ProjectCard'

const Projecs = () => {

  const cardData = [
    { title: 'Eye Therapy',
      link: 'https://github.com/Jaishu07/eye-therapy-on',
      live:'https://eye-therapy-on.netlify.app',
      date:'10/11/2024',
      content: 'Provide personalized eye therapy to improve visual health and alleviate issues like eye strain, fatigue, and focusing difficulties.Assess patients` visual needs and design targeted exercises to treat conditions such as lazy eye and crossed eyes. Collaborate with healthcare professionals and educate patients on proper eye care and lifestyle adjustments.Track patient progress and adjust therapy plans for optimal results.'
      

    
    },
    { title: 'paste-app',
      link: 'https://github.com/Jaishu07/paste-app',
      live:'https://paste-app-six.vercel.app/',
      date:'25/10/2024',
      content: ' Paste App is a simple, user-friendly web application designed to help users quickly store and manage snippets of text, URLs, or code for future reference. Whether youre a developer, writer, or simply need a place to save important notes or ideas, this app allows for easy pasting, organizing, and retrieval of stored content.' 
    },

    { title: 'Lazarev.com clone',
      link:'https://github.com/Jaishu07/lazarev/',
      live:'https://jaishu07.github.io/lazarev/',
      date:'08/8/2024',
      
      content: 'This project is a clone of the Lazarev.com website, designed to replicate its sleek, modern user interface and dynamic animations. The goal is to create an aesthetically appealing and interactive experience similar to the original site, while maintaining smooth transitions and engaging animations.'
     },
    // { title: 'Card 4', 
    //   content: 'This is the content of card 4.'
    //  },

  ];
  return (
    <div>
      {
        cardData.map((card,index)=>(
          <ProjectCard  key={index}  
          title={card.title} 
          link={card.link}  
          content={card.content}
          date={card.date}
          live={card.live}
          />
        ))
      }
    </div>
  )
}

export default Projecs
