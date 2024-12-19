import React from 'react'
import './FivePart.css';
import ScrollbarSection from './ScrollbarSection';

export default function FivePart() {
  return (
    <div className='five-part-container'>
         <div className='five-part-top-heading'><h2>lorem <span>ispum</span></h2></div>


         <div className='five-part-bottom-part'>
                       <ScrollbarSection/>

                       <div className='five-part-bottom-left-d'>
                           <div className='pic-1-five-part-right'><img src="/Images/pic-3.jpeg"/></div>
                           
                           <div className='left-side-part'>
                           <div className='five-part-bottom-left-btn'>
                              <h3>2k<sup>+</sup></h3>
                              <p>Course Holders</p>
                           </div>
                            <div className='pic-2-five-part'><img src="/Images/pic-1.jpeg"/></div>
                           </div>
                       </div>
         </div>
    </div>
  )
}
