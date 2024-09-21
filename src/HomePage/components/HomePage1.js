import React from 'react';
import './../Styling/HomePage1Style.css';

const HomePage = () => {
  return (
    <div className="container" id='section1'>
        <h2 className='section1-subheading' id='Novus2024'>NOVUS 2024</h2>
        <h1 className='section1-heading' id='Main-Heading-Landing'>TISB's Robotics Fest</h1>
        <h1 className='section1-heading' id='Main-Heading-Landing2'>With prizes upto</h1>
        <div className="text-container" id="s2-text-div">
          <h1 id="s2-headingl2-s1">4.5 </h1>
          <h1 id="s2-headingl2-s2">Lakhs!!</h1>
        </div>

        <a href='https://forms.office.com/r/PDGij0wEw4' target='blank'>
          <button className='primary-btn' id='register-button'>Register Now!</button>
        </a>
        {/* <button className='primary-btn' id='register-button'>Register Now!</button> */}
    </div>
  );
};

export default HomePage;