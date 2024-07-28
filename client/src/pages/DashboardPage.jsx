import React from "react";
import styles from "./DashboardPage.module.css";
import TimerWidget from "../components/TimerWidget";
import WeatherWidget from "../components/WeatherWidget";
import ProfileWidget from "../components/ProfileWidget";
import NewsWidget from "../components/NewsWidget";
import Notes from "../components/Notes";
function DashboardPage() {
	return (
		<div className={styles.container}>
			<div className={styles.div1}>
				<ProfileWidget/>
			</div>
			<div className={styles.div2}>
				<WeatherWidget/>
			</div>
			<div className={styles.div3}>
				<TimerWidget />
			</div>
			<div className={styles.div4}>
				<Notes/>
			</div>
			<div className={styles.div5}>
				<NewsWidget/>
			</div>
		</div>
	);
}

export default DashboardPage;
