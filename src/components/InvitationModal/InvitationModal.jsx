import styles from "./InvitationModal.module.css";
import { weddingData } from "../../constants/weddingData";

function InvitationModal({ open, onClose }) {

  if (!open) return null;

  return (

    <div className={styles.overlay}>

      <div className={styles.card}>

        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <p className={styles.family}>
          Together with our families
        </p>

        <h1>
          {weddingData.bride.firstName}
        </h1>

        <div className={styles.heart}>
          ❤
        </div>

        <h1>
          {weddingData.groom.firstName}
        </h1>

        <p className={styles.text}>
          Request the honour of your presence
          <br />
          at our Nikkah Ceremony
        </p>

        <p className={styles.date}>
            {weddingData.wedding.displayDate}
        </p>

      </div>

    </div>

  );

}

export default InvitationModal;