import React from 'react';
import { Link } from 'react-router-dom';
import djService from '../images/dj-service.jpg';
import eventImg from '../images/event.jpg';
import rentals from '../images/rentals.jpg';
import './Style.css';



const Content = () => {
  return (
    <div  >
    <h1 className="text-5xl mt-10 text-center font-bold btn-color mb-16" id="services">Services</h1>
      <div className="lg:m-8 card">
        <div className=" site-container ">
          <div className="lg:flex lg:justify-center lg:items-center article-container gap-8">
            <div className=" article-card bg-white rounded-2xl">
              <div className="m-0 p-0 overflow-hidden">
                <img src={eventImg} alt="" className="max-w-full h-auto article-img" />
              </div>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline ">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold btn-color">EVENT PRODUCTION</h3>
                  <p className="text-base m-0 card-para text-center">Custom event design for any occasion, whether you are looking to go the extra mile with event flooring, custom light design or sound reinforcement, we will work with you to capture every detail.</p>
                </div>
                <div className="rounded-md text-center mt-10">
                <Link to='/event'  >
                  <a
                  
                    href="/event"
                    className="py-4 px-10 text-white bg-green-500	 rounded-md text-2xl hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    View More
        </a></Link>
                </div>
              </div>

            </div>
            <div className="article-card rounded-3xl">
              <div className="m-0 p-0 overflow-hidden">
                <img src={rentals} alt="" className="max-w-full h-auto article-img" />
              </div>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold btn-color">RENTALS</h3>
                  <p className="text-base m-0 card-para text-center">Custom event design for any occasion, whether you are looking to go the extra mile with event flooring, custom light design or sound reinforcement, we will work with you to capture every detail.</p>
                </div>
                <div className="rounded-md text-center mt-10">
                <Link to="/rentals">
                  <a
                    href="/rentals"
                    className="py-4 px-10 text-white bg-green-500	 rounded-md text-2xl hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    View More
        </a></Link>
                </div>
              </div>
            </div>
            <div className="article-card rounded-3xl">
              <div className="m-0 p-0 overflow-hidden">
                <img src={djService} alt="" className="max-w-full h-auto article-img" />
              </div>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold btn-color">DJ SERVICE</h3>
                  <p className="text-base m-0 card-para text-center">From our spectacular LED DJ Booths to our energized Emcees, we know how to get your event started the right way. </p>
                </div>
                <div className="rounded-md text-center mt-10">
                <Link to='/djservice'>
                  <a
                    href="/djservice"
                    className="py-4 px-10 text-white bg-green-500	 rounded-md text-2xl hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    View More
        </a></Link>
        
        
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
          </div>
  )
}

export default Content;
