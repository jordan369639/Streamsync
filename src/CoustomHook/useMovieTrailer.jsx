
import { useState } from "react";
import movieTrailer from 'movie-trailer';
const useMovieTrailer = (movieTitle)=>{
    const [trailerId ,setTrailerId] = useState("");
    if(trailerId == ""){
      setTrailerId("");
    }else{
      movieTrailer(movieTitle||"").then((url)=>{
    let trailer =  new URLSearchParams(new URL(url).search);
    
    setTrailerId(trailer.get('v'))
      }).catch((err)=>{
        console.log(err)
      })
      
    }
    return [trailerId];
     }
     export default useMovieTrailer;