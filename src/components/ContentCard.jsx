import React from 'react';
import djService from '../images/dj-service.jpg';
import eventImg from '../images/event.jpg';
import rentals from '../images/rentals.jpg';
import './ContentCard.css';

const ContentCard = () => {
    return (
        <div id="content" style={{marginTop:"100px"}} >
  <div className="blog-card">
    <div className="meta">
      <div
        className="photo"
        style={{backgroundImage: `url(${eventImg})`}}
      />
    </div>
    <div className="description">
      <h2>EVENT PRODUCTION</h2>
      <p>
        {" "}
        CUSTOM EVENT DESIGN FOR ANY OCCASION, WHETHER YOU ARE LOOKING TO GO THE EXTRA MILE WITH EVENT FLOORING, CUSTOM LIGHT DESIGN OR SOUND REINFORCEMENT, WE WILL WORK WITH YOU TO CAPTURE EVERY DETAIL.
      </p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div
        className="photo"
        style={{backgroundImage: `url(${rentals})`}}
      />

    </div>
    <div className="description">
      <h2>RENTALS</h2>
      <p>
      RENT ANYTHING YOU NEED FOR YOUR NEXT EVENT. FROM EVENT LIGHTING TO DANCE FLOORS, TABLES & CHAIRS AND MUCH MORE...
      </p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div className="blog-card">
    <div className="meta">
      <div
        className="photo"
        style={{backgroundImage: `url(${djService})`}}
      />
      
    </div>
    <div className="description">
      <h2>DJ SERVICE</h2>
      <p>
        {" "}
        FROM OUR SPECTACULAR LED DJ BOOTHS TO OUR ENERGIZED EMCEES, WE KNOW HOW TO GET YOUR EVENT STARTED THE RIGHT WAY.
      </p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>

        </div>
    );
};

export default ContentCard;