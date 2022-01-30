import React from 'react';

import './Newsletter.css';
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Newsletter = () => (
  <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
      <div style={{marginBottom: '1rem'}}>
        <SubHeading title="Newsletter" />
      </div>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
       <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" class="custom__button">Subscribe</button></div>
  </div>
);

export default Newsletter;
