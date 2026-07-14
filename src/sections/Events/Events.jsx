import styles from "./Events.module.css";

function Events() {
  return (
    <section className={styles.events} id="events">

      <h2>Wedding Events</h2>

      <div className={styles.cards}>

        <div className={styles.card}>

          <h3>🕌 Nikkah</h3>

          <p className={styles.date}>
            Saturday • 5 September 2026
          </p>

          <p>
            <strong>Time</strong><br />
            11:00 AM
          </p>

          <p>
            <strong>Venue</strong><br />
            Hi-Land Convention Center
          </p>

          <span>
            Parappanpoyil, Thamarassery
          </span>

        </div>

        

      </div>

    </section>
  );
}

export default Events;