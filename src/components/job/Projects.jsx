import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Projects = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / portfolio and major projects
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/mship.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                        Portfolio and Major Projects
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Oil Petroleum NS boasts a diverse portfolio that spans oil, natural gas, LNG, and renewable energy solutions. Our strategic investments in major projects around the globe ensure a balanced approach to meeting today’s energy needs while preparing for a low-carbon future.
                        </p>

                        <p>From large-scale oilfields in Kazakhstan to innovative LNG facilities in Europe, our projects are designed with sustainability and efficiency in mind. By integrating cutting-edge technologies and best practices, we deliver energy solutions that align with global sustainability goals. Our major projects focus on enhancing resource recovery, minimizing environmental impact, and supporting the economic growth of host communities.</p>

                        <p>
                        In our ongoing commitment to innovation, we are exploring partnerships and joint ventures that expand our portfolio into emerging markets. These collaborations allow us to accelerate the development of renewable energy projects, ensuring a smoother transition to sustainable energy while meeting growing global demand.
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

export default Projects