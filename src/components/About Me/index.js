import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import './aboutMe.css';
import headshot from './../../assets/images/headshot.jpeg';
export default function Contact() {
  const [windowInView, setWindowInView] = useState(false);
  const animatedHeadshot = useSpring({ to: { opacity: !windowInView ? 0 : 1, }, delay: 800});
  const animatedHeadshotBorder = useSpring({ to: { x: !windowInView ? 100 : 0,opacity: !windowInView ? 0 : 1, }, delay: 1000});
  const animatedParagrah = useSpring({ to: { x: !windowInView ? -100 : 0, opacity: !windowInView ? 0 : 1, }, delay: 900 });

  return (
    <div className="aboutMe">
      <div className='aboutMeStyle'>
        <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.div className='headshotBorder' style={animatedHeadshotBorder}/>
        </Waypoint>
        <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.img className='headshot' src={headshot} alt="headshot" style={animatedHeadshot} />
        </Waypoint>
        <div className='textBorder'/>
        <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.p className='text' style={animatedParagrah}>
          Self-motivated and ambitious full-stack developer who enjoys coming up with solutions to complex challenges while adapting to an ever-changing environment.
        </animated.p>
        </Waypoint>
      </div>
    </div>
  )
}