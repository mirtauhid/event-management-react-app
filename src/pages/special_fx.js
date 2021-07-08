import React from 'react';
import '../components/Style.css';
import bluster from '../images/bluster.jpg';
import canoon from '../images/canoon.jpg';
import led_fox from '../images/led_fox.jpg';
import wedding from '../images/weeding.jpg';

const special_fx = () => {
  return (
    
      <div style={{padding: '50px 10px'}} >
      <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20" style={{fontSize: '260%'}} >SPECIAL FX RENTALS</h1>
        <div style={{margin: '0 auto', maxWidth: '640px',display: 'flex', flexDirection: 'row',justifyContent: 'center',textAlign: 'center !important'}}>
        <h6 className="text-center tracking-wider pt-7 text-3xl" style={{fontSize: '1.22rem', fontWeight: '400', margin: '25px',textAlign:'justify', margin:'25px auto'}} >Special FX are a great way to add something extra to your <br /> event and create that stunning "WOW" factor. </h6>
        </div>
        <br />
        <br />
        <div className="grid--container">
          <div className="grid--image">
            <img src={wedding} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">SPARKULARS</h1>
            <div>
              <p>
              Used as Grand Entrance & More...
              </p>
            </div>
          </div>
        </div>
        <div className="grid--container">
          <div className="grid--image">
            <img src={led_fox} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">VIDEO WALL</h1>
            <div>
              <p>
              Create an LED Video Wall DJ 
              </p>
            </div>
          </div>
        </div>
        <div className="grid--container">
          <div className="grid--image">
            <img src={bluster} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">BLASTER</h1>
            <div>
              <p>
              A great add-on for Sweet 16s, Weddings, and other events.
              </p>
            </div>
          </div>
        </div>

        <div className="grid--container">
          <div className="grid--image">
            <img src={canoon} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">CANNON</h1>
            <div>
              <p>
              As seen at concerts and other live performances, C02 gives your guests a "wow" factor and is great for Grand Entrances.</p>
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
export default special_fx;
