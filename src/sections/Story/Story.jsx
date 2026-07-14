import styles from "./Story.module.css";

const timeline = [
  {
    date: "30 November 2025",
    title: "Our First Meeting",
    description:
      "The day our paths crossed for the very first time, marking the beginning of a beautiful journey.",
  },
  {
    date: "18 January 2026",
    title: "Engagement",
    description:
      "A beautiful promise between two hearts, surrounded by the love and blessings of our families.",
  },
  {
    date: "5 September 2026",
    title: "Nikkah",
    description:
      "With gratitude to Allah, we begin our new life together through the sacred bond of marriage.",
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
      "A lifetime of love, mercy, faith, and countless beautiful memories together.",
  },
];

function Story() {
  return (
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
  );
}

export default Story;