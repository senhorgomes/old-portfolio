import React from 'react';
import './projectsInfo.css';

export default function ProjectInfo (props) {
  return (
    <div className="project-card">
      <img className='project-img' src={props.img} alt='projectImage'/>
      <div className='project-info-text'>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-description'>{props.description}</p>
      </div>
    </div>
  )
}