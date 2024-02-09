import React, { Suspense } from 'react'
import NavBar from '../nvabar/NavBar'
import "./homescreen.css"
import { API_KEY } from '../Request'
import { ErrorBoundary } from 'react-error-boundary'
import fallBack from '../Erroboundry/ErrorBoundry'
const Banner = React.lazy(() => import("../bannenr/Banner"))
const MovieLists = React.lazy(() => import('../trendingmovielists/MovieLists'));
const Footer = React.lazy(() => import('../Footer/Footer'))

const HomeScreen = () => {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <div className='homescreen'>

      <NavBar />
      <ErrorBoundary FallbackComponent={fallBack} onReset={()=>window.location.reload()}>
        <Suspense fallback={<div>loading...</div>}>
          <Banner />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={fallBack} onReset={() => refresh()}>
        <Suspense fallback={<div>loading...</div>}>
          <MovieLists title={"Trending Movies of Day"} fetchData={`/trending/movie/day?api_key=${API_KEY}`} isTop={true}/>
          <MovieLists title={"Top Rated Movies in India"} fetchData={`/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi`} />
          <MovieLists title={"ActionMovies"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=28&append_to_response=videos`} />
          <MovieLists title={"Trending Movies of Week"} fetchData={`/trending/movie/week?api_key=${API_KEY}` } isTop={true}/>
          <MovieLists title={"ComedyMovies"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=35&append_to_response=videos`} />
          <MovieLists title={"HorrorMovies"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=27&append_to_response=videos`} />
          <MovieLists title={"Sci Fi"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=878&append_to_response=videos`} />
          <MovieLists title={"Western"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=37&append_to_response=videos`} />
          <MovieLists title={"Romance"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`} />
          <MovieLists title={"Animation"} fetchData={`/discover/movie/?api_key=${API_KEY}&with_genres=16&append_to_response=videos`} />
          <MovieLists title={"Trending Tv Shows"} fetchData={`/trending/tv/week?api_key=${API_KEY}`} />


        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={fallBack} onReset={() => refresh()}>
        <Suspense fallback={<><p>loading</p></>}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
     
    </div>
  )
}











export default HomeScreen