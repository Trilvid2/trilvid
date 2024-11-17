import React, { useState, useEffect } from 'react'
import './style.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import Loader from '../../pages/Loader'


const Sustainability = () => {
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
      
      <div className="aboutPage sustainPage" id='#about'>
        
        <div className='abtHero'>
        <Header />
          <div className='abtTextsect'>
            <h2>
              Oil PetroleumNS
              <span className='emphasy'> Sustainability </span>
            </h2>
            
          </div>
            <p className="arrow">
              home 
              <span><SlArrowRight /></span> 
              <span className='coloredTxt'>Sustainability </span> 
              
              </p>
        </div>

        </div>

<div className="spaceme">

</div>


      <div className="why-choose-section sustaindiv1">
       
      <div className="newsSectionx">
                            
                    <div className="xcard">
                        <div className="cimage">
                        <img src="/s1.avif" alt="file not found" />
                        </div>
                        <div className="contentx">
        
                            <span className="ctitle">
                              <Link to='/our_approach_to_sustainability'>
                                 Our approach to sustainability
                                </Link>
                            </span>
                            
        
                            <div className="desc">
                                <p> 
                                Powering Progress sets out our strategy to become a net-zero emissions energy business by 2050, generating value for our shareholders, our customers and wider society. It is designed to integrate sustainability with our business strategy. Find out more about our approach.
                            </p>
                            </div>
                            
                            <div className="descx">
                              {/* <Link to={`/${newsTemplate.url}`}>read more</Link> */}
                            </div>
        
                        </div>
                        </div>
                        
                    </div>

                    <div className="longdiv">
                        <img src="s2.webp" alt="" />
                        <span>
                            <h2>our climate goal</h2>
                           Oil PetroleumNS's target is to become a net-zero emissions energy business by 2050.
                           <br /><br />
                           <button>
                           <Link to='/our_climate_goal'>
                            Discover more
                            </Link></button>
                            
                           </span>
                           
                    </div>
       
      </div>


      <div className="sustaindiv2">
        <section>
            <div><img src="s3.webp" alt="" /></div>
            <h2>
              <Link to='/nature'>Nature</Link> </h2>
            <span>Respecting nature is part of our Powering Progress strategy. We recognise there is a growing global urgency to protect and enhance biodiversity, conserve fresh water and use resources more efficiently. The links between nature and climate are recognised in the UN Kunming-Montreal Global Biodiversity Framework of 2022 and in discussions at the 2023 UN Climate Change Conference (COP28).</span>
        </section>

        <section>
            <div><img src="s4.avif" alt="" /></div>
            <h2><Link to='/people'>people</Link></h2>
            <span>We aim to be a good neighbour wherever we work, by contributing to the wellbeing of communities. We work closely with them to manage the social impacts of our business activities, address any concerns about our operations, and enhance the benefits that we are able to bring.</span>

        </section>

      </div>

<div className="spaceme">

</div>
      
      <div className="space">
                    <h2>report</h2>
                    <h1>sustainability reports</h1>
                    <p># <hr /></p>

                </div>

<div className="sustaindiv3">
    
    <div className="longdiv2">
        <img src="s5.avif" alt="" />
        <span>
            <h2>Integrating sustainability into our projects </h2>
            We consider the impact of our activities across the lifecycle of our projects and facilities.
            <br /><br />
            <button><Link to='/integrate_sustainability_into_our_project'>Read more</Link></button>
        </span>
                            
    </div>

    <div className="featurePg">
    Transparency and sustainability reporting. Doing business in a clear, open way is a commitment we work hard to keep, and we promote transparency where possible throughout our industry. We have voluntarily reported on our environmental and social performance since 2023. Our sustainability reporting focuses on the challenges that most affect our business performance and matter most to our key stakeholders.
    </div>

</div>

<div className="spaceme"></div>

<div className="why-choose-section abtoilpg subpagee">
          
          <div className="oiltxt">
            <h2>Safety</h2>
            <span>
            We are committed to delivering energy responsibly and safely, preventing harm to our employees, contractors, local communities and the environment.</span>

          </div>
          
        </div>

    
    <div className="spaceme"></div>

    <Footer />




    </div>
  )
}

export default Sustainability