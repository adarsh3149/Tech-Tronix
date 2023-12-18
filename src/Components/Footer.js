import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (

   <>
   
   
<footer class="footer-distributed">

      <div class="footer-left">

      <Link to="home" smooth={true} duration={1000} offset={-200}  style={{textDecoration:"none",cursor:"none"}}><a href='#home'/>
        <svg className='svg' fill='#f1f1f1' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><defs><style>.cls-1</style></defs><path class="cls-1" d="M212.2,690.3q0-165,.1-330V255.8c0-11.4,0-11.4-11.7-11.4H44.8c-10.1,0-10.1,0-10.1-10.3,0-23.7.1-47.4-.1-71-.1-6,1.9-8,8-8H293.7c7.6,0,7.8.3,7.8,9.9q0,242.3.1,484.4v40.8Z"/><path class="cls-1" d="M312.2,690.3q0-93,.1-186.1V165.7c0-10.5,0-10.5,10.4-10.5H569.3c9.8,0,9.8,0,9.8,9.8v69.1c0,10.3,0,10.3-10.1,10.3-53,0-106,.1-159.1-.1-6.1,0-8.5,1.8-8.5,8.2q.3,218.8.2,437.8Z"/></svg>
        </Link>

        <p class="footer-company-name">TechTronix © 2024</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>

        </div>

      </div>

    </footer>
   </> 
  )
}

export default Footer