import styles from "./Couple.module.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Couple() {
  return (
    <ScrollReveal>
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

          {/* Bride */}

          <div className={styles.card}>

            <div className={styles.avatar}>
              A
            </div>

            <h3>
              <span>Fathima</span>
              <span>Amana</span>
            </h3>

            <span className={styles.role}>
              Bride
            </span>

          </div>

          {/* Groom */}

          <div className={styles.card}>

            <div className={styles.avatar}>
              S
            </div>

            <h3>
              <span>Shebin</span>
              <span>Ashraf</span>
            </h3>

            <span className={styles.role}>
              Groom
            </span>

          </div>

        </div>

      </section>
    </ScrollReveal>
  );
}

export default Couple;