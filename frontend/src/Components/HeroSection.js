import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
      
    <div className='hero-container'>
      {/* <video src='/frontend/src/Components/Images/dayfly.mp4' autoPlay loop muted /> */}
      <h1>BEST DRINKS IN TOWN</h1>
      <p>What are you waiting for?</p>
      <p>Order Your Slushies Today!</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;