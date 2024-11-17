// import React, {useEffect, useState} from 'react'
// import './job.css'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
// import { FiSearch } from 'react-icons/fi';
// import data from './data.json'
// import { IoIosPin } from "react-icons/io";
// import JobDetails from './JobDetails';


// const Job = () => {
  
//   const [newsTemplates, setNewsTemplates] = useState([])
//   useEffect(() => {
//     setNewsTemplates(data); 
//   }, []);

//   const [displayJobs, setDisplayJobs] = useState(false)
//   const [details, setDetails] = useState()

//   function timeSince(timestamp) {
//     const now = new Date();
//     const postTime = new Date(timestamp);
//     const seconds = Math.floor((now - postTime) / 1000);
  
//     let interval = Math.floor(seconds / 31536000);
//     if (interval >= 1) return interval === 1 ? "1 year ago" : `${interval} years ago`;
  
//     interval = Math.floor(seconds / 2592000);
//     if (interval >= 1) return interval === 1 ? "1 month ago" : `${interval} months ago`;
  
//     interval = Math.floor(seconds / 86400);
//     if (interval >= 1) return interval === 1 ? "1 day ago" : `${interval} days ago`;
  
//     interval = Math.floor(seconds / 3600);
//     if (interval >= 1) return interval === 1 ? "1 hr ago" : `${interval} hrs ago`;
  
//     interval = Math.floor(seconds / 60);
//     if (interval >= 1) return interval === 1 ? "1 min ago" : `${interval} mins ago`;
  
//     return seconds === 1 ? "1 sec ago" : `${seconds} secs ago`;
//   }
//   const [thisPage, setThisPage] = useState(false)
  
//   const close = ()=>{
//     setThisPage(false)
//   }
    

//   return (
//     <>
//     {!thisPage &&
//       <div className="alljobs">
//         <Header />

//         <div className="searchbox">
//         <form>
//             <span>
//                 <input type="search" name="searchme" id="search" placeholder='Search by Keyword, job title, etc. ' />
//                 <button type="submit"><FiSearch /> </button>
//             </span>
//         </form>
        
//         <p>Job Search results</p>
//         </div>

//         <div className="jobContain">
                    
//           <div className="joblist">
//             {
//               newsTemplates.map((newsTemplate) => (
                                              
//                 <div className="jcard"  key={newsTemplate.id}>
                      
//                   <div className="jhead">
//                     <h2 onClick={()=> {
//                       setDetails({
//                         id: `${newsTemplate.id}`,
//                         title: `${newsTemplate.title}`,
//                         about: `${newsTemplate.about}`,
//                         postedon: `${newsTemplate.postedon}`,
//                         location: `${newsTemplate.location}`,
//                         type: `${newsTemplate.type}`,
//                         schedule: `${newsTemplate.schedule}`,
//                         salary: `${newsTemplate.salary}`,
//                         benefits: `${newsTemplate.benefits}`,
//                         company: `${newsTemplate.company}`,
//                         careerlevel: `${newsTemplate.careerlevel}`,
//                         travel: `${newsTemplate.travel}`,
//                         educational_level: `${newsTemplate.educational_level}`,
//                         category: `${newsTemplate.category}`,
//                       })
//                       setDisplayJobs(true)
//                       setThisPage(true)
//                     }}>{newsTemplate.title}</h2>
//                     <p>{timeSince(`${newsTemplate.postedon}`)}</p>
//                   </div>

//                   <div className="jcontent">

//                       <span className="btn">
//                         {newsTemplate.type}
//                       </span>

//                       <span className="btn">
//                         {newsTemplate.schedule}
//                       </span>

//                       <span className="btn">
//                         {newsTemplate.salary}
//                       </span>
                                         
//                     </div>   

//                     <p>
//                       <IoIosPin className='jicons'/>{newsTemplate.location}
//                     </p>

//                     <div className="desc">
//                       <p> 
//                         {newsTemplate.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))
//               }
//             </div>

//         </div>

//         <Footer />
//       </div>
        
//     }
//             {
//               displayJobs &&
//             <JobDetails details={details}  closepage={close} />
//             }

//     </>
//   )
// }

// export default Job

import React, { useEffect, useState } from 'react';
import './job.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FiSearch } from 'react-icons/fi';
import data from './data.json';
import { IoIosPin } from "react-icons/io";
import JobDetails from './JobDetails';

const Job = () => {
  const [newsTemplates, setNewsTemplates] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayJobs, setDisplayJobs] = useState(false);
  const [details, setDetails] = useState();
  const [thisPage, setThisPage] = useState(false);

  useEffect(() => {
    setNewsTemplates(data); 
    setFilteredJobs(data); // Initialize with all jobs
  }, []);

  function timeSince(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const seconds = Math.floor((now - postTime) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval === 1 ? "1 year ago" : `${interval} years ago`;
  
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval === 1 ? "1 month ago" : `${interval} months ago`;
  
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval === 1 ? "1 day ago" : `${interval} days ago`;
  
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval === 1 ? "1 hr ago" : `${interval} hrs ago`;
  
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval === 1 ? "1 min ago" : `${interval} mins ago`;
  
    return seconds === 1 ? "1 sec ago" : `${seconds} secs ago`;
  }

  const close = () => {
    setThisPage(false);
  };
  


  const handleSearch = () => {
    const results = newsTemplates.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(results);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {!thisPage && (
        <div className="alljobs">
          <Header />

          <div className="searchbox">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <span>
                <input
                  type="search"
                  name="searchme"
                  id="search"
                  placeholder="Search by Keyword, job title, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <button type="submit">
                  <FiSearch />
                </button>
              </span>
            </form>

            <p>Job Search results</p>
          </div>

          <div className="jobContain">
            <div className="joblist">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div className="jcard" key={job.id}>
                    <div className="jhead">
                      <h2
                        onClick={() => {
                          setDetails({
                            id: job.id,
                            title: job.title,
                            about: job.about,
                            postedon: job.postedon,
                            location: job.location,
                            type: job.type,
                            schedule: job.schedule,
                            salary: job.salary,
                            benefits: job.benefits,
                            company: job.company,
                            careerlevel: job.careerlevel,
                            travel: job.travel,
                            educational_level: job.educational_level,
                            category: job.category,
                          });
                          setDisplayJobs(true);
                          setThisPage(true);
                        }}
                      >
                        {job.title}
                      </h2>
                      <p>{timeSince(job.postedon)}</p>
                    </div>

                    <div className="jcontent">
                      <span className="btn">{job.type}</span>
                      <span className="btn">{job.schedule}</span>
                      <span className="btn">{job.salary}</span>
                    </div>

                    <p>
                      <IoIosPin className="jicons" />
                      {job.location}
                    </p>

                    <div className="desc">
                      <p>{job.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No jobs found for "{searchQuery}"</p>
              )}
            </div>
          </div>

          <Footer />
        </div>
      )}

      {displayJobs && <JobDetails details={details} closepage={close} />}
    </>
  );
};

export default Job;
