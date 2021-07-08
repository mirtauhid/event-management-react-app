import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About2 from './components/About2';
import Contact from './components/Contact';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Home from './pages';
import DjService from './pages/djService';
import Event from './pages/event';
import led_rentals from './pages/led_rentals';
import Maplocation from './pages/Maplocation';
import project_furniture from './pages/project_furniture';
import Rentals from './pages/rentals';
import special_fx from './pages/special_fx';
import table from './pages/table';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <div>
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
      <Router>
      <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}>
            <Hero />
            <ContentCard></ContentCard>
            <About2 />
            
            <Contact></Contact>
            <Maplocation></Maplocation>
            </Route>
          <Route path='/event' exact component={Event} />
          <Route path='/rentals' exact component={Rentals} />
          <Route path='/djservice' exact component={DjService} />
          <Route path='/table' exact component={table} />
          <Route path='/project_furniture' exact component={project_furniture} />
          <Route path='/special_fx' exact component={special_fx} />
          <Route path='/led_rentals' exact component={led_rentals} />
        </Switch>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;

