import styles from "./Parents.module.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Parents() {
  return (
    <ScrollReveal>
    <section className={styles.parents} id="parents">
      <p className={styles.subtitle}>
        With the Blessings of
      </p>

      <h2>Our Families</h2>

      <div className={styles.cards}>

        <div className={styles.card}>
          <div className={styles.icon}>🌸</div>

          <h3>Bride's Family</h3>

          <h4>Mr.Abdul Basheer</h4>

          <span>&</span>

          <h4>Mrs. Ayisha Basheer</h4>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🌙</div>

          <h3>Groom's Family</h3>

          <h4>Mr. Ashraf K.K</h4>

          <span>&</span>

          <h4>Mrs.Haseena Ashraf</h4>
        </div>

      </div>


    </section>
    </ScrollReveal>
  );
}

export default Parents;