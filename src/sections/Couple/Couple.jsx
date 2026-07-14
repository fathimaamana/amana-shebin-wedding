import styles from "./Couple.module.css";

function Couple() {
  return (
    <section className={styles.couple} id="couple">

      <p className={styles.subtitle}>
        The Couple
      </p>

      <h2>Amana & Shebin</h2>

      <p className={styles.quote}>
        Two hearts united by faith, love,
        and Allah's blessings.
      </p>

      <div className={styles.cards}>

        <div className={styles.card}>

          <div className={styles.avatar}>
            A
          </div>

          <h3>Amana</h3>

          <span>Bride</span>

        </div>

        <div className={styles.card}>

          <div className={styles.avatar}>
            S
          </div>

          <h3>Shebin</h3>

          <span>Groom</span>

        </div>

      </div>

    </section>
  );
}

export default Couple;