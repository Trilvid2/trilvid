import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const InvaidPage = () => {
  return (
    <div className="alljobs">
        <Header />
        
        <div className='invalid'>
            <img src="/404.png" alt="" />
            <span>Sorry this URL has expired.</span>
        </div>

        <Footer />
    </div>
  )
}

export default InvaidPage