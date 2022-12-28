export const APIKEY = process.env.REACT_APP_API_KEY || "";

export const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc`;

export const API_SINGLE_MOVIE_URL = `https://api.themoviedb.org/3/movie/<movie_id>?api_key=${APIKEY}`;
