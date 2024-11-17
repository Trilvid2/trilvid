import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Nature = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Nature
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/s3.webp" alt="file not found" />
                </div>
                
                <span>
                    <h3>
                    Nature
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        Respecting nature is integral to our Powering Progress strategy at Oil Petroleum NS. We understand the urgent global need to protect and enhance biodiversity, conserve freshwater resources, and use natural resources more efficiently. Our approach is rooted in recognizing the vital connection between nature and climate, as emphasized in frameworks like the UN Kunming-Montreal Global Biodiversity Framework of 2022 and key discussions at COP28 in 2023.</p>

                        <p>
                        Incorporating these principles into our business operations, we actively seek innovative ways to minimize environmental impact while ensuring sustainable energy production. By integrating biodiversity and resource conservation into our decision-making, we aim to balance energy development with the preservation of the ecosystems that sustain life.
                        </p>

                        <p>
                        Our commitment extends beyond compliance. We collaborate with international organizations, governments, and communities to implement practices that protect habitats, improve water management, and drive efficient resource use. Through these efforts, we contribute to a global movement that prioritizes the health of our planet while delivering energy solutions responsibly.</p>

                        <p>
                        At Oil Petroleum NS, respecting nature is more than a responsibility—it’s a promise to future generations. By integrating environmental stewardship into our Powering Progress strategy, we aim to create a legacy of sustainability, resilience, and harmony between energy development and the natural world.</p>

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

export default Nature