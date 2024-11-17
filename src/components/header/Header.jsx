import React from 'react'
import './header.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";



const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [bgColor, setBgColor] = useState(false)
    const [bgLogo, setBgLogo] = useState('/log.png')

    const changeOnScroll = ()=>{
        if(window.scrollY >= 90){
            setBgColor(true)
            setBgLogo('/logo.png')
        }
        else{
            setBgColor(false)
            setBgLogo('/logos.png')
        }
    }
    window.addEventListener('scroll', changeOnScroll)
    const navigate = useNavigate()
  return (
    <motion.header className={`${bgColor && 'scroll-color'}`}
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.65}}
    >
        <div className="logo-container">
            <img src={bgLogo} alt="" className='logo' onClick={()=>{
                navigate('/')
            }}/>
        </div>
        <nav id='home'>
            <ul>
                <li>
                    <Link to="/">home</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/about">About</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                    <span className='line'></span>
                </li>
                {/* <li>
                    <Link to="/sustainability">sustainablity</Link>
                    <span className='line'></span>
                </li>
                <li>
                    <Link to="/innovation">energy & innovation</Link>
                    <span className='line'></span>
                </li> */}
            </ul>
        <div className="sign-up-btn-container">
            {/* <button className='signup-btn' onClick={()=>{navigate('/tracker')}}>track order &nbsp; <FaSearch /></button> */}
        </div>
        </nav>
        
        <div class="mobile-menu-container" onClick={()=>{
            setShowModal(!showModal)
        }}>  
                <HiOutlineMenuAlt2  className='spanxIcon'/>
        </div>
        <div className={`menu-modal ${showModal ? 'showing-modal' : ''}`}>
            <ul>
                <Link to='/'>home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">contact</Link>
                {/* <Link to="/sustainability">sustainablity</Link>
                <Link to="/innovation">energy & innovation</Link> */}
                {/* <Link to='/tracker'><button className='signup-btn'>track order &nbsp; <FaSearch /></button></Link> */}
            </ul>
        </div>
    </motion.header>
  )
}

export default Header