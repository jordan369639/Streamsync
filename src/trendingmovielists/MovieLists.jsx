import React, { useState, useEffect, useRef } from 'react'
import "./movielist.css"
import Axio from "../Axio";
import Request from '../Request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MovieLists = ({ title, fetchData ,isTop}) => {
  const [movie, setMovie] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const clickdiv = useRef();
  useEffect(() => {
    async function fetchdata() {

      try {
        const request = await Axio.get(fetchData);

        const result =  request.data.results;
        const top10 = result.slice(0,9);
       if(isTop){
        setMovie(
          top10
        )
       }else{
        setMovie(
          result
        )
       }
       
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchdata();

  }, [fetchData])




  const handleTrailer = (movie) => {

    if (trailerId) {
      setTrailerId("");
    } else {

      movieTrailer(movie?.title || "").then((url) => {
        let trailer = new URLSearchParams(new URL(url).search);
        setTrailerId(trailer.get('v'))
      }).catch((err) => {
        console.log(err)
      })

    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const scrollright = (e) => {
    let ref = e.target.parentElement.parentElement;
    ref.scrollLeft += ref.clientWidth;
  };
  
  const scrollLeft = (e) => {
    let ref = e.target.parentElement.parentElement;
    ref.scrollLeft -= ref.clientWidth;
  };
  return (

    <div className='movieList'>
     
      <h2 className='title' id={title}>{title}</h2>
      <div className="rowPoster">
        <div className="rightbtn">

      <button className='right' onClick={(e)=> scrollLeft(e)}><FontAwesomeIcon icon={faChevronLeft} /></button>
        </div>
        <div className="leftbtn">

<button className='left' onClick={(e)=> scrollright(e)}><FontAwesomeIcon icon={faChevronRight} /></button>
</div>
        {
          movie.map((elem, i) => {
            return (

              <div className="moviePosters" ref={clickdiv} key={elem.title+(i*2) || elem.backdrop_path} id={title}>
                <div className={`img ${isTop && "imgActive"}`}>
                <div className={`count ${isTop && "countActive"} `}>
                <h2>{i+1}</h2>
               </div>
                  <img src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`} alt="" key={elem.title+i+i || elem.backdrop_path} className={`${isTop} && "TopImg"`}/>
                  <div className="playBtn">
                <button onClick={(e) => handleTrailer(elem)}><FontAwesomeIcon icon={faCirclePlay} /></button>

                  </div>
                  
                </div>
                   

              </div>
            )
            
          })
          
        }
       

      </div>
      <div className="video " >
      <button className={`cancelbtn ${trailerId && "cancelbtnActive"}`} onClick={()=> setTrailerId("")}><FontAwesomeIcon icon={faXmark} /></button>
        {trailerId && <  YouTube videoId={trailerId} opts={opts} />}
      </div>
    </div>



  )
}

export default MovieLists