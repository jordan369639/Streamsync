import React, { Suspense, useEffect, useState } from 'react'
import "./banner.css";
import Axio from "../Axio";
import Request from '../Request';
import useFetchMovieData from '../CoustomHook/useFetchMovieData';
import useMovieTrailer from '../CoustomHook/useMovieTrailer';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ErrorBoundary } from 'react-error-boundary';
import fallBack from '../Erroboundry/ErrorBoundry';
const SearchMovie = React.lazy(()=> import('../SearchMovie/SearchMovie'))
const Banner = () => {

const randomMovie = true;
const truncate = (string) => string.length > 150 ? string.substring(0, 149) + "..." : string;
const [movie] = useFetchMovieData(Request.fetchTrendingDay,randomMovie);
const [trailerId ,setTrailerId] = useState("");
const handleTrailer = (movie)=>{
 
  if(trailerId){
    setTrailerId("");
  }else{
    movieTrailer(movie||"").then((url)=>{
  let trailer =  new URLSearchParams(new URL(url).search);
  
  setTrailerId(trailer.get('v'))
    }).catch((err)=>{
      console.log(err)
    })
    
  }
return trailerId;
}
const [data] = useSelector((state)=>{
  return state.movieSearch;
})





const searchArea = data == undefined || data.length < 1 ? true:false;
const opts = {
  height: '270',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};
  return (

<>
{searchArea ? <> 


<div className="banner"
  
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
   
 
  }}
  id='banner'

>


  <div className="movieDetails" >
     
    <div className='bannerImgSection'>
    <button className={`cancelVideo ${trailerId  && "activeCancel"}`} onClick={()=> setTrailerId("")}><FontAwesomeIcon icon={faXmark} /></button>
  {trailerId &&  <  YouTube videoId={trailerId} opts={opts}/>}

    </div>
    <h2 className='movie_type'>{movie?.original_title}</h2>
    <p className='aboutMovie'> {truncate(`${movie?.overview}`)}</p>

  </div>
  <div className="moviesController">
    <section className='play_info'>
      <button className='playbtn' onClick={() => handleTrailer(movie?.title)}><FontAwesomeIcon icon={faPlay} /><p>PLAY</p></button>
      <button className='moreinfo' onClick={()=> console.log(searchArea)}>more info</button>
    </section>
<section className="shadoweffect">

</section>
   

  </div>
</div></>:
<>
<ErrorBoundary fallback={fallBack} onReset={()=> window.location.reload()}>
<Suspense fallback={<><p>loading...</p></>}>
<SearchMovie data={data} setTrailerId={setTrailerId} handleTrailer={handleTrailer}trailerId={trailerId}/>
</Suspense>
</ErrorBoundary>
</>





}

 
  </>






  )
}

export default Banner