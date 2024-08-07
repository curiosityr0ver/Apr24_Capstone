import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "./MoviePage.module.css";
import userAvatarSM from "../../assets/userAvatar-sm.png";
import GenreRow from "../../components/GenreRow/GenreRow";
import { useNavigate } from "react-router-dom";

function MoviePage() {
  const { clearAppData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAppData();
    navigate("/");
  };

  const { selectedGenres } = useContext(AppContext);
  console.log(selectedGenres);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Super App</p>
        <img src={userAvatarSM} alt="User Avatar" />
      </div>
      <div className={styles.movies}>
        {selectedGenres?.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <h3 className={styles.genreName}>{genre.name}</h3>
            <GenreRow genre={genre} />
          </div>
        ))}
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default MoviePage;
