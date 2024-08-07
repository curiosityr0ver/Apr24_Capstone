import { useEffect, useState } from "react";
import styles from "./TimeWidget.module.css";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TimeWidget() {
  const [remainingTime, setRemainingTime] = useState(10);
  const [cachedSeconds, setCachedSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setRemainingTime((remainingTime) => {
          if (remainingTime > 0) return remainingTime - 1;
          else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  const parseTime = (remainingTime) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    return { hours, minutes, seconds };
  };

  const HOURS_STEP = 3600;
  const MINUTES_STEP = 60;
  const SECONDS_STEP = 1;

  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes
      .toString()
      .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;
  };

  const stepHandler = (step) => {
    if (isRunning || (step < 0 && remainingTime - step < 0)) return;
    setRemainingTime(remainingTime + step);
    setCachedSeconds(remainingTime + step);
  };

  const percentage = (remainingTime / cachedSeconds) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CircularProgressbar
          value={percentage}
          text={formatTime(parseTime(remainingTime))}
          styles={{
            path: {
              stroke: "#FF6A6A",
              strokeWidth: "3px",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "transparent",
            },
            text: {
              fill: "white",
              fontSize: "12px",
            },
          }}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.cell}>
            <p>Hours</p>
            <BiSolidUpArrow onClick={() => stepHandler(HOURS_STEP)} />
            <p>{parseTime(cachedSeconds).hours.toString().padStart(2, "0")}</p>
            <BiSolidDownArrow
              onClick={() =>
                setRemainingTime(
                  remainingTime - HOURS_STEP < 0
                    ? 0
                    : remainingTime - HOURS_STEP
                )
              }
            />
          </div>
          <div className={styles.cell}>
            <p>Minutes</p>
            <BiSolidUpArrow onClick={() => stepHandler(MINUTES_STEP)} />
            <p>
              {parseTime(cachedSeconds).minutes.toString().padStart(2, "0")}
            </p>
            <BiSolidDownArrow
              onClick={() =>
                setRemainingTime(
                  remainingTime - MINUTES_STEP < 0
                    ? 0
                    : remainingTime - MINUTES_STEP
                )
              }
            />
          </div>
          <div className={styles.cell}>
            <p>Seconds</p>
            <BiSolidUpArrow onClick={() => stepHandler(SECONDS_STEP)} />
            <p>
              {parseTime(cachedSeconds).seconds.toString().padStart(2, "0")}
            </p>
            <BiSolidDownArrow
              onClick={() =>
                setRemainingTime(
                  remainingTime - SECONDS_STEP < 0
                    ? 0
                    : remainingTime - SECONDS_STEP
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

export default TimeWidget;
