import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.crescent}>
        ☾
      </div>

      <h2>Amana & Shebin</h2>

      <p className={styles.verse}>
        “He created for you spouses from among yourselves
        so that you may find tranquility in them,
        and He placed between you affection and mercy.”
      </p>

      <span className={styles.reference}>
        Qur'an 30:21
      </span>

      <div className={styles.divider}></div>

      <p className={styles.details}>
        Saturday, 5 September 2026
      </p>

      <p className={styles.details}>
        Hi-Land Convention Center
      </p>

      <p className={styles.details}>
        Parappanpoyil, Thamarassery
      </p>

      <h3>#AmanShNikkah</h3>

      <div className={styles.bottom}>
        Made with ❤️ for our family & friends
      </div>

    </footer>
  );
}

export default Footer;