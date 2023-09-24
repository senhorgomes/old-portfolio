import React from 'react';
import './projectsInfo.css';

export default function ProjectInfoRight (props) {
  return (
    <div className="project-card-right">
      <div className='project-info-text-right'>
      <h2 className='card-title'>{props.title}</h2>
      <p className='card-description'>{props.description}</p>
      </div>
      <img className='project-img' src={props.img} alt='projectImage'/>
    </div>
  )
}