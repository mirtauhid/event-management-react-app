import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="showcase">
  <div className="showcase-top">
  </div>
  <div className="showcase-content">
    <h1>      YOUR NEXT EVENT STARTS HERE.
</h1>
    <a href="#contact" style={{backgroundColor: '#00ac5f'}} className="btn btn-xl">
      Request a Quote <i className="fas fa-chevron-right btn-icon" />
    </a>
  </div>
</header>

  );
};

export default Hero;