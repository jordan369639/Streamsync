import React from 'react'
import profilepic from "./profilepic.jpg"
import "./profile.css"
import { logout } from '../app/LoginLogout'
import { useDispatch } from 'react-redux'
import { getAuth } from 'firebase/auth'
import { app } from '../Firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth(app)
  const handlepage = ()=>{
    signOut(auth);
    navigate("/")
    
  }
  return (
    <div className="profile">
        <div className="profileBox">
            <section className="profileIcon">
             <img src={profilepic} alt="" />
           
            </section>
            <div className="profileDetails">
               <p>current plan  </p>
               <pre>( premium )</pre>
               <p>aminul9365@gmail.com</p>
             
            </div>
            <div className="subsription_details">
             <p>Your plan is valid upto 12/12/12</p>
             <section className="plan1">
              <p>StreamSync Basic<pre>( 720P )</pre></p>
              <button className='subsbtn'>subscribe</button>
            </section>
            <section className="plan2">
            <p>StreamSync Premium<pre>( 1080P )</pre></p>
              <button  className='subsbtn'>subscribe</button>
            </section>
             <button onClick={()=> handlepage()} className='logoutbtn'>signout</button>
             


            </div>
            
        </div>
    </div>
  )
}

export default Profile