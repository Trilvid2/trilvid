import { React, useState } from 'react'
import './services.css'
import { useNavigate, Link } from 'react-router-dom'
import { PiTruckTrailer, PiHandshake } from "react-icons/pi";
import { GiOilPump } from "react-icons/gi";

import { MdOutlineCloudSync, MdComputer } from "react-icons/md";
import { FaMixcloud } from "react-icons/fa";


const Services = () => {
  const navigate = useNavigate()
  
    const [newsTemplates, setNewsTemplates] = useState([
        {
          id:1,
          title:"Custom Software Development",
          summary: "Tailored software solutions designed to meet the unique needs of your business, enhancing efficiency and driving growth.",
          // image:'/ship.avif',
          image: <MdComputer />,
          url: 'Liquefied_Natural_Gas'
        },
        {
          id:2,
          title:"AI and Automation Solutions",
          summary: "Leveraging the power of artificial intelligence to streamline operations, boost productivity, and deliver smarter business outcomes.",
          // image:'/field.avif',
          image: <MdOutlineCloudSync />,
          url: 'gas_field'
        },
        {
          id:3,
          title:"Cloud Integration and Management",
          summary: "Secure and scalable cloud solutions that enable seamless integration, optimized performance, and robust data management.",
          // image:'/ceo.avif',
          image: <FaMixcloud />,
          url: 'energy'
        },
      ])
    
    
      return (
        <div className='investmentPagex'>    
            
            <div className="why-choose-section">
        
                <div className="newsSectionx">
                    {
                        newsTemplates.map((newsTemplate) => (
                            
                    <div className="xcard"  key={newsTemplate.id}>
                      <br />
                        {/* <div className="cimage">
                        <img src={newsTemplate.image} alt="file not found" />
                        </div> */}
                        
                        <i>{newsTemplate.image}</i>
                        <div className="contentx">
        
                        {/* <p> */}
                            <span className="ctitle">
                                {newsTemplate.title}
                            </span>
                            {/* </p> */}
        
                            <div className="desc">
                                <p> 
                                {newsTemplate.summary}
                            </p>
                            </div>
                            
                            {/* <div className="descx">
                              <Link to={`/${newsTemplate.url}`}>read more</Link>
                            </div> */}
        
                        </div>
                        </div>
                        ))
                        }
                    </div>
    </div>
            
            </div>
      )
}

export default Services