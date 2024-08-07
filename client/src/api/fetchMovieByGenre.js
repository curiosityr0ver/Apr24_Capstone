import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const fetchMovieByGenre = async (id) => {
  console.log("fetchMovieByGenre: ", id);
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
        with_genres: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Failed to fetch movies by genre: ", error);
  }
};

export default fetchMovieByGenre;
