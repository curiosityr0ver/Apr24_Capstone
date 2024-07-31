import { useEffect, useState } from "react";
import styles from "./TimeWidget.module.css";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

function TimeWidget() {
  const [totalSeconds, setTotalSeconds] = useState(20);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTotalSeconds((totalSeconds) => {
          if (totalSeconds > 0) return totalSeconds - 1;
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

  const parseTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const HOURS_STEP = 3600;
  const MINUTES_STEP = 60;
  const SECONDS_STEP = 1;

  return (
    <div className={styles.container}>
      <div className={styles.left}>{totalSeconds}</div>
      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.cell}>
            <p>Hours</p>
            <BiSolidUpArrow
              onClick={() => setTotalSeconds(totalSeconds + HOURS_STEP)}
            />
            <p>{parseTime(totalSeconds).hours}</p>
            <BiSolidDownArrow
              onClick={() =>
                setTotalSeconds(
                  totalSeconds - HOURS_STEP < 0 ? 0 : totalSeconds - HOURS_STEP
                )
              }
            />
          </div>
          <div className={styles.cell}>
            <p>Minutes</p>
            <BiSolidUpArrow
              onClick={() => setTotalSeconds(totalSeconds + MINUTES_STEP)}
            />
            <p>{parseTime(totalSeconds).minutes}</p>
            <BiSolidDownArrow
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
            <BiSolidUpArrow
              onClick={() => setTotalSeconds(totalSeconds + SECONDS_STEP)}
            />
            <p>{parseTime(totalSeconds).seconds}</p>
            <BiSolidDownArrow
              onClick={() =>
                setTotalSeconds(
                  totalSeconds - SECONDS_STEP < 0
                    ? 0
                    : totalSeconds - SECONDS_STEP
                )
              }
            />
          </div>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeWidget;
