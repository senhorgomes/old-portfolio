import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Button } from 'react-scroll';

export default function NavBar() {

  const [isHidden, setIsHidden] = useState(true);

  const hideNavBar = () => {
    const position = window.pageYOffset;
    position < (window.innerHeight*0.9) ? setIsHidden(true) : setIsHidden(false) 
  }

  useEffect(() => {
    window.addEventListener("scroll", hideNavBar, { passive: true });

    return () => {
      window.removeEventListener("scroll", hideNavBar);
    };
  }, []);

  let classHide=isHidden?"slide-out":"slide-in"
  return (
    <div id="navbar"className={`navbar ${classHide}`}>
      <Button
        type="button"
        className="navBarLinks"
        activeClass=""
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        exact="true"
        defaultValue="Home"
      />
      <Button
        type="button"
        className="navBarLinks"
        activeClass="active"
        to="aboutMe"
        spy={true}
        smooth={true}
        duration={500}
        exact="true"
        defaultValue="About Me"
      />
      <Button
        type="button"
        className="navBarLinks"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        exact="true"
        defaultValue="Projects"
      />
      <Button
        type="button"
        className="navBarLinks"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        exact="true"
        defaultValue="Contact"
      />
    </div>
  );
};