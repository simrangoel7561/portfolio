import styles from './About.module.css';
import { personalInfo, areasOfInterest, professionalValues, policyFramework } from '../../data/portfolioData';

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Professional Philosophy</h2>
        <p className={styles.philosophy}>{personalInfo.philosophy}</p>

        <div className={styles.areasSection}>
          <h3 className={styles.subsectionTitle}>Areas of Interest</h3>
          <div className={styles.areasGrid}>
            {areasOfInterest.map((area, index) => (
              <div key={index} className={styles.areaCard}>
                <div className={styles.areaIcon}>📋</div>
                <span className={styles.areaLabel}>{area.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h3 className={styles.subsectionTitle}>Professional Values</h3>
          <div className={styles.valuesGrid}>
            {professionalValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {value.icon === 'search' && '🔍'}
                  {value.icon === 'handshake' && '🤝'}
                  {value.icon === 'target' && '🎯'}
                </div>
                <span className={styles.valueLabel}>{value.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.frameworkSection}>
          <h3 className={styles.subsectionTitle}>My Policy Framework</h3>
          <div className={styles.frameworkContainer}>
            {policyFramework.map((step, index) => (
              <div key={index} className={styles.frameworkStep}>
                <div className={styles.stepBox}>{step}</div>
                {index < policyFramework.length - 1 && (
                  <div className={styles.stepArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
