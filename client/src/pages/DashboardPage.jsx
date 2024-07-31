import NotesWidget from "../components/NotesWidget";
import TimeWidget from "../components/TimeWidget";
import styles from "./DashboardPage.module.css";

function DashboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}>
        <TimeWidget />
      </div>
      <div className={styles.div4}>
        <NotesWidget />
      </div>
      <div className={styles.div5}></div>
    </div>
  );
}

export default DashboardPage;
