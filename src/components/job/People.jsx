import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const People = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / People
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/s4.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    People
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        At Oil Petroleum NS, we are committed to being a good neighbour in every location where we operate. We strive to contribute to the wellbeing of communities by fostering positive relationships and ensuring that our presence benefits those around us.</p>

                        <p>Our approach involves close collaboration with local communities to manage the social impacts of our business activities. We actively listen to and address concerns about our operations, ensuring transparency and open communication at every stage. By working together, we aim to build trust and mutual understanding that enhances our shared goals.</p>

                        <p>
                        Beyond mitigating impacts, we focus on creating opportunities that improve livelihoods and strengthen local economies. From employment and training initiatives to community development projects, we seek to make a meaningful and lasting difference.
                        </p>

                        <p>
                        At Oil Petroleum NS, being a good neighbour means not only respecting the places where we work but also leaving a positive legacy that supports sustainable growth and prosperity for all.</p>


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

export default People