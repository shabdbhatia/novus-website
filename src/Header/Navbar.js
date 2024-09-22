import React, { useState } from 'react';
import './Navbar.css'; // Assuming you're using a separate CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          className="logo"
          id="novus-logo"
          src={require('./../Resources/NovusLogoMain.png')}
          alt="Novus-Logo"
        />
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('challenges')}>Challenges</a>
        <a onClick={() => scrollToSection('rulebooks')}>Rulebooks</a>
        <a onClick={() => scrollToSection('sponsors')}>Sponsors</a>
        {/* <a href="#team" onClick={() => scrollToSection('team')}>Team</a> */}
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        {/* Display hamburger when menu is closed, close button when open */}
        {isOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;