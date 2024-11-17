import React, {useState, useEffect}  from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Faqs from '../components/myFaqs/Faqs'

import { SlArrowRight } from "react-icons/sl";
import Loader from './Loader'

const Faq = () => {  
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
    <div className='about_page'>
        <Header /> 
        
      <div className="containAbtpg">
        
      <div className="shadex">
                <img src="/howitworks.svg" alt="" />
                <h2> Magaworking - Supporting Your Path to a Career You Love</h2>
                <span>
               

                We’re here to help you not only have a successful job search but also build a fulfilling career. Our expert team, including experienced Career Coaches, is ready to answer your questions and offer practical advice on job searching, exploring various career paths, and thriving as a remote or flexible worker.
                </span><br />
            </div>




        <div className="why-choose-section ">
          <Faqs />
         </div>

        </div>
         
          <Footer />
    </div>
    </>
  )
}

export default Faq