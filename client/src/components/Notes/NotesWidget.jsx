import { useContext } from "react";
import styles from "./NotesWidget.module.css";
import { AppContext } from "../../context/AppContext";

function NotesWidget() {
  const { notes, setNotes } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>All Notes</p>
      </div>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
    </div>
  );
}

export default NotesWidget;
