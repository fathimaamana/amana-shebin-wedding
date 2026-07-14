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
  With gratitude to Allah,
  <br /><br />
  we invite you to honour us
  <br />
  with your gracious presence
  <br /><br />
  as
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

<p className={styles.forever}>
  begin their forever,
  <br /><br />
  guided by faith,
  <br />
  filled with love,
  <br />
  and blessed with mercy,
  <br /><br />
  through the sacred bond
  <br />
  of Nikkah.
</p>

<div className={styles.divider}></div>

<p className={styles.date}>
  Saturday
  <br />
  <strong>5 September 2026</strong>
  <br />
  11:00 AM
</p>

<p className={styles.venue}>
  Hi-Land Convention Center
  <br />
  Parappanpoyil, Thamarassery
</p>

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