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
      <div id="home" class="virtualPadding"></div>
      <LandingS1 />

      <div id="about" class="virtualPadding"></div>
      <LandingS3 />

      <div id="events" class="virtualPadding"></div>
      <LandingS4 />

      <div id="rulebooks" class="virtualPadding"></div>
      <LandingS5 />

      <div id="sponsors" class="virtualPadding"></div>
      <LandingS6 />

      {/* <div id="team" class="virtualPadding"></div> */}
      <div id="contact" class="virtualPadding"></div>
      <LandingS8 />

      <LandingS7 />
    </div>
  );
};

export default Landing;