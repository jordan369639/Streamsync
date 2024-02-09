import { useState,useEffect } from "react";
import Axio from "../Axio";
const useFetchMovieData = (MovieUrl,random)=>{

    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchdata(){
          
          try{
            const request =  await Axio.get(MovieUrl);
            let randMovie = Math.floor(Math.random() * 18);
            random ? 
            setMovie(
              request.data.results[randMovie]
              ):setMovie(
                request.data.results
              )
            }
            catch(err){
              console.log(err)
            }
          }
          fetchdata();
          
        }, [])

return [movie];
}
export default useFetchMovieData;