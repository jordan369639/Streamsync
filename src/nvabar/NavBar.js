import React, { useEffect, useRef, useState } from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../app/MovieSearch';
import Axio from "../Axio";
import debounce from "lodash/debounce";
import { useCallback } from 'react';
import { removeState } from '../app/MovieSearch';
import logo from "../images/Logo.png"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router';
// import { HashLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
  const [show,setshow] = useState(false);
  const dispatch = useDispatch();
  const [display,setDisplay] = useState(false);
  const [active ,setActive] = useState(false);
  const[inputValue,setInputValue] = useState('');
  const input = useRef('');
  const navigate = useNavigate()
  const searchbox = useRef();

useEffect(() => {
window.addEventListener("scroll",()=>{
  if(window.scrollY >100){
    setshow(true);
   
    }else{
      setshow(false);
    }
})
return ()=>{
  window.removeEventListener("scroll",()=>{
    if(window.scrollY >100){
      setshow(true);
      }else{
        setshow(false);
      }
 
  })
}

}, [])

const handleSearch =  ()=>{
   setActive(!active)

  
setTimeout(()=>{
  searchbox.current.focus()
},0)
}

const setMovie = (val)=>{
if(val.length < 1){
  dispatch(removeState(""))
}
async  function FetchMovie(){
    try{
      const request = await fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=1b06aed5abac4a4bccc7545ad66fb945`);
      let movie =  await request.json();
      dispatch(searchMovie(movie.results))
    }catch(err){
      console.log(err)
    }
  }
  FetchMovie();

} 
const handleDisplay = ()=>{
setDisplay(!display);
}
const redirectTo = ()=>{
  navigate('/profile')
}

const debouncedHandleSearch = useCallback(debounce(setMovie, 900), []);

  return (

    <div className={`navbar ${show && "nav_black"}`} >
      <div className="menuItems">
        <button className='bars' onClick={()=> handleDisplay()}><FontAwesomeIcon icon={faBars} /></button>
      <div className={`dropMenu  ${display? `visible`:`hidden`}`}>
    
        <ul >
        <li> <HashLink smooth to={"#banner"}>Home</HashLink>Home</li>
        <li> <HashLink smooth to={"#Trending Tv Shows"}>TV Show</HashLink></li>
        <li> <HashLink smooth to={""}>Movies</HashLink></li>
        <li> <HashLink smooth to={""}>New & Populor</HashLink></li>
        <li> <HashLink smooth to={""}>My List</HashLink></li>

        <button className='back'><FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>handleDisplay()}/></button>
        </ul> 
        </div>
      </div>
      <section className='logo'>
      <img src={logo} alt="" />
      </section>
      <div className="Entr_list">
  <section className='browse' onClick={()=>handleDisplay() }>Browse  <span><FontAwesomeIcon icon={faCaretDown} /></span></section>
        <ul className={`category ${display && `activeDisplay`}`} >
        <li> <HashLink smooth to={"#banner"}>Home</HashLink></li>
        <li> <HashLink smooth to={"#Trending Tv Shows"}>TV Show</HashLink></li>
        <li> <HashLink smooth to={"#Trending Movies of Week"}>Movies</HashLink></li>
        <li> <HashLink smooth to={"#Trending Movies of Day"}>New & Populor</HashLink></li>
        <li> <HashLink smooth to={""}>My List</HashLink></li>
        
        </ul> 
        </div>
          
    
        <div className='prf_list'>
           
            <input type="search" name="search" id="inputField" 
            className={`search_box ${active && "active"}`}
             placeholder='Title,name'
              ref={searchbox}
              onChange={(e)=> debouncedHandleSearch(e.target.value)}
             
              />
              
           
            <div className="icons">

          
           <div className="searchIcon">
           <button className='search_btn' onClick={()=> handleSearch()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
           </div>
            
            <div className="user">
            <button  id ="user" className='user' onClick={()=> redirectTo()}><FontAwesomeIcon icon={faUser} /></button>
            </div>
            </div>
            </div>
            
        
    
    </div>
  )
}

export default NavBar