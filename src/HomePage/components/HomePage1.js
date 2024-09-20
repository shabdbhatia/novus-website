import React from 'react';
import './../Styling/HomePage1Style.css';

const HomePage = () => {
  return (
    <div className="container" id='section1'>
        <h2 className='section1-subheading' id='Novus2024'>NOVUS 2024</h2>
        <h1 className='section1-heading' id='Main-Heading-Landing'>INDIA'S LARGEST</h1>
        <h1 className='section1-heading' id='Main-Heading-Landing2'>STUDENT-LED</h1>
        <h1 className='section1-heading' id='Main-Heading-Landing3'>ROBOTICS FEST</h1>
        <button className='primary-btn' id='register-button'>Register Now!</button>
    </div>
  );
};

export default HomePage;