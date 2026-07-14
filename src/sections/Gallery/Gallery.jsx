import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">

      <p className={styles.subtitle}>
        Our Memories
      </p>

      <h2>Gallery</h2>

      <p className={styles.text}>
        Beautiful memories from our journey
        will be shared here soon, In Sha Allah.
      </p>

      <div className={styles.placeholder}>
        📷
      </div>

    </section>
  );
}

export default Gallery;