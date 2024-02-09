import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faPlay } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube'
const SearchMovie = ({data,setTrailerId,handleTrailer,trailerId}) => {
  const opts = {
    height: '270',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
   <>
   
   <div className="movie_area">

  <div className="main_movie">
  <div className="searchVideo">
  <button className={`cancel ${trailerId && "activeCancel"}`} onClick={()=> setTrailerId("")}><FontAwesomeIcon icon={faXmark} /></button>
  {trailerId &&  <  YouTube videoId={trailerId} opts={opts}/>}

      </div>
  <div className="poster"
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${data[0].poster_path}")`,
    backgroundPosition: "center",
    backgroundSize:" cover",
    backgroundRepeat: "no-repeat",
  }}
  
  
  >
  </div>  
  <div className="playbutton">
  <button className='playbtn' onClick={() => handleTrailer(data[0].title)}><FontAwesomeIcon icon={faPlay} /><p>PLAY</p></button>
  </div>
    
  </div>  
 
    <div className=" rowlist">
      {
        data.map((elem,i)=>{
          return(
            
            <div className="searchPosters "  key={elem.title + i}>
            <div className="img posterImg">

              <img src={`${"https://image.tmdb.org/t/p/original/"}${elem.poster_path || elem.backdrop_path}`} alt={elem.tile} key={elem.name || elem.backdrop_path}/>
              <div className="searchplayBtn ">

              <button className='playbtn' onClick={() => handleTrailer(elem.title)}><FontAwesomeIcon icon={faPlay} /><p>PLAY</p></button>
              </div>
            </div>


          </div>
          )
        })
      }
    
    </div>
    
  </div> 
   
   </>
  )
}

export default SearchMovie