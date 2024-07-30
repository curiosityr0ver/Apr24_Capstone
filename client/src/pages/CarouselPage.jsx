import ProfileWidget from "../components/ProfileWidget";
import styles from "./CarouselPage.module.css";

function CarouselPage() {
  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}><ProfileWidget/></div>
      <div className={styles.weatherWidget}>weatherWidget</div>
      <div className={styles.newsWidget}>newsWidget</div>
    </div>
  );
}

export default CarouselPage;
