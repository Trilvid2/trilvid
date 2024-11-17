import React from 'react'
import './faq.css'
import { useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'

const Faqs = () => {
    const [faqs,setFaqs] = useState([
        {
            id:1,
            active:true,
            question:'What are the current trends in the remote job market? ',
            answer:"The remote job market has transformed significantly in recent years, with more employers embracing flexible work options. Industries like tech, customer service, healthcare, and marketing tend to offer the most remote opportunities. Remote work is now seen as a major factor for achieving work-life balance, with many job seekers prioritizing it when evaluating career options. As businesses adapt, remote work is becoming part of 'business as usual' and staying updated on trends is key to future-proofing your career.",
        },
        {
            id:2,
            active:false,
            question:'How can I find legitimate remote jobs? ',
            answer:"Finding legitimate remote jobs involves using trusted job boards, like Magaworking, that screen listings to ensure quality and authenticity. Avoid job offers that sound too good to be true, require upfront payments, or have vague job descriptions. Magaworking is committed to providing a safe and scam-free platform for job seekers looking for flexible, remote, or hybrid roles.",
        },
        {
            id:3,
            active:false,
            question:'What skills are most in demand for remote jobs?',
            answer:'Skills like digital communication, time management, self-discipline, and technical proficiency are highly valued for remote work. Proficiency in collaboration tools (e.g., Zoom, Slack) and project management software is also beneficial. Depending on your field, specific skills like coding, customer service expertise, or digital marketing can make you more competitive in the remote job market',
        },
        {
            id:4,
            active:false,
            question:'Is remote work here to stay? ',
            answer:'Yes, remote work is likely to remain a significant part of the job market. Many companies have seen the benefits of remote work, including reduced overhead costs and increased employee satisfaction. Additionally, job seekers now value flexibility more than ever, making it a standard offering for many employers across various industries.',
        },
        {
            id:5,
            active:false,
            question:'How can I improve my productivity while working from home?',
            answer:'Staying productive while working remotely requires setting a structured schedule, creating a dedicated workspace, and minimizing distractions. Tools like time trackers and to-do lists can help keep you on track. Taking regular breaks and maintaining a balance between work and personal life are also crucial for sustained productivity.',
        },
        {
            id:6,
            active:false,
            question:'What are the benefits of choosing a flexible job?',
            answer:'Flexible jobs offer numerous benefits, including a better work-life balance, reduced commuting time and expenses, and more control over your schedule. This flexibility can be especially valuable for parents, caregivers, or individuals managing health issues. It allows professionals to work in ways that suit their lifestyles, enhancing job satisfaction and overall well-being.',
        },
    ])

    const dropDown = (id)=>{
        setFaqs(
        faqs.map(faq => faq.id === id ? {...faq, active:!faq.active} : {...faq, active:false}))
        console.log(faqs)
    }
    
  return (
    <div className='faq-section' id='faq'>
        
        <div className="faq-container">


            {
                faqs.map(faq =>
                    <div className="faq-card" key={faq.id} data-aos="fade-up">
                        <div className="question-tab">
                            <h2>{`${faq.question}`}</h2>
                            <span className={`dropdown-btn ${faq.active && 'rotate'}`} onClick={()=>{
                                dropDown(faq.id)
                            }}>
                                <HiOutlineChevronDown />
                            </span>
                        </div>
                        
                        <div className={`answer-tab ${faq.active && 'drop'}`}>
                            <p>{faq.answer}</p>
                        </div>  
                        
                    </div>
                )
            }
        </div>

    </div>
  )
}

export default Faqs