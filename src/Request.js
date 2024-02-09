const API_KEY = "1b06aed5abac4a4bccc7545ad66fb945";
const Request = {
    fetchTrendingDay: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTrendingWeek: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28&append_to_response=videos`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35&append_to_response=videos`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27&append_to_response=videos`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`,
    fetchMystery: `/discover/movie/?api_key=${API_KEY}&with_genres=9648&append_to_response=videos`,
    fetchScifi: `/discover/movie/?api_key=${API_KEY}&with_genres=878&append_to_response=videos`,
    fetchWestern: `/discover/movie/?api_key=${API_KEY}&with_genres=37&append_to_response=videos`,
    fetchAnimation: `/discover/movie/?api_key=${API_KEY}&with_genres=16&append_to_response=videos`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`,




}

export default Request;
export {API_KEY};
// 'https://api.themoviedb.org/3/movie/343611?&append_to_response=videos&api_key=1b06aed5abac4a4bccc7545ad66fb945'
// https://api.themoviedb.org/3/movie/157336?api_key=1b06aed5abac4a4bccc7545ad66fb945&append_to_response=videos
// 'https://api.themoviedb.org/3/search/movie?query=aquaman&api_key=1b06aed5abac4a4bccc7545ad66fb945'