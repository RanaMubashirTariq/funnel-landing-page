import React , {useState} from 'react'
import './NavbarSection.css';

export default function NavbarSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="navbar-container">
                  <div className="logo-part">
                      <img src="/Images/logo.svg" alt="Logo" />
                  </div>
  
                      <button className="toggle-button" onClick={toggleMenu}>
                          <i className='fa fa-bars'></i>
                      </button>
  
  
  
                      <div className={`menu-part ${isMenuOpen ? 'show' : 'hide'}`}>
                          <ul>
                          <li>Reviews</li>
                          <li>Simple Process</li>
                          <li>Our Offer</li>
                          <li>Services</li>
                          </ul>
                      </div>
  
                              <div className="left-part">
                                  <button>Book a Call</button>
                              </div>
      </div>
  )
}
