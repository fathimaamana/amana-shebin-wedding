import styles from "./InvitationGate.module.css";
import { weddingData } from "../../constants/weddingData";

function InvitationGate({ onOpen }) {
  return (
    <section className={styles.container}>

      <div className={styles.card}>

        <div className={styles.crescent}>
          ☾
        </div>

        <p className={styles.bismillah}>
          بِسْمِ ٱللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <div className={styles.divider}></div>

        <p className={styles.invited}>
          Together with our families
          <br />
          joyfully invite you to celebrate
          <br />
          the Nikkah of
        </p>

        <h1 className={styles.name}>
          {weddingData.bride.firstName}
        </h1>

        <div className={styles.and}>
          &
        </div>

        <h1 className={styles.name}>
          {weddingData.groom.firstName}
        </h1>

        <button
          className={styles.button}
          onClick={onOpen}
        >
          ✦ Open Invitation ✦
        </button>

      </div>

    </section>
  );
}

export default InvitationGate;