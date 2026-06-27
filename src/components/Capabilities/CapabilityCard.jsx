import { useEffect, useRef, useState } from 'react';
import styles from './Capabilities.module.css';

function CapabilityCard({ title, skills, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.capabilityCard} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.skillsList}>
        {skills.map((skill, idx) => (
          <li key={idx} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CapabilityCard;
