import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import styles from "./Navbar.module.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

function Navbar( { playMusic } ) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "story",
        "parents",
        "couple",
        "events",
        "venue",
        "rsvp",
        "gallery",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div
        className={styles.logo}
        onClick={() => scrollToSection("home")}
      >
        A<span>&</span>S
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <li>
          <button
            className={active === "home" ? styles.active : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
        </li>

        <li>
          <button
            className={active === "story" ? styles.active : ""}
            onClick={() => scrollToSection("story")}
          >
            Story
          </button>
        </li>

        <li>
          <button
            className={active === "parents" ? styles.active : ""}
            onClick={() => scrollToSection("parents")}
          >
            Families
          </button>
        </li>

        <li>
          <button
            className={active === "events" ? styles.active : ""}
            onClick={() => scrollToSection("events")}
          >
            Events
          </button>
        </li>

        <li>
          <button
            className={active === "venue" ? styles.active : ""}
            onClick={() => scrollToSection("venue")}
          >
            Venue
          </button>
        </li>

        <li>
          <button
            className={active === "rsvp" ? styles.active : ""}
            onClick={() => scrollToSection("rsvp")}
          >
            RSVP
          </button>
        </li>

        <li>
          <button
            className={active === "gallery" ? styles.active : ""}
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </button>
        </li>
      </ul>

      <div className={styles.actions}>
        <MusicPlayer  playMusic={playMusic}/>

        <button
          className={styles.menu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;