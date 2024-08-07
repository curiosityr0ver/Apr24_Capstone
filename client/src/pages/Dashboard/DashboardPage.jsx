import NewsWidget from "../../components/News/NewsWidget";
import NotesWidget from "../../components/Notes/NotesWidget";
import TimeWidget from "../../components/Time/TimeWidget";
import styles from "./DashboardPage.module.css";
import ProfileWidget from "../../components/Profile/ProfileWidget";
import WeatherWidget from "../../components/Weather/WeatherWidget";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/movies");
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}>
        <ProfileWidget />
      </div>
      <div className={styles.weatherWidget}>
        <WeatherWidget />
      </div>
      <div className={styles.timeWidget}>
        <TimeWidget />
      </div>
      <div className={styles.notesWidget}>
        <NotesWidget />
      </div>
      <div className={styles.newsWidget}>
        <NewsWidget />
      </div>
      <button className={styles.nextButton} onClick={handleBrowse}>
        Browse
      </button>
    </div>
  );
}

export default DashboardPage;
