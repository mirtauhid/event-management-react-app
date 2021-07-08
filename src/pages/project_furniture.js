import React from 'react';
import '../components/Style.css';
import furniture_img_three from '../images/furniture/furniture_img_three.jpg';
import furniture_img_two from '../images/furniture/furniture_img_two.jpg';


const project_furniture = () => {
  return (
    <div style={{padding: '0px 15px'}} >
    <div style={{textAlign: 'center'}}>
      <h1  style={{margin: '50px auto', fontSize:'2rem'}} >TABLES & CHAIRS</h1>
      
      
      <div style={{margin: '50px auto'}} className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={furniture_img_two} alt="" className="w-7/12"/>
      
     
      <div style={{margin: '50px auto'}}  className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={furniture_img_three} alt="" className="w-9/12"/>
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
export default project_furniture;