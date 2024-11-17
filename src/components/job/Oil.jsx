import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Oil = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Oil and Natural Gas
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/oil&gas.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Oil and Natural Gas
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                As a leader in the oil and natural gas sector, Oil Petroleum NS plays a crucial role in meeting the world’s growing energy demand. Our operations focus on responsibly extracting, processing, and delivering high-quality oil and gas products to global markets.</p>

                        <p>
                            We are committed to reducing the carbon footprint of our operations by investing in cleaner extraction methods and technologies, such as carbon capture and storage. Natural gas, a vital component of our portfolio, serves as a cleaner alternative to coal and supports the energy transition by providing reliable and flexible power generation.
                         </p>

                        <p>
                        Moreover, we are dedicated to ensuring the responsible management of natural resources. This includes adopting advanced methods to minimize waste, protect ecosystems, and reduce emissions throughout the production and supply chain. By aligning our operations with environmental best practices, Oil Petroleum NS continues to demonstrate its leadership in sustainable energy production.
                        </p>

                    </span>
                </div>
                </section>
                
                

            </div>

<div className="spaceme"></div>


            <Footer />
            </div>
        }    
</div>
  )
}

export default Oil