import React, { Suspense, useState } from 'react'
import loginImg from "./loginPoster.jpg"
import "./login.css"
import SignUp from './signUp';
import logo from "../images/SSLOGO1.webp"
const LoginPage = () => {
const[valid,setValid] = useState(true);
const[signup,setsignuppage] = useState(false);
const[email,setemail] = useState("")
const validateEmail = (email)=>{
     let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(email.match(validRegex)){
      setemail(email)
      return true;
     }
}
const setSignup = (e)=>{
e.preventDefault();
setsignuppage(true);
}

  return (
    <>
    
    {signup ? <><SignUp email={email}/></>:<> <div className='loginArea'
    style={{ backgroundImage: `url(${loginImg})` }}
    
    >
<div className="header">

  <section className='loginLogo'><img src={logo} alt="" /></section>
  <button onClick={(e)=>setSignup(e)} className='siginbtn'>sign in</button>
</div>
<div className="aboutStreamsync">
  <h2>Unlimited Movies And Web Series And Much More</h2>
  <p>Ready to watch? Enter your email to create or restart your membership.</p>
</div>
<div className="inputField">
  
<input type="email" name="" id="logininput" className='emailInput'onChange={(e)=> setValid(validateEmail(e.target.value))}
/>
<button className='loginbtn' onClick={(e)=> setSignup(e)}>login</button><br />
</div>
<section className='alert'>
{
  valid ? <></>:<><p>Please Enter a Valid Email</p></>
}
</section>


    </div>
   
    
    </>}
    </>
  )
}

export default LoginPage