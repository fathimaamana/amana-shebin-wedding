import styles from "./FloatingParticles.module.css";

const particles = Array.from({ length: 35 });

function FloatingParticles() {
  return (
    <div className={styles.container}>
      {particles.map((_, index) => (
        <span
          key={index}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;