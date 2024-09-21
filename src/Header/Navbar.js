import React, { useState } from 'react';
import './Navbar.css'; // Assuming you're using a separate CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
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
        <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#events" onClick={() => scrollToSection('events')}>Events</a>
        <a href="#rules" onClick={() => scrollToSection('rulebooks')}>Rulebooks</a>
        <a href="#sponsors" onClick={() => scrollToSection('sponsors')}>Sponsors</a>
        {/* <a href="#team" onClick={() => scrollToSection('team')}>Team</a> */}
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
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