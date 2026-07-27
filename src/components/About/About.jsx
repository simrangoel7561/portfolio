import styles from './About.module.css';
import { personalInfo, areasOfInterest, professionalValues, policyFramework, education } from '../../data/portfolioData';

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Professional Philosophy</h2>
        <p className={styles.philosophy}>{personalInfo.philosophy}</p>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <h3 className={styles.subsectionTitle}>{education.title}</h3>
          
          <div className={styles.educationTimeline}>
            {education.higherEducation.map((edu, index) => (
              <div key={index} className={styles.eduCard}>
                <div className={styles.eduCardHeader}>
                  <div className={styles.eduBadge}>
                    <span className={styles.eduDegree}>{edu.degree}</span>
                    <span className={styles.eduInstitution}>{edu.institution}</span>
                  </div>
                  <span className={styles.eduPeriod}>{edu.period}</span>
                </div>
                <p className={styles.eduDescription}>{edu.description}</p>
                {edu.details && edu.details.length > 0 && (
                  <ul className={styles.eduDetails}>
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={styles.earlierEducation}>
            <h4 className={styles.earlierTitle}>Earlier Education</h4>
            <div className={styles.earlierGrid}>
              {education.earlierEducation.map((item, index) => (
                <div key={index} className={styles.earlierCard}>
                  <div className={styles.earlierLabel}>{item.label}</div>
                  <div className={styles.earlierScore}>{item.score}</div>
                  {item.subjects && <div className={styles.earlierSubjects}>{item.subjects}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.areasSection}>
          <h3 className={styles.subsectionTitle}>Areas of Interest</h3>
          <div className={styles.areasGrid}>
            {areasOfInterest.map((area, index) => (
              <div key={index} className={styles.areaCard}>
                <div className={styles.areaIcon}>
                  {area.icon === 'policy' && '🏛️'}
                  {area.icon === 'governance' && '⚖️'}
                  {area.icon === 'systems' && '⚙️'}
                  {area.icon === 'gender' && '♀️'}
                  {area.icon === 'health' && '❤️'}
                  {area.icon === 'sustainability' && '🌿'}
                  {area.icon === 'democracy' && '🗳️'}
                  {area.icon === 'communications' && '📡'}
                  {area.icon === 'institution' && '🏗️'}
                </div>
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
