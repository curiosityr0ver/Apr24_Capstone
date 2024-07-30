import styles from "./GenrePage.module.css";
import defaultGenres from "../data/genres";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function GenrePage() {
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedGenres.length >= 3) {
      setError(false);
    }
  }, [selectedGenres]);

  const handleNext = () => {
    if (selectedGenres.length < 3) {
      setError(true);
    } else {
      navigate("/carousel");
    }
  };

  const handleSelectGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.heading}>Super app</h3>
        <h2 className={styles.subHeading}>
          Choose your entertainment category
        </h2>
        <div className={styles.selectedGenres}>
          {selectedGenres.map((genre, index) => (
            <div
              key={index}
              className={styles.selectedGenre}
              onClick={() => handleSelectGenre(genre)}
            >
              {genre}
            </div>
          ))}
          {error && (
            <p className={styles.error}> Minimum 3 category required</p>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.genres}>
          {defaultGenres.map((genre, index) => (
            <div
              key={index}
              className={styles.genre}
              onClick={() => handleSelectGenre(genre)}
            >
              {genre}
            </div>
          ))}
        </div>
        <button onClick={handleNext}>Next Page</button>
      </div>
    </div>
  );
}

export default GenrePage;
