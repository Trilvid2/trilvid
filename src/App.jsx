import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'
import Swal from 'sweetalert2';
// import AOS from 'aos';
import AOS from 'aos'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './components/contact/ContactUs';
import Sustainability from './components/sustain/Sustainability';
import Energy from './components/sustain/Energy';
import Climate from './components/job/Climate';
import Nature from './components/job/Nature';
import People from './components/job/People';
import Integrating from './components/job/Integrating';
import Lng from './components/job/Lng';
import Strengting from './components/job/Strengting'; 
import Maxgasfield from './components/job/Maxgasfield';
import Tracker from './components/tracker/Tracker';

import Oil from './components/job/Oil';
import Projects from './components/job/Projects';
import Digitalisation from './components/job/Digitalisation';
import Pol from './components/job/Pol';

import JobDetails from './components/job/JobDetails';
import JobSearch from './components/job/Climate'; 
import AdminInput from './components/tracker/AdminInput';


function App() {

useEffect(() => {
  AOS.init({
    offset: 60,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
  })
    AOS.refresh()
  // duration=1200;
  }, [])


  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const route = 'https://oilpetroleum-nsbe.vercel.app'
  // const route = 'http://localhost:5100'
  

  return (
    <>
    <div>
      <Router>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/contact' element={<ContactUs />}/>
           <Route path='/sustainability' element={<Sustainability />}/>
           <Route path='/innovation' element={<Energy />}/>
           <Route path='/tracker' element={<Tracker route={route}/>}/>

           <Route path='/our_approach_to_sustainability' element={<JobDetails />}/>
           <Route path='/our_climate_goal' element={<Climate />}/>
           <Route path='/nature' element={<Nature />}/>
           <Route path='/people' element={<People />}/>
           <Route path='/integrate_sustainability_into_our_project' element={<Integrating />}/>

           <Route path='/gas_field' element={<Maxgasfield />}/>
           <Route path='/Liquefied_Natural_Gas' element={<Lng />}/>
           <Route path='/energy' element={<Strengting />}/>

           <Route path='/oil_and_gas' element={<Oil />}/>
           <Route path='/major_projects' element={<Projects />}/>
           <Route path='/digitalisation' element={<Digitalisation />}/>
           <Route path='/political_activity' element={<Pol />}/>


           <Route path='/837f9ed8f17534c9e3c1979d8693ecca7acabf83398e0c21081020417715684e/admin/order' element={<AdminInput route={route} />}/>

        </Routes>
      </Router>

      {/* <span className="whatsapp">
        <a href="https://wa.me/+15032091512" target='blank'><IoLogoWhatsapp className='appicx'/></a>
      </span> */}
      
    </div>
    </>
  )
}

export default App