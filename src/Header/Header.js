import React from 'react';
import './HeaderStyle.css';

const Header = () => {
  return (
    <header id='navbar'>
      <div class="logo" id='navbar-logo-div'>
        <img src="/logo.png" alt="Novus Logo" />
      </div>
      <nav class='header-links' id='navbar-links-div'>
        <ul>
          <li><a href="#sd">About</a></li>
          <li><a href="#sd">Events</a></li>
          <li><a href="#sd">Rule Books</a></li>
          <li><a href="#sd">Sponsor</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;