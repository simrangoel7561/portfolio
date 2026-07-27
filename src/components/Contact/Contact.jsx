import { useState, useCallback } from 'react';
import styles from './Contact.module.css';
import { personalInfo } from '../../data/portfolioData';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('simrangoel7561@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = 'simrangoel7561@gmail.com';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        
        <div className={styles.contactCard}>
          <h3 className={styles.name}>{personalInfo.name}</h3>
          <p className={styles.role}>{personalInfo.tagline}</p>
          
          <div className={styles.buttonGroup}>
            <a 
              href="https://www.linkedin.com/in/simran-goel-814b63210/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <span className={styles.icon}>💼</span>
              LinkedIn
            </a>
            
            <button 
              onClick={handleCopyEmail}
              className={styles.contactButton}
              aria-label="Copy email address"
            >
              <span className={styles.icon}>✉️</span>
              {copied ? 'Copied!' : 'Email'}
            </button>
            
            <a 
              href="/cv.pdf" 
              download
              className={styles.contactButton}
            >
              <span className={styles.icon}>📄</span>
              Download CV
            </a>
          </div>

          <div className={`${styles.copyToast} ${copied ? styles.copyToastVisible : ''}`}>
            <span className={styles.copyToastIcon}>✓</span>
            Email copied to clipboard!
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
