import styles from './Education.module.css';
import { education } from '../../data/portfolioData';

function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{education.title}</h2>

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
          <h3 className={styles.earlierTitle}>Earlier Education</h3>
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
    </section>
  );
}

export default Education;
