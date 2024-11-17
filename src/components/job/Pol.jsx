import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './job.css'


const Pol = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Advocacy and Political Activity
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/pol.avif" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Advocacy and Political Activity
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Oil Petroleum NS actively engages in advocacy and political initiatives to support policies that drive sustainable energy development and address global energy challenges. By collaborating with governments, industry leaders, and regulatory bodies, we aim to influence legislation that fosters innovation and accelerates the energy transition. Our advocacy efforts focus on promoting low-carbon technologies, ensuring energy security, and creating equitable opportunities for all stakeholders in the energy sector.</p>

                        <p>We are committed to transparency and ethical conduct in all our political activities, ensuring alignment with international standards and corporate responsibility. By participating in constructive dialogue, we aim to shape a policy environment that benefits society while supporting our business objectives. Through these efforts, we strive to balance energy development with social and environmental priorities</p>

                        <p>
                        Our advocacy extends to educating the public and stakeholders about the importance of sustainable practices. We actively support community awareness campaigns and educational programs to build a shared understanding of the global energy transition. By encouraging collaboration and informed decision-making, we aim to create a more resilient and sustainable energy future.
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

export default Pol