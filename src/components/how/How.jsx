import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './how.css'

const How = () => {
    const navigate = useNavigate()
    
      const [newsTemplates, setNewsTemplates] = useState([
          {
            id:1,
            title:"Web and Mobile App Development",
            summary: "Crafting responsive, user-friendly web and mobile applications tailored to meet your business needs.",
            image:'/oilstore.jpg',
          },
          {
            id:2,
            title:"Big Data Analytics",
            summary: "Transforming complex data into actionable insights to drive informed decision-making and business growth.",
            image:'/oilexpo.jpg',
          },
          {
            id:3,
            title:"Blockchain Solutions",
            summary: "Providing secure and transparent blockchain-based systems for industries like finance, supply chain, and healthcare.",
            image:'/oilprod.jpg',
          },
          {
            id:4,
            title:"Digital Marketing and Branding",
            summary: "Enhancing your online presence with strategic marketing solutions, SEO, and impactful branding campaigns.",
            image:'/oiltank.jpg',
          },
          {
            id:5,
            title:"IT Consultancy and Support",
            summary: "Offering expert advice and ongoing support to ensure your IT systems align with your business goals.",
            image:'/oilrefine.jpg',
          },
          {
            id:6,
            title:"E-Learning Platforms",
            summary: 'Developing interactive and engaging digital education platforms for schools, organizations, and individual learners.',
            image:'/tanker.png',
          }
        ])
      
  return (
    <>
        <div className="why-choose-section whyPage">
            
        <div className="why-choose-us-text-container">
            
            <h1>Our<span className="underlined"> Services</span> </h1>
            
        </div>
        
                <div className="newsSection">
                    {
                        newsTemplates.map((newsTemplate) => (
                            
                    <div className="xard"  key={newsTemplate.id}>

                        {/* <div className="image">
                        <img src={newsTemplate.image} alt="file not found" />
                        </div> */}

                        <div className="contentxx">
        
                        <p>
                            <span className="titles">
                                {newsTemplate.title}
                            </span>
                            </p>
        
                            <div className="desc">
                                <p> 
                                {newsTemplate.summary}
                            </p>
                            </div>
                                    
                        </div>
                        </div>
                        ))
                        }
                    </div>


        </div>
    </>
  )
}

export default How