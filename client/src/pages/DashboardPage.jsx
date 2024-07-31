import React from "react";
import styles from "./DashboardPage.module.css";
import ProfileWidget from "../components/ProfileWidget";
import TimerWidget from "../components/TimerWidget";
import NotesWidget from "../components/NotesWidget";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";

function DashboardPage() {
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>
				<ProfileWidget />
			</div>
			<div className={styles.weatherWidget}>
				<WeatherWidget />
			</div>
			<div className={styles.timerWidget}>
				<TimerWidget />
			</div>
			<div className={styles.notesWidget}>
				<NotesWidget />
			</div>
			<div className={styles.newsWidget}>
				<NewsWidget />
			</div>
		</div>
	);
}

export default DashboardPage;
