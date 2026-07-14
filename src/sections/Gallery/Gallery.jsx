import styles from "./Gallery.module.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Gallery() {
  return (
    <ScrollReveal>
    <section className={styles.gallery} id="gallery">

      <p className={styles.subtitle}>
        Our Memories
      </p>

      <h2>Captured Moments</h2>

      <p className={styles.text}>
        Beautiful memories from our journey
        will be shared here soon, In Sha Allah.
      </p>

      <div className={styles.placeholder}>
        📷
      </div>

    </section>
    </ScrollReveal>
  );
}

export default Gallery;