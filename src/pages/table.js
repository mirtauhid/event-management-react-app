import React from 'react';
import img_chair_five from '../images/table_chair/img_chair_five.png';
import img_chair_four from '../images/table_chair/img_chair_four.png';
import img_chair_one from '../images/table_chair/img_chair_one.png';
import img_chair_six from '../images/table_chair/img_chair_six.png';
import img_chair_three from '../images/table_chair/img_chair_three.png';
import img_chair_two from '../images/table_chair/img_chair_two.png';
import './table.css';

const table = () => {
  return (
    <div>
    <div style={{textAlign: 'center'}}>
      <h1  style={{margin: '50px auto', fontSize:'2rem'}} >TABLES & CHAIRS</h1>
      <div className="mt-20 lg:grid ml-24 lg:grid-cols-3 gap-4">
      <div className="group ">
      <img src={img_chair_one} alt="" className="w-9/12"/>
      </div>
      
      <div className="group ">
      <img src={img_chair_two} alt="" className="w-7/12"/>
      
      </div>
      <div className="group ">
      <img src={img_chair_four} alt="" className="w-9/12"/>
      </div>
      </div>
      <div className="mt-20 lg:grid ml-24 lg:grid-cols-3 gap-4">
      <div className="group ">
      <img src={img_chair_three} alt="" className="w-9/12"/>
      </div>
      <div className="group ">
      <img src={img_chair_five} alt="" className="w-9/12"/>

      </div>
      <div className="group ">
      <img src={img_chair_six} alt="" className="w-9/12"/>

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
export default table;