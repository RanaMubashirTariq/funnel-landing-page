import React from 'react'
import './DigitalComponentSection.css';

export default function DigitalComponentSection() {
  return (
    <div className='digital-component-container'>
              <div className='digital-component-top-d'>
                        <h2>digital<span>courses</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniam, quis.</p>
              </div>

              {/* part-2 for card and pic */}

              <div className='digital-component-bottom-d'>
                       <div className='bottom-right-d'>
                              <div className='card-1-d'>
                                    <div className='right-pic-d'><img src="/Images/instagramMastary.svg"/></div>
                                     <div className='card-content-d'>
                                        <div className='inner-card-conent-d'>
                                        <h2>Instagram Mastery</h2>
                                        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                        </div>
                                        <div className='right-d-bottom'><button>Buy</button></div>
                                     </div>
                              </div>
                                    {/* card-2 */}
                              <div className='card-1-d'>
                                    <div className='right-pic-d'><img src="/Images/instagramMastary.svg"/></div>
                                     <div className='card-content-d'>
                                        <div className='inner-card-conent-d'>
                                        <h2>Instagram Mastery</h2>
                                        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                        </div>
                                        <div className='right-d-bottom'><button>Buy</button></div>
                                     </div>
                              </div>
                       </div>


                       {/* bottom-left-part */}
                       <div className='bottom-left-d'><img src="/Images/doubleRobot-pic.svg"/></div>
              </div>
    </div>
  )
}
