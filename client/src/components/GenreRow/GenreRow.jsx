/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import fetchMovieByGenre from "../../api/fetchMovieByGenre";
import styles from "./GenreRow.module.css";

function GenreRow({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMovieByGenre(genre.id);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genre.id]);

  return (
    <div className={styles.container}>
      {movies.slice(0, 4).map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

export default GenreRow;
