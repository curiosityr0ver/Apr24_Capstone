import React from "react";
import styles from "./DashboardPage.module.css";
import TimerWidget from "../components/TimerWidget";

function DashboardPage() {
	return (
		<div className={styles.container}>
			<div className={styles.div1}></div>
			<div className={styles.div2}></div>
			<div className={styles.div3}>
				<TimerWidget />
			</div>
			<div className={styles.div4}></div>
			<div className={styles.div5}></div>
		</div>
	);
}

export default DashboardPage;
