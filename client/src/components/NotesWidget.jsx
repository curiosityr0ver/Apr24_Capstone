import styles from "./NotesWidget.module.css";

function NotesWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>All Notes</p>
      </div>
      <textarea />
    </div>
  );
}

export default NotesWidget;
