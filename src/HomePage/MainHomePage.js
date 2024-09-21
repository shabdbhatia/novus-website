import React from 'react';
import LandingS1 from "./components/HomePage1";
import LandingS2 from "./components/HomePage2";
import LandingS3 from './components/HomePage3';
import LandingS4 from './components/HomePage4';
import LandingS5 from './components/HomePage5';
import LandingS6 from './components/HomePage6';
import LandingS7 from './components/HomePage7';
import LandingS8 from './components/HomePage8';

const Landing = () => {
  return (
    <div className="App">
      <div id="home">
        <LandingS1 />
      </div>
      
      <div id="about">
        <LandingS3 />
      </div>
      
      {/* <LandingS2 /> */}

      <div id="events">
        <LandingS4 />
      </div>
      <div id="rulebooks">
        <LandingS5 />
      </div>
      <div id="sponsors">
        <LandingS6 />
      </div>
      <div id="team">
        <LandingS8 />
      </div>
      <div id="contact">
        <LandingS7 />
      </div>
      
    </div>
  );
};

export default Landing;