import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer-d'>
    <div className='footer-sub-info-d'>
      <div className='sub-info-right-d'>
         <div className='sub-info--pic'><img src="/Images/logo.svg"/></div>
         <div className='sub-info-paragraph'><h3>Month to Month Payments, No Setup Fee, Pre-Trained Virtual Assistants</h3></div>
      </div>

      {/* part-2 for left side */}
      <div className='footer-sub-description-d'>
             <div className='footer-sub-description-d-1'>
                 <h3>Links</h3>
                 <div className='footer-sub-description-d-1-para'>
                     <p>Looker Reports</p>
                     <p>Case Studies</p>
                     <p>Blog</p>
                 </div>
             </div>

             <div className='footer-sub-description-d-1'>
                 <h3>Company</h3>
                 <div className='footer-sub-description-d-1-para'>
                     <p>Services</p>
                     <p>Resource</p>
                     <p>About</p>
                     <p>Contact</p>
                 </div>
             </div>

             <div className='footer-sub-description-d-3'>
             <div className='footer-sub-description-d-3-para'>
                     <div className='para-1'><p>Skainet Academy address goes here</p></div>
                     <p>Tel: +44 000 000000</p>
                     <p>team@skainetacademy.com</p>
                 </div>
             </div>
      </div>
    </div>

   <div className='line'><hr/></div>

  <div className='footer-last-part-d'>
        <div className='footer-last-right-part'><p>Copyright 2024 © Skainet Academy</p></div>

        <div className='footer-last-left-part'>
         <p>Insta</p>
         <img src="/Images/dot-icon.svg"/>
         <p>FaceBook</p>
         <img src="/Images/dot-icon.svg"/>
         <p>Twitter</p>
         <img src="/Images/dot-icon.svg"/>
         <p>LinkedIn</p>
         <img src="/Images/dot-icon.svg"/>
         <p>Discord</p>
        </div>
  </div>
       
</div>
  )
}
