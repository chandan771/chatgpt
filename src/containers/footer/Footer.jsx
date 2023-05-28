import React from 'react'
import './foot.css'
import gpt3Logo from '../../assets/logo-wine.svg';



const Footer = () => {
  return (
    <div className='footer section-padding'>
       <div className='footer-heading'>
         <h1 className='gradient__text'>Do you want to step in to the future before others.</h1>
       </div>

       <div className='footer-btn'>
        <p>Request Early Access</p>
       </div>

       <div className='footer-links'>
         <div className='logo'>
           <img src={gpt3Logo} alt='logo' />
           <p>Green Wood K12 182 DK Azerbaijan, <br /> All Rights Reserved</p>
         </div>

          <div className='links-div'>
             <h4>Links</h4>
             <p>Promoters</p>
             <p>Social Media</p>
             <p>Organizers</p>
             <p>Contact</p>
          </div>

          <div className='links-div'>
             <h4>Company</h4>
             <p>Terms & Conditions</p>
             <p>Privacy Policy</p>
             <p>Services</p>
          </div>

          <div className='links-div'>
             <h4>Get in touch</h4>
             <p>Green Wood K12 182 DK Azerbaijan</p>
             <p>+21 045 5813749531</p>
             <p>infoknow@whyme.to</p>
          </div>
       </div>
       <div className='copyright'>
         <p>© 2023 Caltech AI. All Rights Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
