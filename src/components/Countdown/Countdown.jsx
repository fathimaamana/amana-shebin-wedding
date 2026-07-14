import Countdown from "react-countdown";
import { weddingData } from "../../constants/weddingData";
import styles from "./Countdown.module.css";

const weddingDate = new Date(weddingData.wedding.date);

function CountdownTimer() {
  return (
    <Countdown
      date={weddingDate}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h2>{days}</h2>
            <span>Days</span>
          </div>

          <div className={styles.card}>
            <h2>{hours}</h2>
            <span>Hours</span>
          </div>

          <div className={styles.card}>
            <h2>{minutes}</h2>
            <span>Minutes</span>
          </div>

          <div className={styles.card}>
            <h2>{seconds}</h2>
            <span>Seconds</span>
          </div>
        </div>
      )}
    />
  );
}

export default CountdownTimer;