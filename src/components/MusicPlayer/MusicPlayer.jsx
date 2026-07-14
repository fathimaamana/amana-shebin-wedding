import { useEffect, useRef, useState } from "react";
import { IoMusicalNotesOutline, IoPauseOutline } from "react-icons/io5";

import styles from "./MusicPlayer.module.css";

function MusicPlayer({ playMusic }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  // Set volume once
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.15;
  }, []);

  // Start music automatically after Invitation Gate
  useEffect(() => {
    if (!audioRef.current) return;

    if (playMusic) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err);
        });
    }
  }, [playMusic]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/piano.mp3" type="audio/mpeg" />
      </audio>

      <button
        className={styles.musicButton}
        onClick={toggleMusic}
      >
        {playing ? <IoPauseOutline /> : <IoMusicalNotesOutline />}
      </button>
    </>
  );
}

export default MusicPlayer;