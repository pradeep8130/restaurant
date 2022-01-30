import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app __wrapper_info'>
      <div style={{marginBottom: '1rem'}}>
        <SubHeading title="Contact" />
      </div>
      <h1 class="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p__cormorant' style={{ color: '#dcca87', margin: '2rem'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type="button" class="custom__button" style={{ marginTop: '2rem'}}>Visit Us</button>

      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />
    </div>
    FindUs
  </div>
);

export default FindUs;
