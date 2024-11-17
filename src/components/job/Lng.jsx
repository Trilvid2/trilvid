import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Lng = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Liquefied Natural Gas
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/ship.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Liquefied Natural Gas
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Discover how Oil Petroleum NS is advancing clean energy with world-class LNG solutions, reducing emissions, and supporting a sustainable energy transition globally.</p>

                        <p>Oil Petroleum NS is at the forefront of clean energy innovation, leveraging world-class liquefied natural gas (LNG) solutions to drive a global shift toward sustainability. By providing efficient, low-carbon energy alternatives, we are playing a vital role in reducing emissions and addressing the challenges of climate change.</p>

                        <p>
                        Our LNG solutions are designed to meet the growing demand for cleaner energy across industries and communities, ensuring reliability without compromising environmental goals. As a leader in the energy transition, we are committed to supporting a sustainable future that balances economic growth with environmental responsibility.
                        </p>

                        <p>
                        Join Oil Petroleum NS in shaping a cleaner, greener world powered by innovative LNG technologies and a shared commitment to global sustainability.
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

export default Lng