
import { createSlice } from "@reduxjs/toolkit";
import useFetchMovieData from "../CoustomHook/useFetchMovieData";

const MovieSearch = createSlice({
    name: "MovieSearch",
    initialState: [],
    reducers: {
        searchMovie(state, action) {
            if(state.length > 0){
                state.pop()
            }
            state.push(action.payload)
          
        },
        removeState(state,action){
           state= []
        }


    }




})


export const { searchMovie } = MovieSearch.actions;
export const { removeState } = MovieSearch.actions;
export default MovieSearch.reducer;














