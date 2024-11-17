import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Integrating = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Integrating sustainability into our projects
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/s1.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Integrating sustainability into our projects
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        At Oil Petroleum NS, we take a comprehensive view of the impact of our activities, assessing them across the entire lifecycle of our projects and facilities. From planning and development to operation and decommissioning, we carefully consider environmental, social, and economic factors to ensure responsible and sustainable practices.</p>

                        <p>This approach allows us to identify potential challenges early, implement effective mitigation strategies, and optimize outcomes for communities and ecosystems. By integrating lifecycle thinking into our decision-making, we aim to minimize our footprint while maximizing the benefits of our operations.</p>

                        <p>
                        Through innovation and collaboration, we continuously seek ways to improve our processes, enhance resource efficiency, and support a sustainable energy future. At every stage, our focus remains on creating value while protecting the planet and the people we serve.
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

export default Integrating