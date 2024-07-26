import React from "react";
import styles from "./CarouselPage.module.css";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";

function CarouselPage() {
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
		</div>
	);
}

export default CarouselPage;
