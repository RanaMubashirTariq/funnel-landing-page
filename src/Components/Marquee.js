import React from 'react'
import'./Marquee.css';

export default function Marquee() {
  return (
    <div className='marquee-container'>
           <div className='maquee-1'>
              <marquee direction='left' scrollamount='15px'>
                  <ul>
                  <li>INSTAGRAM COURSES</li>
                     <li><img src='/Images/plus-icon.svg'></img></li>
                     <li>content libRARY</li>
                     <li> <img src='/Images/plus-icon.svg'></img></li>
                     <li>Digital academy</li>
                     <li> <img src='/Images/plus-icon.svg'></img></li>
                     <li>PRICING</li>
                  </ul>
              </marquee>
           </div>
           <div className='maquee-2'>
              <marquee direction='left' scrollamount='15px'>
                  <ul>
                  <li>INSTAGRAM COURSES</li>
                     <li><img src='/Images/plus-icon.svg'></img></li>
                     <li>content libRARY</li>
                     <li> <img src='/Images/plus-icon.svg'></img></li>
                     <li>Digital academy</li>
                     <li> <img src='/Images/plus-icon.svg'></img></li>
                     <li>PRICING</li>
                  </ul>
              </marquee>
           </div>
    </div>
  )
}
