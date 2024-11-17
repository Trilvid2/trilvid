import React , {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../pages/Loader';
import Swal from 'sweetalert2';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { BsBoxSeamFill, BsBoxSeam, BsBoxes } from "react-icons/bs";
import { IoPricetagsSharp } from "react-icons/io5";
import { AiOutlineNumber } from "react-icons/ai";


const AdminInput = ({route}) => {
    const navigate = useNavigate()
    const [trackId,setTrackId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [refer, setRefer] =  useState('')
    const [name, setName] =  useState('')
    const [userName, setUserName] =  useState('')
    const [phone, setPhone] =  useState('')
    const [country, setCountry] =  useState('')
  
    const [loader, setLoader] = useState(false)

  // signup function 
  const Signup = async ()=>{
    setLoader(true)
    const req = await fetch(`${route}/api/register`, 
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          product:email,
          min: name,
          max:userName,
          gprice:password,
          nprice:refer,
          scommission:phone,
          bcommission:country,
          trackid: trackId
        })
      }
      )
      const res = await req.json()
      setLoader(false)

      if(res.status === '200') {
          Swal.fire({
            title: 'success',
            text: "Order created",
            icon: 'success'
          })
        }
    
      else if(res.status === '400') {
          Swal.fire({
            title: 'error',
            text: `${res.message}`,
            icon: 'error',
            confirmButtonText: 'retry'
          })
      }
    
    }
    
  

  return (  
    <main className='signUp-page'>
        <Header />
      
      {
        loader && <Loader />
      }
      
          <div className="login-form-container"
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            transition={{duration:0.3}}
          >

          <form className="form_container" onSubmit={ (e) => {
            e.preventDefault()
            Signup()}}>
            
  <div className="logo_container">
    <img src="/logos.png" alt="file not found"  onClick={()=>{ navigate('/')}} />
  </div>
  <div className="title_container">
    <p className="title">Create an Order</p>
  </div>
  <br />
 

  <div className="input_container">
    <label className="input_label" for="email">Tracking No</label>
    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <AiOutlineNumber />
    </svg>
    
    
    <input 
    placeholder="738494895" 
    title="please input the product name" 
    name="text" 
    autocomplete="off"
    required
    type="text" 
    className="input_field" 
    value={trackId}
    id="email"
    onChange={(e)=>{
        setTrackId(e.target.value)}}
        maxLength='10'
     />
  </div>


  <div className="input_container">
    <label className="input_label" for="email">product name</label>
    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <BsBoxSeamFill />
    </svg>
    
    
    <input 
    placeholder="Product name" 
    title="please input the product name" 
    name="text" 
    autocomplete="off"
    required
    type="text" 
    className="input_field" 
    value={email}
    id="email"
    onChange={(e)=>{
      setEmail(e.target.value)}}
     />
  </div>



  <div className="input_container">
    <label className="input_label" for="mother">Minimum Quantity</label>

    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <BsBoxSeam />
    </svg>
    
    <input 
    name="wallet" 
    id="mother" 
    className='input_field' 
    title="please fill in the field" 
    value={name}
    onChange={(e)=>{
      setName(e.target.value)}}
    autocomplete="off"
    placeholder='10'
    required />

  </div>
  
  <div className="input_container">
    <label className="input_label" for="ssn">Maximum Quantity</label>

    <svg fill="none" viewBox="0 0 15 18" width="45" xmlns="http://www.w3.org/2000/svg" className="icon">
     <BsBoxes />
    </svg>
    
    <input 
    placeholder="100,000" 
    title="Enter your username" 
    name="text" 
    autocomplete="off"
    required
    type="text" 
    className="input_field" 
    value={userName}
    id="ssn"
    onChange={(e)=>{
      setUserName(e.target.value.trim())}}
     />
  </div>
  

  <div className="input_container">
    <label className="input_label" for="password_field"> Gross Price</label>
    <section className='input_pass_container'>
      
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
    <IoPricetagsSharp />
    </svg>

    <input 
    placeholder="Gross Price ($100)" 
    title="Please input your Price" 
    name="text" 
    type="tel" 
    class="input_field" 
    id="password_field"
    required
    value={password}
    autocomplete="off"
    onChange={(e)=>{
      setPassword(e.target.value)
    }}
    />
    </section>
  </div>
  

  
  <div className="input_container">
    <label className="input_label" for="tax">Net Price</label>

    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <IoPricetagsSharp />
    </svg>
    
    <input 
    placeholder="net price($50)" 
    title="please input net price" 
    name="tel" 
    autocomplete="off"
    required
    type="text" 
    className="input_field"   
    value={refer}
    id="tax"
    onChange={(e)=>{
      setRefer(e.target.value.trim())}}
     />
  </div>
  
  <div className="input_container">
    <label className="input_label" for="ssn">Seller Commision</label>

    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <IoPricetagsSharp />
    </svg>
    
    <input 
    placeholder="Seller Commission price ($10)" 
    title="Enter your commission number" 
    name="tel" 
    autocomplete="off"
    required
    type="tel" 
    className="input_field" 
    value={phone}
    id="ssn"
    onChange={(e)=>{
      setPhone(e.target.value.trim())}}
     />
  </div>
  
  <div className="input_container">
    <label className="input_label" for="ssn">Buyer Commission</label>

    <svg fill="none" viewBox="0 0 15 18" width="40" xmlns="http://www.w3.org/2000/svg" className="icon">
     <IoPricetagsSharp />
    </svg>
    
    <input 
    placeholder="Buyer Commission" 
    title="Enter your Buyer's Commission fee" 
    name="tel" 
    autocomplete="off"
    required
    type="tel" 
    className="input_field" 
    value={country}
    id="ssn"
    onChange={(e)=>{
      setCountry(e.target.value)}}
     />
  </div>
  
  <br />
  
  <button title="Sign In" type="submit" class="sign-in_btn">
    <span>Submit Order</span>
  </button>
  
<br />


</form>

          </div> 
    </main>
  )
}

export default AdminInput