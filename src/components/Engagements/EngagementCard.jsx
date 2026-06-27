import { useEffect, useRef, useState } from 'react';
import styles from './Engagements.module.css';

function EngagementCard({ engagement }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      className={`${styles.engagementCard} ${isVisible ? styles.visible : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.cardHeader}>
        <span className={styles.category}>{engagement.category}</span>
        <h3 className={styles.cardTitle}>{engagement.title}</h3>
        <p className={styles.description}>{engagement.description}</p>
      </div>

      <div className={`${styles.cardDetails} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.detailSection}>
          <h4 className={styles.detailTitle}>Approach</h4>
          <ul className={styles.detailList}>
            {engagement.approach.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailSection}>
          <h4 className={styles.detailTitle}>Key Deliverables</h4>
          <ul className={styles.detailList}>
            {engagement.keyDeliverables.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailSection}>
          <h4 className={styles.detailTitle}>Outcomes</h4>
          <ul className={styles.detailList}>
            {engagement.outcomes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className={styles.expandButton}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default EngagementCard;
