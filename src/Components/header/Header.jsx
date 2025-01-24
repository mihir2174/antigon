import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Upper = () => {
  return (
    <div className='upper d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center justify-content-center gap-3 ms-5'>
        {/* <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faHome} style={{ color: 'white' }} aria-hidden />
          <div className='ms-2'>5th Ave, New York, NY 10018379</div>
        </div> */}
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} aria-hidden />
          <div className='ms-2'>+91-80-49908599</div>
        </div>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} aria-hidden />
          <div className='ms-2'>info@antigone.co.in</div>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center me-5'><a href='https://www.linkedin.com/company/antigone-solutions-private-limited'>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} aria-hidden /></a>
      </div>
    </div>
  );
}

export default Upper;
