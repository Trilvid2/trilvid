import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './style.css'

const InterviewPage = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const startTime = parseInt(queryParams.get('startTime'), 10);
    const currentTime = Math.floor(Date.now() / 1000);

    if (!startTime || currentTime - startTime >= 5 * 60) {
      setIsExpired(true);
      setTimeLeft(0);
    } else {
      setTimeLeft(5 * 60 - (currentTime - startTime));
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.search]);

  const handleSubmit = () => {
    setIsSubmitted(true);

    // Collect form data (e.g., answer) and send via EmailJS
    const formResponses = {
      answer: document.getElementById('answer').value,
    };

    const emailParams = {
      to_email: 'recipient@example.com', // Replace with your recipient email
      responses: JSON.stringify(formResponses), // Send responses as JSON
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_PUBLIC_KEY')
      .then((response) => {
        console.log('Response email sent successfully!', response.status, response.text);
        navigate("/link-invalid");
      }, (error) => {
        console.log('Failed to send response email:', error);
      });
  };

  if (isExpired) {
    return navigate("/invalid-page");
  }

  return (
    <div>
    <div className="alljobs">
      <Header />
      <div className="timer">
      <h2>Please answer all Questions</h2>
      <span><p>Time Remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p></span>
      
      </div>

      {!isSubmitted ? (
          <div className="interview">
            <form 
            onSubmit={handleSubmit}
            >          
          
                <fieldset>
                    <label htmlFor="name">Can you tell me about your background and experience in this industry</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setfirstname(e.target.value.trim())}}
                    required/>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="q2">What programming tools are you proficient in, and how have you applied them in previous roles?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q2" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="q3">How do you stay up-to-date with the latest developments in</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q3" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q4">What strategies do you use to stay organized and focused while working remotely?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q4" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q5">Can you describe your experience with virtual communication tools (e.g., Slack, Zoom, Trello)?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q5" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q6">Describe a time when you encountered a complex problem in your previous role. How did you approach and resolve it?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q6" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q7">How do you prioritize tasks and manage competing deadlines in a fast-paced environment?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q7" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q8">Can you give an example of a successful team project you've worked on? What was your role, and how did you contribute?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q8" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q9">How do you handle conflicting opinions or disagreements with team members?</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q9" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>

                
                <fieldset>
                    <label htmlFor="q10">How do you adapt to changes in project scope, deadlines, or priorities?
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="q10" 
                    placeholder='Answer' 
                    // onChange={(e)=>{
                    //   setAnswer(e.target.value.trim())}}
                    required/>
                </fieldset>


                    <fieldset>
                        <button type="submit">Submit</button>
                    </fieldset>        
        </form>
            </div>
      ) : (
        <div className='invalid'>
            <img src="/Goal.gif" alt="" />
            <span>The interview time has ended, and your response has been submitted.</span>
            
            </div>
      )}
      <Footer />
    </div>
    </div>
  );
};

export default InterviewPage;
