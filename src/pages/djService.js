import React from 'react';
import mitzvah from '../images/mitzvah.jpg';
import sweet from '../images/sweet.jpg';
import wedding from '../images/weeding.jpg';
import './djService.css';

const rentals = () => {
  return (
    <div style={{padding: '50px 10px'}} >
      <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20" style={{fontSize: '260%'}} >DJ SERVICES</h1>
        <div style={{margin: '0 auto', maxWidth: '640px',display: 'flex', flexDirection: 'row',justifyContent: 'center',textAlign: 'center !important'}}>
        <h6 className="text-center tracking-wider pt-7 text-3xl" style={{fontSize: '1.22rem', fontWeight: '400', margin: '25px',textAlign:'justify', margin:'25px auto'}} >LOUD Entertainment provides a top notch DJs and specializes in events and know just what it takes to get your crowd going. Whether it is their favorite song or the Emcees outgoing  personality your guests will remember your event for years  to come... "Who did you book for your wedding?"</h6>
        </div>
        <br />
        <br />
        <div className="grid--container">
          <div className="grid--image">
            <img src={wedding} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title "> DJ SERVICES</h1>
            <div>
              <p>
              LOUD Entertainment provides a top notch DJs and specializes in events  and know just what it takes to get your crowd going.  Whether it is their favorite song or the Emcees outgoing  personality your guests will remember your event for years to come... "Who did you book for your wedding?"
              </p>
            </div>
          </div>
        </div>
        <div className="grid--container">
          <div className="grid--image">
            <img src={sweet} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">SWEET 16</h1>
            <div>
              <p>
              We will create your dream Sweet Sixteen from start to finish, from our lighting to the grand entrance we will make sure your guests will leave knowing you had the most epic sweet sixteen yet.
              </p>
            </div>
          </div>
        </div>
        <div className="grid--container">
          <div className="grid--image">
            <img src={mitzvah} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">MITZVAH</h1>
            <div>
              <p>
              Setting a theme is key. We start with your favorite hobby or sports team and go from there. We will design a Mitzvah that leaves you feeling like a celebrity throughout the entire night.
              </p>
            </div>
          </div>
        </div>

      <div className="pt-10">
        <h1 className="text-center font-bold text-4xl tracking-widest antialiased uppercase font-black pt-8">Planning a corporate event?</h1>
        <h6 style={{fontSize:'1.2rem', margin: '15px auto'}} className="text-center tracking-wider pt-5 text-3xl">Chat with an event specialist now and let us create your event step by step.</h6>
        <div className="rounded-md text-center mt-10">
        <a
          href="/#contact"
          className="py-6 px-10 text-white bg-green-500	 rounded-md text-2xl hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
          style={{fontSize: '1.5rem'}}
        >
        Contact us
        </a>
      </div>
      </div>
        </div>
    
  )
}
export default rentals;
