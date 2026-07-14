import { useEffect } from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className={styles.loader}>

      <div className={styles.glow}></div>

      <div className={styles.content}>

        <div className={styles.crescent}>
          ☾
        </div>

        <p className={styles.bismillah}>
          بِسْمِ ٱللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <div className={styles.divider}></div>

        <h1 className={styles.name}>
          Amana
        </h1>

        <div className={styles.and}>
          ✦
        </div>

        <h1 className={styles.name}>
          Shebin
        </h1>

        <p className={styles.subtitle}>
          Nikkah Ceremony
        </p>

        <p className={styles.date}>
          5 September 2026
        </p>

        <div className={styles.progress}>

          <div className={styles.bar}></div>

        </div>

        <p className={styles.loading}>
          Preparing your invitation...
        </p>

      </div>

    </section>
  );
}

export default LoadingScreen;