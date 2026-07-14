import styles from "./RSVP.module.css";
import { FaWhatsapp, FaLocationDot } from "react-icons/fa6";

function RSVP() {
  return (
    <section className={styles.rsvp} id="rsvp">

      <div className={styles.card}>

        <p className={styles.subtitle}>
          We'd Love To See You
        </p>

        <h2>Celebrate With Us</h2>

        <p className={styles.text}>
          Your presence, prayers, and blessings
          are the greatest gift we could ask for.
        </p>

        <div className={styles.buttons}>

          <a
            href="https://wa.me/918089985626?text=Assalamu%20Alaikum%20Amana%20%26%20Shebin.%20I%20am%20happy%20to%20join%20your%20Nikkah%20In%20Sha%20Allah."
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            <FaWhatsapp />
            RSVP on WhatsApp
          </a>

          <a
            href="https://maps.app.goo.gl/HTx9hcPdtBbkPqXp7?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className={styles.location}
          >
            <FaLocationDot />
            Get Directions
          </a>

        </div>

        <p className={styles.hashtag}>
          #AmanShNikkah
        </p>

      </div>
    </section>
  );
}

export default RSVP;