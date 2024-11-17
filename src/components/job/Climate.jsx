import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Climate = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Our Cimate Goal
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/s2.webp" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Our Cimate Goal
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Oil Petroleum NS is committed to becoming a net-zero emissions energy business by 2050, reflecting our dedication to a sustainable and responsible energy future. This ambitious target aligns with global efforts to combat climate change, reduce greenhouse gas emissions, and transition to a cleaner, greener economy.</p>

                        <p>Achieving net-zero emissions involves rethinking how we operate and innovating across every aspect of our business. We are investing in advanced technologies such as carbon capture and storage, renewable energy integration, and hydrogen production. These initiatives not only help reduce our environmental impact but also position us as leaders in providing clean energy solutions to meet growing global demand.</p>

                        <p>
                        Our journey to net-zero is also about collaboration. We work closely with industry partners, governments, and communities to develop practical, scalable solutions that benefit everyone. By prioritizing sustainability, we aim to create shared value for our stakeholders while ensuring energy security for future generations.
                        </p>

                        <p>
                        At Oil Petroleum NS, our net-zero goal is more than a target—it’s a promise to power progress responsibly and contribute to a healthier, more sustainable planet.</p>


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

export default Climate