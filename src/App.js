import './App.css';
import Home from './components/Home/index';
import About from './components/About Me/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';
import NavBar from './components/NavBar/index';

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Element name="aboutMe">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
