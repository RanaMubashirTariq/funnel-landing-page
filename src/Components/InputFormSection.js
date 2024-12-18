import React from 'react'
import './InputFormSection.css';

export default function InputFormSection() {
  return (
    <div className='card-payment-container'>
             <div className='form-right-part'>
                   <div className='form-part'>
                          <div className='input-form-part'>


                                 <div className='input-d-section'>
                                      <label htmlFor="Name">Name on Card</label><br/>
                                      <input type="text" placeholder='Enter Name'  className='input-d'/>
                                 </div>


                                      <div className='input-d-section'>
                                            <label htmlFor="Name">Card Number</label><br/>
                                            <input type="text" placeholder='Enter Name'  className='input-d'/>
                                      </div>


                                            <div className='two-input-d'>
                                                          <div className='input-d-section d-1'>
                                                          <label htmlFor="Name">Expiry Date</label><br/>
                                                          <input type="tex" placeholder='Enter Date'  className='input-d'/>
                                                    </div>
                                                          <div className='input-d-section d-1'>
                                                                <label htmlFor="Name">CVC</label><br/>
                                                                <input type="text" placeholder='Enter cvc'  className='input-d'/>
                                                          </div>
                                            </div>


                                                     <div className='input-d-section'>
                                                          <label htmlFor="Name">Country</label><br/>
                                                          <select>
                                                               <option>Pakistan</option>
                                                               <option>India</option>
                                                               <option>UK</option>
                                                               <option>Saudi Arbia</option>
                                                               <option>Dubai</option>
                                                               <option>Bangladash</option>
                                                               <option>Nipal</option>
                                                          </select>
                                                    </div>

                                                     
                                                      <div className='input-d-section'>
                                                      <label htmlFor="Name">Zip</label><br/>
                                                      <input type="text" placeholder='Enter Zip'  className='input-d'/>
                                                      </div>      
                          </div>
                           <div className='form-btn'><button>Next</button></div>
                   </div>
             </div>


              <div className='form-left-d'><img src="/Images/card-pic.svg" alt="" /></div>
    </div> 
  )
}
