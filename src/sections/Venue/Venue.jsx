import styles from "./Venue.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { weddingData } from "../../constants/weddingData";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Venue() {
  return (
    <ScrollReveal>
    <section className={styles.venue} id="venue">
      <div className={styles.container}>

        <p className={styles.subtitle}>
          Wedding Venue
        </p>

        <h2>
          {weddingData.venue.name}
        </h2>

        <p className={styles.address}>
          {weddingData.venue.address}
        </p>

        <div className={styles.map}>
    <iframe
        title="Wedding Venue"
        src="https://www.google.com/maps?q=Hi-Land+Convention+Center+Parappanpoyil+Thamarassery&output=embed"
        loading="lazy"
        allowFullScreen
    />
</div>

        <a
          href={weddingData.venue.map}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <FaLocationDot />
          Get Directions
        </a>

      </div>
    </section>
    </ScrollReveal>
  );
}

export default Venue;