import React from 'react'

import {
    BrowserRouter,
  } from "react-router-dom";
 

  
import Header from './Header'
import Footer from './Footer'
import Routess from '../routes/Routes'

const Layout = () => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <div className=''>
                <div className="main">
                    <Routess />
                </div>
            </div>
            <Footer />
        </div>
      </BrowserRouter>

      
  )
}

export default Layout