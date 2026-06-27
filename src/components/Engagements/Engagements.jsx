import styles from './Engagements.module.css';
import EngagementCard from './EngagementCard';
import { engagements } from '../../data/portfolioData';

function Engagements() {
  return (
    <section className={styles.engagements} id="engagements">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Selected Engagements</h2>
          <p className={styles.subtitle}>
            Applying research, strategy, communication, and implementation across diverse public policy and social impact initiatives.
          </p>
        </div>

        <div className={styles.engagementsGrid}>
          {engagements.map((engagement) => (
            <EngagementCard key={engagement.id} engagement={engagement} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Engagements;
