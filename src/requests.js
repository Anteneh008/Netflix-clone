const API_KEY = "0ecdf0afe60d62642b9403b78a6d5bf0";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,

};
export default requests;


// Base URL: https://api.themoviedb.org/3

// Endpoint: /movie/{movie_id}

// API Key: Replace {api_key} with your actual API key

// To get the details of a movie with a specific movie ID, you can use the following endpoint:

// https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}

// Replace {movie_id} with the actual ID of the movie you want to retrieve, and {api_key} with your TMDb API key.

// GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=GENRE_ID

