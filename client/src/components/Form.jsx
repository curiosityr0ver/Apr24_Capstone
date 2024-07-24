/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";
import validateForm from "../utils/validateForm";

function Form({
	name,
	setName,
	email,
	setEmail,
	username,
	setUsername,
	phone,
	setPhone,
	error,
	setError,
	submitHandler,
}) {
	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{error?.name && <p className={styles.error}>Name is required</p>}

			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			{error?.username && <p className={styles.error}>Username is required</p>}
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{error?.email && <p className={styles.error}>Valid email is required</p>}
			<input
				type="text"
				placeholder="Phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			{error?.phone && (
				<p className={styles.error}>Valid phone no. is required</p>
			)}
			<button onClick={submitHandler}>SIGNUP</button>
		</div>
	);
}

export default Form;
