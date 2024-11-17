import React, { useState, useEffect } from 'react'
import './abt.css'
import Header from '../components/header/Header'
// import Why from '../components/why/Why'
// import Review from '../components/review/Review'
// import Feature from '../components/feature/Feature'
import Roadmap from '../components/road/Roadmap'
import Footer from '../components/footer/Footer'
import Feature from '../components/feature/Feature'

import { SlArrowRight } from "react-icons/sl";
import Loader from './Loader'


const About = () => {
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
      
      <div className="aboutPage" id='#about'>
        <div className='abtHero'>
        <Header />
          <div className='abtTextsect'>
            <h2>
              About
              <span className='emphasy'> Trilvid's Technology</span>
            </h2>
            
          </div>
            <p className="arrow">
              home 
              <span><SlArrowRight /></span> 
              <span className='coloredTxt'>company </span> 
              
              </p>
        </div>

        </div>

<div className="spaceme">

</div>


      <div className="why-choose-section whatIsKa">
        
        <div className="asectContainer">

          <span className='abtIconsx'>
            <img src="/abt.jpg" alt="file not found" />
            
          </span>
          
          <span className='doc'>
            <h1>What is special about <br /><br /><b>Trilvids Technology</b></h1>
            <p> Trilvids Technology is a forward-thinking company that bridges the gap between cutting-edge innovation and exceptional execution. At its core, Trilvids is driven by a commitment to revolutionize industries with groundbreaking solutions tailored to meet modern challenges. The company fosters a culture of creativity, pushing boundaries to deliver transformative technologies that empower businesses and individuals alike.</p>
            
            <p>With a focus on excellence, Trilvids Technology ensures every product and service is designed with precision, quality, and customer satisfaction in mind. Whether developing advanced software, pioneering hardware solutions, or driving sustainable practices, Trilvids stands as a beacon of reliability and progress in the tech world.</p>

            <p>At Trilvids Technology, innovation isn't just a goal—it’s a standard. The company's mission is to craft solutions that not only solve today's problems but also anticipate the needs of tomorrow, solidifying its position as a leader in the global technology landscape.</p>
            

          </span>

        </div>
      </div>


      <div className="featurePg">
        <h2>OUR MISSION</h2>
        To deliver innovative, reliable, and sustainable technology solutions that empower businesses and individuals, driving progress and creating lasting value in a rapidly evolving digital landscape.

        <h2>OUR VISSION </h2>
        To be a global leader in technology, renowned for our commitment to innovation, excellence, and shaping a future where technology improves lives and connects the world seamlessly.
    </div>
      
    <Roadmap />

<div className="why-choose-section whatIsmild">
  
<div className="asectContainer">

<span className='doc'>
  <h1><b>Global Reach, Local Expertise </b></h1>
  <p>Trilvids Technology operates at the heart of innovation, but our impact extends far beyond our headquarters. With projects and partnerships spanning across continents, we proudly serve clients from all corners of the globe.</p>

  <p>Our expertise knows no boundaries, and we collaborate with businesses worldwide to deliver tailored solutions that meet diverse needs. Whether it's deploying advanced technologies in North America, Europe, Asia, or Africa, Trilvids is committed to driving success and innovation wherever our clients are.</p>

  <p>At Trilvids, we believe in bridging the gap between global ambition and local understanding, ensuring every project is delivered with precision and excellence.</p>

</span>

<span className='abtIconsx'>
  <img src="/Image-19.png" alt="file not found" />
  
</span>

</div>
</div>

{/* <Feature /> */}
    
    <div className="spaceme"></div>

    <Footer />




    </div>
  )
}

export default About