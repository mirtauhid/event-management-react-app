import React from 'react';
import chair_table from '../images/chair_table.jpg';
import furniture from '../images/FURNITURE.jpg';
import led_dance from '../images/led_dance.jpg';
import wedding from '../images/weeding.jpg';
import './rentals.css';

const rentals = () => {
  return (
    <div>
      <div >
        <div className="grid--container">
          <div className="grid--image" >
            <img src={chair_table} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title "> Table & Chair</h1>
            
            <button >Table & Chair</button>
          </div>
        </div>
      </div>
      <div >
        <div className="grid--container">
          <div className="grid--image" >
            <img src={wedding} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title "> Special FX</h1>
            
            <button >Special FX</button>
          </div>
        </div>
      </div>
      <div >
        <div className="grid--container">
          <div className="grid--image" >
            <img src={furniture} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">Event Furniture</h1>
            
            <button >Event Furniture</button>
          </div>
        </div>
      </div>
      <div >
        <div className="grid--container">
          <div className="grid--image" >
            <img src={led_dance} alt="chair_table"></img>
          </div>
          <div className="grid--content ">
            <h1 className="card--title ">LED Dance Cubes & More</h1>
            
            <button >Dance & More</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default rentals;
