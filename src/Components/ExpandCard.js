import React from 'react'
import './ExpandCard.css';
import ExpandSlider from './ExpandSlider';

export default function ExpandCard() {
  return (
    <div className='expand-card-container'>
            <div className='expand-card-top-part'>
                <div className='expand-card-heading-part'>
                    <h2>content <span>library</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim.</p>
                </div>
                 <div className='expand-card-btn-d'><button>View All</button></div>
            </div>
              
           <ExpandSlider/>
    </div>
  )
}
