import React from "react";
import styles from "./MoviePage.module.css";
import userAvatarSM from "../assets/userAvatar-sm.png";

function MoviePage() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.heading}>Super App</p>
				<img src={userAvatarSM} alt="User Avatar" />
			</div>
			<div className={styles.movies}></div>
		</div>
	);
}

export default MoviePage;
