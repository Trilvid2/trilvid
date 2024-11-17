import React, {useEffect, useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const JobDetails = ({details, closepage }) => {

  
    const [jobPage, setJobPage] = useState(true)
      

  return (
    <div>
        {
            jobPage &&
            <div className="onejob">
            <Header />

            <div className="spacex">
                <span>Home</span> / article / Our approach to sustainability
            </div>

            <div className="containDetails">

                <div className="imagediv">
                    <img src="/s1.avif" alt="file not found" />
                </div>

                <span>
                    <h3>
                    Our approach to sustainability
                    </h3>
                </span>

                <section>
                <div className='rowme'>
                    <span>
                        <p>
                        At Oil Petroleum NS, Powering Progress defines our commitment to becoming a net-zero emissions energy business by 2050. This strategy represents a bold step forward, integrating sustainability at the core of our operations while delivering value to our shareholders, customers, and society. In a world increasingly focused on reducing carbon footprints, we recognize the critical role we play in shaping the future of energy.</p>

                        <p>Our approach is built on a foundation of innovation and responsibility. Through investment in low-carbon technologies such as carbon capture, hydrogen production, and renewable energy solutions, we are actively reducing emissions across our operations and supply chains. These advancements not only help us meet our net-zero goals but also enable us to provide cleaner energy solutions to our global customers. By aligning our business strategy with sustainability, we ensure long-term growth while addressing the pressing challenges of climate change.</p>

                        <p>
                        Powering Progress is about more than reducing emissions—it’s about creating shared value for all our stakeholders. We aim to deliver high-quality, eco-friendly energy products that empower industries, drive economic growth, and support the communities we serve. Through transparent collaboration with partners, governments, and organizations, we are building a more resilient energy system that benefits everyone.
                        </p>

                        <p>
                        Our strategy also acknowledges the importance of societal impact. As we work toward net-zero, we are committed to ensuring that the energy transition is fair and inclusive. This involves supporting our workforce with the skills and opportunities needed for the future of energy, while also promoting economic growth in the regions where we operate.</p>

                        <p>
                        With Powering Progress, Oil Petroleum NS is leading the way to a sustainable energy future. By integrating innovation, responsibility, and collaboration, we are not just powering the world today but laying the foundation for a cleaner, brighter tomorrow. Learn more about our approach and join us in shaping the future of energy.</p>


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

export default JobDetails