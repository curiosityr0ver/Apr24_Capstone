import React, { useState, useEffect } from "react";
import styles from "./TimerWidget.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;

function TimerWidget() {
	const [totalSeconds, setTotalSeconds] = useState(10);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				const newTotalSeconds = totalSeconds - 1 < 0 ? 0 : totalSeconds - 1;
				// setState
				// Approach1
				// newValue = f(oldValue)
				// setState(newValue)

				// Approach2
				//setState(value => f(value))

				setTotalSeconds((totalSeconds) => {
					if (totalSeconds > 0) return totalSeconds - 1;
					else {
						setIsRunning(false);
						return 0;
					}
				});
			}, 1000); // 1000ms  = 1 sec
			return () => clearInterval(interval); // clearInterval stops the interval or the loop from iterating any further
		}
	}, [isRunning]);

	const parseTime = (totalSeconds) => {
		const hours = Math.floor(totalSeconds / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;
		return { hours, minutes, seconds };
	};

	const stepHandler = (step) => {
		if (isRunning || (step < 0 && totalSeconds - step < 0)) return;
		setTotalSeconds(totalSeconds + step);
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>{totalSeconds}</div>
			<div className={styles.right}>
				<div className={styles.configure}>
					<div className={styles.cell}>
						<p>Hours</p>
						<IoIosArrowUp onClick={() => stepHandler(HOURS_STEP)} />
						<p>{parseTime(totalSeconds).hours}</p>
						<IoIosArrowDown onClick={() => stepHandler(-HOURS_STEP)} />
					</div>
					<div className={styles.cell}>
						<p>Minutes</p>
						<IoIosArrowUp
							onClick={() => setTotalSeconds(totalSeconds + MINUTES_STEP)}
						/>
						<p>{parseTime(totalSeconds).minutes}</p>
						<IoIosArrowDown
							onClick={() =>
								setTotalSeconds(
									totalSeconds - MINUTES_STEP < 0
										? 0
										: totalSeconds - MINUTES_STEP
								)
							}
						/>
					</div>
					<div className={styles.cell}>
						<p>Seconds</p>
						<IoIosArrowUp
							onClick={() => setTotalSeconds(totalSeconds + SECONDS_STEP)}
						/>
						<p>{parseTime(totalSeconds).seconds}</p>
						<IoIosArrowDown
							onClick={() =>
								setTotalSeconds(
									totalSeconds - SECONDS_STEP < 0
										? 0
										: totalSeconds - SECONDS_STEP
								)
							}
						/>
					</div>
				</div>
				<button onClick={() => setIsRunning(!isRunning)}>
					{isRunning ? "Stop" : "Start"}
				</button>
			</div>
		</div>
	);
}

export default TimerWidget;
