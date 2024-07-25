import React from "react";
import styles from "./CarouselPage.module.css";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";

function CarouselPage() {
	return (
		<div className={styles.container}>
			<div className={styles.profileWidget}>
				<ProfileWidget />
			</div>
			<div className={styles.weatherWidget}>
				<WeatherWidget />
			</div>
			<div className={styles.newsWidget}>newsWidget</div>
		</div>
	);
}

export default CarouselPage;
