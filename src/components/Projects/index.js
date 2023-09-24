import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import everyProjectEverDone from '../../assets/constants/index'
import ProjectInfo from './ProjectInfo';
import ProjectInfoRight from './ProjectInfoRight';
import './projects.css';
export default function Projects() {
  const [windowInView, setWindowInView] = useState(false);
  const propsForFirstProject = useSpring({ to: { y: !windowInView ? 100 : 0, opacity: !windowInView ? 0 : 1, }, delay: 500 });
  const propsForSecondProject = useSpring({ to: { y: !windowInView ? 100 : 0, opacity: !windowInView ? 0 : 1, }, delay: 700 });
  const propsForThirdProject = useSpring({ to: { y: !windowInView ? 100 : 0, opacity: !windowInView ? 0 : 1, }, delay: 900 });
  const propsForFourthProject = useSpring({ to: { y: !windowInView ? 100 : 0, opacity: !windowInView ? 0 : 1, }, delay: 1100 });

  return (
    <div className="row">
      <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.div className="column" style={propsForFirstProject}>
          <ProjectInfo
            key={everyProjectEverDone[0].id}
            img={everyProjectEverDone[0].image}
            title={everyProjectEverDone[0].title}
            description={everyProjectEverDone[0].description}
          />
        </animated.div>
      </Waypoint>
      <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.div className="column" style={propsForSecondProject}>
          <ProjectInfoRight
            key={everyProjectEverDone[1].id}
            img={everyProjectEverDone[1].image}
            title={everyProjectEverDone[1].title}
            description={everyProjectEverDone[1].description}
          />
        </animated.div>
      </Waypoint>
      <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.div className="column" style={propsForThirdProject}>
          <ProjectInfo
            key={everyProjectEverDone[2].id}
            img={everyProjectEverDone[2].image}
            title={everyProjectEverDone[2].title}
            description={everyProjectEverDone[2].description}
          />
        </animated.div>
      </Waypoint>
      <Waypoint onEnter={() => setWindowInView(true)}>
        <animated.div className="column" style={propsForFourthProject}>
          <ProjectInfoRight
            key={everyProjectEverDone[3].id}
            img={everyProjectEverDone[3].image}
            title={everyProjectEverDone[3].title}
            description={everyProjectEverDone[3].description}
          />
        </animated.div>
      </Waypoint>
    </div>
  )
}