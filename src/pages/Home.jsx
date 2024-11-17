import React, { useEffect, useState } from 'react'
import LandingPage from '../components/landingpage/LandingPage';
import Review from '../components/review/Review';
import Footer from '../components/footer/Footer';
import Loader from './Loader';
import Why from '../components/why/Why';
import Hired from '../components/dark/Hired';
import How from '../components/how/How';
import Feature from '../components/feature/Feature';
import Service from '../components/services/Services'
import Partners from  '../components/partners/Partners'
import Advantages from '../components/how/Advantages';

const Home = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => { 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

    
  return (
    <> 
    {
      loading && <Loader />
    }
    <LandingPage />   
    <Service />
    <br /><br />
    <Why />
    <How />
    {/* <Feature />
    <div className="spaceme"></div> */}
    <Footer />
         
    </>
  )
}

export default Home