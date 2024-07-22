import React from "react";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
	return (
		<div className={styles.container}>
			<h1>404 Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
		</div>
	);
}

export default NotFoundPage;
