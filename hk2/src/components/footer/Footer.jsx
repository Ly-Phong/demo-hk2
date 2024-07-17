import React from 'react';
import Footerleft from './Footerleft';
import Footercenter from './Footercenter';
import Footerright from './Footerright';
import './style.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Footerleft />
      <Footercenter />
      <Footerright />
    </div>
  );
}

export default Footer;
