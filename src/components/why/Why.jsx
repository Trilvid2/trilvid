import React from 'react'
import './why.css'
import { useNavigate, Link } from 'react-router-dom'


const Why = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className="why-choose-section abtoilpg">
          
          <div className="oiltxt">
            <h2>What we do</h2>
            <span>
            Trilvids Technology is a forward-thinking company that bridges the gap between cutting-edge innovation and exceptional execution. At its core, Trilvids is driven by a commitment to revolutionize industries with groundbreaking solutions tailored to meet modern challenges. The company fosters a culture of creativity, pushing boundaries to deliver transformative technologies that empower businesses and individuals alike.</span>

            <button>
              <Link to='/about'>Learn more</Link>
            </button>
          </div>
          
        </div>
    </>
  )
}

export default Why