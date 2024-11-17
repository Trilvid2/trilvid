import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Digitalisation = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / digitalisation
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/digital.webp" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    digitalisation
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Digitalization is transforming the energy industry, and Oil Petroleum NS is at the forefront of this revolution. We leverage advanced technologies like AI, IoT, and data analytics to optimize operations, enhance efficiency, and improve decision-making processes. From predictive maintenance in refineries to real-time monitoring of pipelines, digital tools enable us to reduce costs, enhance safety, and lower emissions.</p>

                        <p>Digitalization also enhances customer experiences by providing seamless access to energy solutions and insights. As part of our strategy, we continuously invest in digital infrastructure to drive innovation, support sustainable operations, and future-proof our business in an increasingly connected world. Our focus on digitalization ensures we stay ahead of industry trends while delivering value to customers and stakeholders alike.</p>

                        <p>
                        In addition, we prioritize cybersecurity to safeguard our digital assets and operational technologies. By integrating robust security measures, we protect our data, infrastructure, and customer information from emerging threats in an increasingly digital landscape.
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

export default Digitalisation