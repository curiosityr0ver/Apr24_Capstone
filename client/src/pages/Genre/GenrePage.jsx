import styles from "./GenrePage.module.css";
import { genres } from "../../data/genres";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function GenrePage() {
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);
  const [error, setError] = useState(false);
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
    if (selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.heading}>Super App</h3>
        <h2 className={styles.subHeading}>
          Choose your entertainment category
        </h2>
        <div className={styles.selectedGenres}>
          {selectedGenres.map((genre) => (
            <div
              key={genre.id}
              className={styles.selectedGenre}
              onClick={() => handleSelectGenre(genre)}
            >
              {genre.name}
              <RxCross2 className={styles.removeIcon} />
            </div>
          ))}
          {error && (
            <p className={styles.error}>Minimum 3 categories required</p>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.genres}>
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={`${styles.genre} ${
                selectedGenres.some(
                  (selectedGenre) => selectedGenre.id === genre.id
                )
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectGenre(genre)}
            >
              <img
                src={genre.image}
                alt={genre.name}
                className={styles.genreImage}
              />
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GenrePage;
