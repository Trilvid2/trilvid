import React, {useState, useEffect} from 'react'
import './contact.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Loader from '../../pages/Loader'
import { Link, useNavigate } from 'react-router-dom'

import { MdMail, MdLocationPin, MdFacebook } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { SlArrowRight } from "react-icons/sl";


const ContactUs = () => {  const [loading, setLoading] = useState(true)
  
  useEffect(() => { 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

    const navigate = useNavigate()

    
  const Serviceid = ""
  const wereyTemplateid = ""
  const userId = ""

  const [welMessage, setWelMessage] = useState();
  const [email, setEmail] = useState();

        const submitMail = () => {

    
          // sending emails for welcome and verification
          const data = {
            service_id: `${Serviceid}`,
            template_id: `${wereyTemplateid}`,
            user_id: `${userId}`,
            template_params: {
                'email_subject': `Contact Us`,
                'reciever_email': `ironcladcapital25@gmail.com`,
                'sender_email': `${email}`,
                'to_name': `Admin`,
                'wereyHeader': `Customer Suppport`,
                'werey_msg': `${welMessage}`,
            }
        };
      
      
          const sendWelcomeMail= async()=>{
            await fetch('https://api.emailjs.com/api/v1.0/email/send', {
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data), 
          })
          }
          sendWelcomeMail()

          if(sendWelcomeMail) {
            console.log("done")
            setEmail('')
            setWelMessage('')
          }
          else {
            console.log("failed ")
          }
        }
        

  return (
    <div className='aboutPagex contactPagex'>
    {
      loading && <Loader />
    }
        
      <div className="aboutPage contactPage">
        <div className='abtHero'>
        <Header />
          <div className='abtTextsect'>
            <h1>
              Reach out to us !
              {/* <span className='emphasy'> KULTURE ASSETS</span> */}
            </h1>
            
          </div>
            <p className="arrow">
              home 
              <span><SlArrowRight /></span> 
              <span className='coloredTxt'>contact </span> 
              
              </p>
        </div>

        </div>

            <div className="space">
                    <h2>reach us at</h2>
                    <h1>Trilvid's Technology</h1>
                    <p># <hr /></p>

                </div>

        <div className="contactForm">
                    
        
            <div className="cForm">
                
                <form className="contactFormx" onSubmit={ (e) => {
            e.preventDefault()
            submitMail()}}> 
                    <span className="title">Contact us</span>
                    <input 
                    type="text" 
                    placeholder="Your email" 
                    className="input" 
                    onChange={(e)=>{
                      setEmail(e.target.value.toLocaleLowerCase().trim())}}
                    />
                    <textarea 
                    placeholder="Your message"
                    onChange={(e)=>{
                      setWelMessage(e.target.value.toLocaleLowerCase())}}
                    ></textarea>
                
                        <button type='submit'>Submit</button>
                    </form>

            </div>

            <div className="cSocials">
                <span>
                     <MdMail className='ciconm'/> &nbsp;
                    <Link to='mailto:trilvid234@gmail.com' target='_blank'>
                     trilvid234@gmail.com
                      </Link>
                </span>

                <span>
                     <FaWhatsapp className='ciconm'/>&nbsp;
                     <Link to='#'  target='_blank'> +(234) 903-418-7388 </Link>
                </span>

                <span>
                    <MdFacebook className='ciconm'/>&nbsp; 
                    <Link to='#' target='_blank'> Facebook </Link>
                </span>

                <span>
                     <FaInstagram className='ciconm'/>&nbsp; 
                     <Link to='#' target='_blank'>Instagram </Link>
                </span>

                {/* <span>
                     <MdLocationPin className='ciconm'/> &nbsp; 
                     <Link to='#'>050000, Almaty City, Almaly District, Ul. Tole Bi, 66</Link>
                </span> */}

                <span>
                    <Link>Working hours: monday - friday(9am - 6pm), saturdays (10am - 6pm)</Link>
                    {/* <Link>Working hours: saturdays (10am - 6pm)</Link> */}
                </span>

            </div>
        </div>
        
         <br /><br /><br />
        <Footer />

    </div>
  )
}

export default ContactUs