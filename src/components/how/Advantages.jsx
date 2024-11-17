import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PiTruckTrailer, PiHandshake } from "react-icons/pi";
import { GiOilPump } from "react-icons/gi";


const Advantages = () => {
  const navigate = useNavigate()
  
    const [newsTemplates, setNewsTemplates] = useState([
        {
          id:1,
          title:"SECURITY:",
          summary: "Compliance with the requirements of the legislation of the Republic of Kazakhstan",
          sum: " - Compliance with the requirements of the International Environmental Safety System 14001 and the Occupational Health",
          image:'/sec.png',
        },
        {
          id:2,
          title:"HIGH QUALITY:",
          summary: "-Fuel supply from leading refineries in Kazakhstan and Russia",
          sum:"- Analysis of fuel quality by independent experts",
          sun:"- Compliance with the requirements of the International Quality Management",
          image:'/HQ.png'
        },
        {
          id:3,
          title:"PROFESSIONALISM:",
          summary: "- More than 1 year of experience in the supply and sale of light petroleum products",
          sum:"- Qualified staff with extensive experience \n - Periodic training and training of personnel, advanced training",
          image:'/PR.png'
        },
        {
          id:4,
          title:"TECHNICAL EQUIPMENT:",
          summary: " - Availability of oil depots with advanced technologies for storing petroleum products in the cities of Atyrau, Aktau, Uralsk.",
          sum: "- Availability of own and rented transport fleet with fuel trucks and refueling trucks that meet all safety requirements.",
          image:'/TE.png'
        }
      ])
    
    
      return (
        <div className='investmentPagex'>    
            
            <div className="why-choose-section">
        
                <div className="newsSectionx">
                    {
                        newsTemplates.map((newsTemplate) => (
                            
                    <div className="xcard dcard"  key={newsTemplate.id}>
                      <br />
                        <div className="cimage">
                        <img src={newsTemplate.image} alt="file not found" />
                        </div>
                        
                        <div className="contentx">
        
                        {/* <p> */}
                            <span className="ctitle">
                                {newsTemplate.title}
                            </span>
                            {/* </p> */}
        
                            <div className="desc">
                                <p> 
                                {newsTemplate.summary} <br />
                                {newsTemplate.sum} <br />
                                {newsTemplate.sun}
                            </p>
                            </div>
                            
                        </div>
                        </div>
                        ))
                        }
                    </div>
    </div>
            
            </div>
      )
}

export default Advantages