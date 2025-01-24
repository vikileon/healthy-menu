
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
       <div className='footer-section-one'>
          <div className='footer-logo-container'>
            <img src='./logo.png' alt="logo" />
          </div>
          <div className='footer-icons'>
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
       </div>
       <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>About us</span>
            <span>Help</span>
        </div>
        <div className='footer-section-columns'>
            <span>Share</span>
            <span>Contact</span>
        </div>
        <div className='footer-section-columns'>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
        </div>
       </div>
    </div>
  )
}
