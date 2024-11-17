import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './footer.css'
import { MdMail, MdLocationPin, MdPhone, MdFacebook  } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter } from 'react-icons/fa6'


const Footer = () => {
    const navigate = useNavigate()
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className='footer'>
        {/* <div className="warning">
            <section>
                <h2>ATTENTION ALL PARTNERS!</h2>
                <span>
                    We inform you that the company TOO "OIL PETROLEUM NS", <b>BIN: 230840027027</b> , is a 100% Kazakhstani company and is engaged in the supply of fuel to the international market.
                    <br /> <br />

                    We export or supply petroleum products produced in other countries.

                    The company's activities are aimed exclusively at servicing end consumers in the domestic market of the Republic of Kazakhstan and the international market.
                    <br /> <br />
                    In order to prevent FRAUD, we ask you to always check the authenticity of information: fake official letters, commercial offers and other documents received on behalf of our company, only through official communication channels: Report_Fraud@oilpetroleumNS.com
                    <br />
                    Thanks for understanding!</span>
            </section>
        </div> */}
        <br /><br />

  {/* <div className="topimgspan">
        <div className="textCover">
            <span>
                <h2>Over <span className='underlined'>&nbsp; 15 Million&nbsp;</span> Job Seekers Have Used <br /> MAGAWORKING to Find a Better Way to Work</h2>
            </span>
            <section>
                <button className='signup-btn'><Link to='/remote-jobs/job'>Find Remote Jobs Now! </Link></button>
                <button className='signup-btnx'><Link to='/login'>Login Now</Link></button>
            </section>
        </div>
  </div> */}

  
  <div className='footTopx'>
    
<div className='ftRight'>
    <span> 
        <img src="/logos.png" alt="file not found" />
        
        <h1>Follow us on</h1>
    </span>

        <span className='ftIcons'>
            <Link to='#' target='_blank'> <FaInstagram /> </Link>
            <Link to='#' target='_blank'> <FaTwitter /> </Link>
            <Link to='#' target='_blank'> <MdFacebook /> </Link>
            <Link to='mailto:trilvid234@gmail.com' target='_blank'> <MdMail /> </Link>
            {/* <Link to='https://wa.me/#' target='_blank'> <FaWhatsapp /> </Link> */}
            
        </span>
        
</div>
    

<div className='ftRight'>
    <span> 
        <h2>Get Started</h2>
        <Link to='/'>Home</Link>
        <Link to='/#'>projects</Link>
        <Link to='/#'>innovation</Link>
        <Link to='/#'>Cybersecurity and Scams</Link>
    </span>
</div>


<div className='ftRight'>
    <span> 
        <h2>Resources</h2>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/#' target='_blank'>news & article </Link>
        <Link to='#' target='_blank'> <FaTwitter /> Trilvid </Link>
    </span>
</div>


<div className='ftRight'>
    <span> 
        <h2>Get in touch</h2>
        <Link to='tel:+2349034187388'> <MdPhone /> +(234) 903-418-7388</Link>
        <Link to='#' target='_blank'> 
        <FaInstagram /> Trilvid</Link>
        <Link to='mailto:trilvid234@gmail.com'> <MdMail /> trilvid234@gmail.com</Link>
    </span>
</div>



</div>

        <div className='footDown'>
            <span>
               <p> &copy; 2023 - { new Date().getFullYear()}. All rights reserved</p>

               {/* <div className="toDeTop" onClick={()=>{
                scrollToTop()
               }}>
                <IoIosArrowUp />
               </div> */}
            </span>

        </div>
    </div>
  )
}

export default Footer