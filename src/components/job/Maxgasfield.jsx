import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { IoIosPin } from "react-icons/io";
import { MdClose } from 'react-icons/md';
import emailjs from 'emailjs-com';


const Maxgasfield = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Maximizing Imashevskoye Gas Field
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/field.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Maximizing Imashevskoye Gas Field
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        A groundbreaking project set to boost gas recovery, fueling Kazakhstan's energy needs more efficiently.</p>

                        <p>Oil Petroleum NS is spearheading a groundbreaking project designed to enhance gas recovery efficiency, ensuring a reliable and sustainable energy supply for Kazakhstan. By leveraging advanced technologies and innovative practices, this initiative aims to maximize resource utilization while minimizing environmental impact.</p>

                        <p>
                        This project represents a significant step forward in meeting Kazakhstan's growing energy demands with improved efficiency and sustainability. It underscores our commitment to driving progress in the energy sector, balancing operational excellence with responsible energy production.
                        </p>

                        <p>
                        Through initiatives like this, Oil Petroleum NS continues to shape a future where energy needs are met with innovation, efficiency, and care for the environment.</p>


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

export default Maxgasfield