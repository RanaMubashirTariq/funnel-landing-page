import React from 'react';
import './MainSection.css';
import videoFile from '../Videos/animals.mp4';
import Marquee from './Marquee';

export default function MainSection() {
  return (
    <>
    <div className='main-section-container'>
          <div className='main-section-top-part'>
             <div className='main-section-content-d'>
                          <div className='part1'>
                             <p>👋 Hello! We are experts!</p>
                          </div>
                          <h2>your <span>digital marketing</span> experts</h2>
                          <p>Month to Month Payments, No Setup Fee, Pre-Trained Virtual Assistants</p>
             </div>
             <div className='second-part'>
                        <div className='right-btn'><button>Book a Call</button></div>
                        <div className='left-btn-d'><button>Learn More</button></div>
                       </div>
          </div>

           <div className='video-d'><video src={videoFile }typeof='video/mp4' controls></video></div>
                
               
    </div>
    <Marquee/>
    </>
  )
}
