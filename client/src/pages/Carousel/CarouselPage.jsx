import { useNavigate } from "react-router-dom";
import NewsWidget from "../../components/News/NewsWidget";
import ProfileWidget from "../../components/Profile/ProfileWidget";
import WeatherWidget from "../../components/Weather/WeatherWidget";
import styles from "./CarouselPage.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function CarouselPage() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}>
        <ProfileWidget />
      </div>
      <div className={styles.weatherWidget}>
        <WeatherWidget />
      </div>
      <div className={styles.newsWidget}>
        <NewsWidget />
      </div>
      <button className={styles.nextButton} onClick={handleDashboard}>
        My Dashboard
        <MdOutlineKeyboardArrowRight className={styles.rightArrow} />
      </button>
    </div>
  );
}

export default CarouselPage;
