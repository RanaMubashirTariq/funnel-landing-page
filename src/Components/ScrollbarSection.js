import React from 'react'
import { useRef,useEffect } from 'react';
import './ScrollbarSection.css';

export default function ScrollbarSection() {


    const scrollbarRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const container = scrollbarRef.current;
        if (container) {
          const scrollTop = container.scrollTop;
          const scrollHeight = container.scrollHeight - container.clientHeight;
          const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
          container.style.setProperty(
            '--scrollbar-color',
            `rgba(15, 111, 255, ${0.5 + scrollPercentage / 200})`
          );
        }
      };
  
      const container = scrollbarRef.current;
      container.addEventListener('scroll', handleScroll);
  
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
           <div className='part-7-main-d'>

<div className='scrollbar-container'     ref={scrollbarRef}
        style={{
          '--scrollbar-color': 'rgba(15, 111, 255, 0.5)',
        }}>
              <div className='inner-content-d'>
                      <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>instagram mastery</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>

                       {/*  part-2 */}

                       <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>Twitter mastery</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>


                      {/*  part-3 */}

                      <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>Marketing COntent</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>



                      {/*  part-4 */}

                      <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>facebook mastery</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>

                       {/*  part-5 */}

                       
                      <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>Linkdin mastery</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>

                      {/* part-6 */}

                      
                      <div className='part-1-content-d'>
                              <div className='part-1-inner-content-d'>
                                 <h2>Discord mastery</h2>
                                 <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                              </div>
                              <div className='part-1-content-btn'><button>Purchase Now</button></div>
                      </div>

              </div>
    </div>

           </div>
  )
}
