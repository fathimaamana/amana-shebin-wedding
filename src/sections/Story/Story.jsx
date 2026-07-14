import styles from "./Story.module.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const timeline = [
  {
    date: "30 November 2025",
    title: "Our First Meeting",
    description:
      "The beginning of a beautiful journey together.",
  },
  {
    date: "18 January 2026",
    title: "Engagement",
    description:
      "A promise made before our families.",
  },
  {
    date: "5 September 2026",
    title: "Nikkah",
    description:
      "Beginning our forever with Allah's blessings.",
  },
  {
    date: "6 September 2026",
    title: "Reception",
    description:
      "Celebrating our union with our beloved family and friends.",
  },
  {
    date: "Forever",
    title: "In Sha Allah ❤️",
    description:
      "A lifetime of love, mercy and blessings.",
  },
];

function Story() {
  return (
    <ScrollReveal>
    <section className={styles.story} id="story">
      <div className={styles.heading}>
        <h2>Our Story</h2>
        <p>
          Every beautiful journey begins with faith, hope, and Allah's
          blessings.
        </p>
      </div>

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.dot}></div>

            <span>{item.date}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>
  );
}

export default Story;