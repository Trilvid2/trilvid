import { React, useState } from 'react'
import './server.css'
import { useNavigate } from 'react-router-dom'
import { AiFillGolden } from "react-icons/ai";
import {MdOutlineLocalAtm} from "react-icons/md"
import { SiTesla } from "react-icons/si";

const Server = () => {
  const navigate = useNavigate()
  
    const [newsTemplates, setNewsTemplates] = useState([
        {
          id:1,
          title:"Gold",
          summary: "IronClad Capital is a leading gold stock investment company committed to helping clients navigate gold investing. This article covers the basics of gold investments, highlighting key benefits and risks.",
          image:<AiFillGolden/>,
          url: 'gold_stock'
        },
        {
          id:2,
          title:"Tesla",
          summary: "As a leader in electric vehicles and sustainable energy solutions, Tesla represents a transformative opportunity that aligns with our commitment to innovative investments. By focusing on this dynamic company, Ironclad Capital aims to enhance our portfolio and contribute to the advancement of sustainable technology.",
          image:<SiTesla/>,
          url: 'tesla'
        },
        {
          id:3,
          title:"Bitcoin Atm",
          summary: "As the demand for digital currencies continues to rise, Ironclad Capital sees significant potential in investing in Bitcoin ATMs. This venture aligns with our vision of embracing technological advancements and expanding our reach in the rapidly evolving financial landscape.",
          image:<path
                                    d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                ></path>,
          url: 'bitcoinatm'
        },
      ])
    
    
      return (
        <div className='investmentPagex'>    
            
            <div className="why-choose-section">
    
                {/* <div className="why-choose-us-text-container faq-p about-text">
                    <div className="header" data-aos="fade-up">
                        <span className="header-line"></span>
                        <h2>Investment Assets</h2>
                    </div>
                    <h1 data-aos="fade-up">we invest in</h1>
                    <p data-aos="fade-up" id='Ntext'>
                    Our team brings together expertise in arbitrage trading, marketing, real estate, and a strong commitment to work ethics, ensuring you receive the best investment experience you deserve.
                    </p>
                </div> */}
    
            
    
                <div className="newsSection">
                    {
                        newsTemplates.map((newsTemplate) => (
                            
                        /* From Uiverse.io by gharsh11032000 */ 
                            <div class="tcard"  
                                key={newsTemplate.id} 
                                onClick={()=>{
                                    navigate(`/${newsTemplate.url}`)
                                }}
                            >
                            <div class="tcontent">
                                <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    {newsTemplate.image}
                                </svg>
                                <p class="para">
                                <h1>{newsTemplate.title}</h1>
                                {newsTemplate.summary}
                                </p>
                            </div>
                            </div>

                        ))
                        }
                    </div>
    </div>
            
            </div>
      )
}

export default Server