// import React, { useState } from 'react'
// import Header from '../components/header/Header'
// import Footer from '../components/footer/Footer'
// import './jobs.css'
// import { BsBookmarkCheck } from "react-icons/bs";
// import { FiSearch } from 'react-icons/fi';
// import { Link, useNavigate } from 'react-router-dom';

// const Jobs = () => {

//     const [searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();
  
//     // Handles the navigation to the search results page
//     const handleSearch = (e) => {
//       e.preventDefault();
//       if (searchQuery.trim()) {
//         navigate('/remote-jobs/job', { state: { searchQuery } });
//       }
//     };
  
//     // Checks for the Enter key to trigger the search
//     const handleKeyUp = (event) => {
//       if (event.key === 'Enter' && searchQuery.trim()) {
//         navigate('/remote-jobs/job', { state: { searchQuery } });
//       }
//     };


//   return (
//     <>
//     <div className="about_page">
//         <Header />

//         <div className="containJobs">

//             <div className="space">
//                <span>Home</span> / Remote Jobs
//             </div>
            
//             <div className="jobhero">

//                 <div className='jop'>
//                     <span className='jtext'>
//                         <h2>The <span className="emphasy">#1 remote</span> job site to find vetted flexible, hybrid, or work from home jobs since 2005.</h2>
//                         <section>
//                             <p><BsBookmarkCheck className='jicon'/>100% high-quality remote jobs</p>
//                             <p><BsBookmarkCheck className='jicon'/>Advanced remote search filters</p>
//                         </section>
//                         <section>
//                             <p><BsBookmarkCheck className='jicon' />Entry-level to executive roles</p>
//                             <p><BsBookmarkCheck className='jicon' />No ads, junk, or scams</p>
//                         </section>
//                     </span>

//                     <span className='jimg'>
//                         <img src="/H.png" alt="file not found" />
//                     </span>
//                 </div>

//                 <div className='jown'>
//                     <div className="featurePg">
//                         <div>
//                             <h1>Featuring <span className="underlined"> 131,671 </span> Online Jobs From <span className="underlined"> 7,853 </span> Companies</h1>
//                         </div>

//                         <form>
//                             <span>
//                                 <input 
//                                 type="search" 
//                                 name="searchme" 
//                                 id="search" 
//                                 placeholder='Search by Keyword, job title, etc. '
//                                 value={searchQuery} 
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 onKeyUp={handleKeyUp}  />
//                                 <button type="submit"><FiSearch /> </button>
//                             </span>
//                         </form>

//                         <section>
//                             <div>
                                
//                                 <button>
//                                     <Link to="/remote-jobs/job">Work From Anywhere in US</Link>
//                                 </button>
                                
//                                 <button>
//                                     <Link to="/remote-jobs/job">Work From Anywhere in World</Link>
//                                 </button>
                                
//                                 <button>
//                                     <Link to="/remote-jobs/job">Explore Job Categories</Link>
//                                 </button>
//                             </div>
                            
//                         </section>
//                     </div>
//                 </div>
//             </div>

//                 <div className="space">
//                     Top categories
//                 </div>
//             {/* top categories */}
//         <section className='scrollme'>
                    
//             <div className="category_section">
                
                
//                 <div className="cate">
//                     <img src="/bagx.svg" alt="" />
//                     <h2>
//                         <Link to="/remote-jobs/job">Accounting & Finance</Link>
//                     </h2>
//                 </div>

                
//                 <div className="cate">
//                     <img src="/gear.svg" alt="" />
//                     <h2>
//                          <Link to="/remote-job/job">Project Management</Link>
//                     </h2>
//                 </div>

//                 <div className="cate">
//                     <img src="/edit.svg" alt="" />
//                     <h2>
//                     <Link to="/remote-job/job">Writing</Link>
//                    </h2>
//                 </div>
                
//                 <div className="cate">
//                     <img src="/market.svg" alt="" />
//                     <h2>
//                     <Link to="/remote-job/job">Marketing</Link>
//                     </h2>
//                 </div>

                
//                 <div className="cate">
//                     <img src="/chat.svg" alt="" />
//                     <h2>
//                     <Link to="/remote-job/job">Customer Service</Link>
//                     </h2>
//                 </div>


//             </div>
        
//         </section>

//         <br />
//         <div className="space">
//             All Job categories
//         </div>
            
//         {/* other categories */}
//         <div className="otherjobs">

//             <span>
//                 <Link to="/remote-jobs/job">Account Management Jobs</Link>
//                 <Link to="/remote-jobs/job">Accounting & Finance Jobs</Link>
//                 <Link to="/remote-jobs/job">Administrative Jobs</Link>
//                 <Link to="/remote-jobs/job">Advertising & PR Jobs</Link>
//                 <Link to="/remote-jobs/job">Animals & Wildlife Jobs</Link>
//                 <Link to="/remote-jobs/job">Art & Creative Jobs</Link>
//             </span>

//             <span>
//                 <Link to="/remote-jobs/job">Bilingual Jobs</Link>
//                 <Link to="/remote-jobs/job">Business Development Jobs</Link>
//                 <Link to="/remote-jobs/job">Call Center Jobs</Link>
//                 <Link to="/remote-jobs/job">Communications Jobs</Link>
//                 <Link to="/remote-jobs/job">Computer & IT Jobs</Link>
//                 <Link to="/remote-jobs/job">Consulting Jobs</Link>
//             </span>

