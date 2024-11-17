import React, { useState, useEffect } from 'react'
import './style.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import Loader from '../../pages/Loader'


const Energy = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => { 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aboutPagex">
      {
        loading && <Loader />
      }
      
      <div className="aboutPage eneryPage" id='#about'>
        <div className='abtHero'>
        <Header />
          <div className='abtTextsect'>
            <h2>
              Oil PetroleumNS
              <span className='emphasy'> Energy & innovation </span>
            </h2>
            
          </div>
            <p className="arrow">
              home 
              <span><SlArrowRight /></span> 
              <span className='coloredTxt'>Energy </span> 
              
              </p>
        </div>

        </div>

<div className="spaceme">

</div>



    <div className="why-choose-section whatIsmild">
        
      <div className="asectContainer">

      <span className='doc'>
        <h1><b>Other Projects </b></h1>
        <p>Many oilfield service companies operating in various regions of the Republic: Embamunai LLP, Arctic Group International LLP, Umirzak-Service LLP, Ariadna LLP, Temirzhol Kurylys LLP, Isker Consortium LLP, Mainport Aktau LLP, Caspian Sea Support LLP, DSL Caspian LLP, KZF Service LLP, INTRA Service Company LLP, Offshore Services Group LLP, Kaz Kurylys Corporation LLP, Bapy Mining LLP, Senimdi Kurylys LLP, BatysTemirTrans LLP and others.</p>

      </span>

      <span className='abtIconsx'>
        <img src="/tanker.png" alt="file not found" />
        
      </span>
      </div>
    </div>
          
    <div className="spaceme"></div>
    

    <div className="why-choose-section whatIsmild">
        
      <div className="asectContainer">

      <span className='doc'>
        <h1><b>North Caspian Operating Company </b></h1>
        <p>Bunkering of oil barges for further use at the Kashagan field for NCOC North Caspian Operating Company N.V.</p>
        <p>As it transforms into an integrated energy company, the company is currently kicking off a modular gas-to-power project which will start with roughly 30MW of power and then grow to about 300MW to serve our refinery as well as planned industrial city. The power plant will utilize processed gas from the Company’s  Imashevskoye gas field and from third parties operating gas fields that are within proximity of the Ibigwe field.

The power generated is expected to contribute towards bridging the power supply gap in the country and create both direct and indirect jobs during the construction and operational phases.

About 118,000 households and 27,000 commercial/industrial users are expected to be powered through this project.</p>

      </span>

      <span className='abtIconsx'>
        <img src="/north.jpg" alt="file not found" />
        
      </span>
      </div>
    </div>
          

    
    <div className="spaceme"></div>

    <Footer />




    </div>
  )
}

export default Energy