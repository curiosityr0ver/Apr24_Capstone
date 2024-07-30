import React from "react";
import styles from "./DashboardPage.module.css";
import TimerWidget from "../components/TimerWidget";
import NotesWidget from "../components/NotesWidget";

function DashboardPage() {
	return (
		<div className={styles.container}>
			<div className={styles.div1}></div>
			<div className={styles.div2}></div>
			<div className={styles.div3}>{/* <TimerWidget /> */}</div>
			<div className={styles.div4}>
				<NotesWidget />
			</div>
			<div className={styles.div5}></div>
		</div>
	);
}

export default DashboardPage;
