import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div  style={{backgroundColor: '#0e1117', width: '100%'}}>
      <footer className="footer">
  <p>Questions? Call (917) 468 2276</p>
  <div className="footer-cols">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
    
    <ul>
      <li>
        <Link to="/event">Event</Link>
      </li>
      <li>
        <Link to="/rentals">Rentals</Link>
      </li>
      <li>
        <Link to="/djservice">DJ Services</Link>
      </li>
      <li>
        <Link to="/table">Table</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/project_furniture">Furniture</Link>
      </li>
      <li>
        <Link to="/special_fx">Special FX</Link>
      </li>
      <li>
        <Link to="/led_rentals">Led Rentals</Link>
      </li>
      <li>
        <Link to="/#contact">Support</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/">Facebook</Link>
      </li>
      <li>
        <Link to="/">Twitter</Link>
      </li>
      <li>
        <Link to="/">Instagram</Link>
      </li>
      <li>
        <Link to="/">LinkedIN</Link>
      </li>
    </ul>
  </div>
</footer>
    </div>

  );
};

export default Footer;