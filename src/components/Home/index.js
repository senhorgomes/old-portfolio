import React, { useState } from 'react';
import './home.css';
import { useSpring, animated } from 'react-spring';
import { Button } from 'react-scroll';
import { Waypoint } from 'react-waypoint';

export default function Home() {
  const [windowInView, setWindowInView] = useState(false);
  const textAnimation = useSpring({ to: { y: !windowInView ? 123 : 0, opacity: !windowInView ? 0 : 1, },  delay: 1500 });
  const propsDiv = useSpring({ to: { opacity: !windowInView ? 0 : 1, }, delay: 2000 });
  return (
      <div className="home">
        <div className="textHomeGroup">
        <p className="textHome">
          hey,
        </p>
        <Waypoint onEnter={() => setWindowInView(true)}>
          <animated.p className="textHome" style={textAnimation}>
          i'm bryan,<br/>
           a web and app developer
          </animated.p>
        </Waypoint>
        </div>
        <div className="textLink">
          <Waypoint onEnter={() => setWindowInView(true)}>
            <animated.div className="column" style={propsDiv}>
              <Button
                type="button"
                className="homeLinks"
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                duration={500}
                exact="true"
                defaultValue='About Me'
              />
              <Button
                type="button"
                className="homeLinks"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                exact="true"
                defaultValue='Projects'
              />
              <Button
                type="button"
                className="homeLinks"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                exact="true"
                defaultValue='Contact'
              />
            </animated.div>
          </Waypoint>
        </div>
      </div>
  )
}