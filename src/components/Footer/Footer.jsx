import styles from './Footer.module.css';
import { personalInfo } from '../../data/portfolioData';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© {new Date().getFullYear()} {personalInfo.name}</p>
        <p className={styles.tagline}>{personalInfo.heroStatement}</p>
      </div>
    </footer>
  );
}

export default Footer;
