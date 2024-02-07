import React from 'react';
import Introimage from '../../assets/Introimg.png';
import play from '../../assets/play-button.png';

import './index.css';

const Intro = () => {
  return (
    <div className="container1">
      <div className="left-part">
        <h1>
          Empowering the Next Generation
          <br />
          of Software And Web-app
          <br />
          Development
        </h1>
        <br />
        <p>
          Development agency specialized in delivering world-class
          <br />
          solutions for the web & mobile through mature & emerging
          <br />
          technology.
        </p>
        <br />
        <div className="people">
          <div>
            <ul className="circles-part">
              <li className="circle"></li>
              <li className="circle"></li>
              <li className="circle"></li>
              <li className="circle circle-blue" >
                <span className="circle-text">1.8k+</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="people-text">
              People bought our services today.
            </h3>
          </div>
        </div>
        <br />
        <div className="button-video">
          <button className="proposal">Get a Proposal</button>
          <div className="play-video">
            <img className='playbutton' src={play} alt="not found"/>
            <p className='video-text'>Watch Our Intro</p>
          </div>
        </div>
        <br />
        <br />
        <div className="explore-part">
          <div className='achievements'>
            <h1 className="orange-text">200+</h1>
            <p>Projects Complete</p>
          </div>
          <div className='achievements'>
            <h1 className="orange-text">80+</h1>
            <p>Active Customers</p>
          </div>
          <div className='achievements'>
            <h1 className="orange-text">24/7</h1>
            <p>Customer Support</p>
          </div>
          <div className="explore-text">
            <a href='#'>Explore More</a>
          </div>
        </div>
      </div>
      <div className="right-part">
        <img 
        className="rightimage"
        src={Introimage} 
        alt='not found' />
      </div>
    </div>
  );
}

export default Intro;