//             <span>
//                 <Link to="/remote-jobs/job">Customer Service Jobs</Link>
//                 <Link to="/remote-jobs/job">Data Entry Jobs</Link>
//                 <Link to="/remote-jobs/job">Editing Jobs</Link>
//                 <Link to="/remote-jobs/job">Education & Training Jobs</Link>
//                 <Link to="/remote-jobs/job">Engineering Jobs</Link>
//                 <Link to="/remote-jobs/job">Entertainment & Media Jobs</Link>
//             </span>

//         </div>
        

//         </div>

//     <Footer />
//     </div>
    
//     </>
//   )
// }

// export default Jobs

import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './jobs.css';
import { BsBookmarkCheck } from "react-icons/bs";
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handles the navigation to the search results page with query parameters
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigates to /remote-jobs/job with the search query as a URL parameter
      navigate(`/remote-jobs/job?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Checks for the Enter key to trigger the search
  const handleKeyUp = (event) => {
    if (event.key === 'Enter' && searchQuery.trim()) {
      navigate(`/remote-jobs/job?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="about_page">
        <Header />

        <div className="containJobs">
          <div className="space">
            <span>Home</span> / Remote Jobs
          </div>
          
          <div className="jobhero">
            <div className='jop'>
              <span className='jtext'>
                <h2>The <span className="emphasy">#1 remote</span> job site to find vetted flexible, hybrid, or work from home jobs since 2005.</h2>
                <section>
                  <p><BsBookmarkCheck className='jicon'/>100% high-quality remote jobs</p>
                  <p><BsBookmarkCheck className='jicon'/>Advanced remote search filters</p>
                </section>
                <section>
                  <p><BsBookmarkCheck className='jicon' />Entry-level to executive roles</p>
                  <p><BsBookmarkCheck className='jicon' />No ads, junk, or scams</p>
                </section>
              </span>

              <span className='jimg'>
                <img src="/H.png" alt="file not found" />
              </span>
            </div>

            <div className='jown'>
              <div className="featurePg">
                <div>
                  <h1>Featuring <span className="underlined"> 131,671 </span> Online Jobs From <span className="underlined"> 7,853 </span> Companies</h1>
                </div>

                {/* Search form */}
                <form onSubmit={handleSearch}>
                  <span>
                    <input 
                      type="search" 
                      name="searchme" 
                      id="search" 
                      placeholder='Search by Keyword, job title, etc.' 
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyUp={handleKeyUp} 
                    />
                    <button type="submit"><FiSearch /></button>
                  </span>
                </form>

                <section>
                  <div>
                    <button>
                      <Link to="/remote-jobs/job">Work From Anywhere in US</Link>
                    </button>
                    
                    <button>
                      <Link to="/remote-jobs/job">Work From Anywhere in World</Link>
                    </button>
                    
                    <button>
                      <Link to="/remote-jobs/job">Explore Job Categories</Link>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="space">
            Top categories
          </div>

          {/* Top categories */}
          <section className='scrollme'>
            <div className="category_section">
              <div className="cate">
                <img src="/bagx.svg" alt="" />
                <h2>
                  <Link to="/remote-jobs/job">Accounting & Finance</Link>
                </h2>
              </div>
              <div className="cate">
                <img src="/gear.svg" alt="" />
                <h2>
                  <Link to="/remote-jobs/job">Project Management</Link>
                </h2>
              </div>
              <div className="cate">
                <img src="/edit.svg" alt="" />
                <h2>
                  <Link to="/remote-jobs/job">Writing</Link>
                </h2>
              </div>
              <div className="cate">
                <img src="/market.svg" alt="" />
                <h2>
                  <Link to="/remote-jobs/job">Marketing</Link>
                </h2>
              </div>
              <div className="cate">
                <img src="/chat.svg" alt="" />
                <h2>
                  <Link to="/remote-jobs/job">Customer Service</Link>
                </h2>
              </div>
            </div>
          </section>

          <br />
          <div className="space">
            All Job categories
          </div>
          
          {/* Other categories */}
          <div className="otherjobs">
            <span>
              <Link to="/remote-jobs/job">Account Management Jobs</Link>
              <Link to="/remote-jobs/job">Accounting & Finance Jobs</Link>
              <Link to="/remote-jobs/job">Administrative Jobs</Link>
              <Link to="/remote-jobs/job">Advertising & PR Jobs</Link>
              <Link to="/remote-jobs/job">Animals & Wildlife Jobs</Link>
              <Link to="/remote-jobs/job">Art & Creative Jobs</Link>
            </span>
            <span>
              <Link to="/remote-jobs/job">Bilingual Jobs</Link>
              <Link to="/remote-jobs/job">Business Development Jobs</Link>
              <Link to="/remote-jobs/job">Call Center Jobs</Link>
              <Link to="/remote-jobs/job">Communications Jobs</Link>
              <Link to="/remote-jobs/job">Computer & IT Jobs</Link>
              <Link to="/remote-jobs/job">Consulting Jobs</Link>
            </span>
            <span>
              <Link to="/remote-jobs/job">Customer Service Jobs</Link>
              <Link to="/remote-jobs/job">Data Entry Jobs</Link>
              <Link to="/remote-jobs/job">Editing Jobs</Link>
              <Link to="/remote-jobs/job">Education & Training Jobs</Link>
              <Link to="/remote-jobs/job">Engineering Jobs</Link>
              <Link to="/remote-jobs/job">Entertainment & Media Jobs</Link>
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Jobs;
