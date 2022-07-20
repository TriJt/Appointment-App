import React from 'react'
import FooterBottom from './footer/Footer'; 
import FooterTop from './branch/FooterTop'
import Branch from './branch/Branch'
import Calendar from './calendar/Calendar';
const Footer = () => {
  return (
    <div>
      <Calendar/>
      <Branch/>
      <FooterTop/>
      <FooterBottom/>
      </div>
  )
}

export default Footer