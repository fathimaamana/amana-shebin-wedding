import { useState } from "react";

import styles from "./Hero.module.css";

import FloatingParticles from "../../components/FloatingParticles/FloatingParticles";
import CountdownTimer from "../../components/Countdown/Countdown";
import InvitationModal from "../../components/InvitationModal/InvitationModal";

import { weddingData } from "../../constants/weddingData";

console.log("Wedding Data:", weddingData);
console.log("Events:", weddingData.events);
console.log("Wedding:", weddingData.wedding);

function Hero() {
  const [openInvitation, setOpenInvitation] = useState(false);

  return (
    <section className={styles.hero} id="home">
      {/* Decorative Images */}

      <img
        src="/images/decor/floral-top.png"
        alt="Top Floral Decoration"
        className={styles.topFloral}
      />

      <img
        src="/images/decor/floral-bottom.png"
        alt="Bottom Floral Decoration"
        className={styles.bottomFloral}
      />

      {/* Floating Background */}

      <FloatingParticles />

      {/* Background Overlay */}

      <div className={styles.overlay}></div>

      {/* Hero Content */}

      <div className={styles.content}>
        <div className={`${styles.crescent} hero-crescent`}>
          ☾
        </div>

        <p className={`${styles.family} hero-family`}>
          Together with our families
        </p>

        <h1 className={`${styles.name} hero-name`}>
          {weddingData.bride.firstName}
        </h1>

        <div className={`${styles.heart} hero-heart`}>
          ❤
        </div>

        <h1 className={`${styles.name} hero-name`}>
          {weddingData.groom.firstName}
        </h1>

        <p className={`${styles.invite} hero-invite`}>
          Request the honour of your presence
          <br />
          at our Nikkah Ceremony
        </p>

        <p className={`${styles.date} hero-date`}>
         {weddingData.wedding.displayDate}
        </p>

        <div className="hero-countdown">
          <CountdownTimer />
        </div>

        <button
          className={`${styles.button} hero-button`}
          onClick={() => setOpenInvitation(true)}
        >
          View Invitation
        </button>
      </div>

      {/* Invitation Popup */}

      <InvitationModal
        open={openInvitation}
        onClose={() => setOpenInvitation(false)}
      />
    </section>
  );
}

export default Hero;