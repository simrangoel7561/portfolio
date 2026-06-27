import styles from './Capabilities.module.css';
import CapabilityCard from './CapabilityCard';
import { capabilities, digitalTools } from '../../data/portfolioData';

function Capabilities() {
  return (
    <section className={styles.capabilities} id="capabilities">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Core Capabilities</h2>
          <p className={styles.subtitle}>What I Bring</p>
        </div>

        <div className={styles.capabilitiesGrid}>
          {Object.entries(capabilities).map(([title, skills], index) => (
            <CapabilityCard
              key={title}
              title={title}
              skills={skills}
              index={index}
            />
          ))}
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>Digital & Technical Tools</h3>
          <div className={styles.toolsGrid}>
            {digitalTools.map((tool, index) => (
              <div key={index} className={styles.toolBadge}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
