import React, {useState} from 'react'
import './style.css'
import { Link,  } from 'react-router-dom';

const Feature = () => {

  const [newsTemplates, setNewsTemplates] = useState([
    {
      id:1,
      title:"Liquefied Natural Gas (LNG)",
      summary: "Discover how Oil Petroleum NS is advancing clean energy with world-class LNG solutions, reducing emissions, and supporting a sustainable energy transition globally.",
      image:'/ship.avif',
      url: 'Liquefied_Natural_Gas'
    },
    {
      id:2,
      title:"Maximizing Imashevskoye Gas Field",
      summary: "A groundbreaking project set to boost gas recovery, fueling Russia’s energy needs more efficiently.",
      image:'/field.avif',
      url: 'gas_field'
    },
    {
      id:3,
      title:"Strengthening European Energy Competitiveness",
      summary: "Oil Petroleum NS CEO, ONDASYNOV K.M shares insights on Europe’s role in the energy transition as the EU embarks on a new legislative phase",
      image:'/ceo.avif',
      url: 'energy'
    },
    {
      id:4,
      title:"digital banking",
      summary: "Bank with ease from your devices anywhere in the world.",
      image:'/rii.jpg'
    }
  ])
  
  return (
    <>
    <div className="featurePg">
      
        <div className='center'>
            <h1>Our <span className="underlined">advantages</span></h1>
        </div>

                   
            <div className="service_section">
                
                
                <div className="how_itworks">
                    <img src="/oil&gas.avif" alt="" />
                    <h2>
                    <Link to='/oil_and_gas'>oil and natural gas</Link> </h2>
                </div>

                
                <div className="how_itworks">
                    <img src="/mship.avif" alt="" />
                    <h2>
                    <Link to='/major_projects'>portfolio and major projects</Link></h2>
                </div>

                <div className="how_itworks">
                    <img src="/digital.webp" alt="" />
                    <h2>
                    <Link to='/digitalisation'>digitalisation</Link>
                      </h2>
                </div>
                
                <div className="how_itworks">
                    <img src="/pol.avif" alt="" />
                    <h2>
                      <Link to='/political_activity'>advocacy political activity</Link>
                      </h2>
                </div>


            </div>

    


    </div>

    <div className="asSeen">

    </div>
    </>
  )
}

export default Feature