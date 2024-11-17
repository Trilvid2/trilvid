import React from 'react'
import './style.css'
import {FaGlobeAmericas} from 'react-icons/fa'
import { LuUsers } from "react-icons/lu";
import { HiUserGroup } from "react-icons/hi";
import Countup from './Countup'
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { GoStack } from "react-icons/go";

const Roadmap = () => {
  return (
    <section className='info-section'>
      <div className="why-choose-us-text-container review-head-container">
            <div className="header review-header" data-aos="fade-up">
                <span className="header-line"></span>
                <h1>Trilvid's Technology at a glance</h1>
            </div>
            <br />
            <br /><br />
            <h1 data-aos="fade-up"></h1>
        </div>
      <div className="info-wrapper">
        <div className="info-left-card-container">
          <div className="info-left-card" data-aos="fade-up">
            <FaGlobeAmericas className='ficx'/>
            <Countup end={180} />
            <p>supported countries</p>
          </div>
        </div>
        <div className="info-right-card-container">
          <div className="info-right-card" data-aos="fade-up">
            <HiUserGroup className='ficx'/>
            <Countup end={5} />
            <p>employees</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <LuUsers className='ficx'/>
            <Countup end={20} />
            <p>customers</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <GoStack className='ficx'/>
            <Countup end={30} />
            <p>completed projects</p>
          </div>
          <div className="info-right-card" data-aos="fade-up">
            <MdOutlineCollectionsBookmark className='ficx'/>
            <Countup end={10} />
            <p>collaborations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap