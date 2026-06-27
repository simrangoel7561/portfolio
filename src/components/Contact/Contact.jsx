import styles from './Contact.module.css';
import { personalInfo } from '../../data/portfolioData';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        
        <div className={styles.contactCard}>
          <h3 className={styles.name}>{personalInfo.name}</h3>
          <p className={styles.role}>{personalInfo.tagline}</p>
          
          <div className={styles.buttonGroup}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <span className={styles.icon}>💼</span>
              LinkedIn
            </a>
            
            <a 
              href="mailto:contact@simrangoel.com" 
              className={styles.contactButton}
            >
              <span className={styles.icon}>✉️</span>
              Email
            </a>
            
            <a 
              href="/cv.pdf" 
              download
              className={styles.contactButton}
            >
              <span className={styles.icon}>📄</span>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
