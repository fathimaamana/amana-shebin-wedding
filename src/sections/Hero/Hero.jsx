import { useState } from "react";

import styles from "./Hero.module.css";

import FloatingParticles from "../../components/FloatingParticles/FloatingParticles";
import CountdownTimer from "../../components/Countdown/Countdown";
import InvitationModal from "../../components/InvitationModal/InvitationModal";

import { weddingData } from "../../constants/weddingData";

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

        {/* Bride */}

        <h1 className={`${styles.name} hero-name`}>
          {weddingData.bride.fullName}
        </h1>

        {/* Heart */}

        <div className={`${styles.heart} hero-heart`}>
          ❤
        </div>

        {/* Groom */}

        <h1 className={`${styles.name} hero-name`}>
          {weddingData.groom.fullName}
        </h1>

        {/* Invitation */}

        <p className={`${styles.invite} hero-invite`}>
          Request the honour of your presence
          <br />
          at our Nikkah Ceremony
        </p>

        {/* Date */}

        <p className={`${styles.date} hero-date`}>
          {weddingData.wedding.displayDate}
          <br />
          {weddingData.events.nikkah.time}
        </p>

        {/* Countdown */}

        <div className="hero-countdown">
          <CountdownTimer />
        </div>

        {/* Button */}

        <button
          className={`${styles.button} hero-button`}
          onClick={() => setOpenInvitation(true)}
        >
          View Invitation
        </button>

      </div>

      {/* Invitation Modal */}

      <InvitationModal
        open={openInvitation}
        onClose={() => setOpenInvitation(false)}
      />

    </section>
  );
}

export default Hero;