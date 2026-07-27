import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { personalInfo } from '../../data/portfolioData';
import profilePhoto from '../../assets/profile photo.jpeg';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.gridBg} />
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.textCol}>
            <p className={styles.greeting}>Policy Analyst &amp; Researcher</p>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.statement}>
              Shaping evidence-based public policy decisions through rigorous research, 
              strategic communication, and institutional collaboration.
            </p>
            <div className={styles.ctaGroup}>
              <button
                className={styles.ctaPrimary}
                onClick={() => scrollTo('#capabilities')}
              >
                View Research
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button
                className={styles.ctaSecondary}
                onClick={() => scrollTo('#contact')}
              >
                Get in Touch
              </button>
            </div>
            <div className={styles.tagline}>
              <span className={styles.taglineDot} />
              {personalInfo.tagline}
            </div>
          </div>
          <div className={styles.imageCol}>
            {!imageError ? (
              <div className={styles.imageFrame}>
                <img
                  src={profilePhoto}
                  alt={`${personalInfo.name} — Policy Analyst`}
                  className={styles.profileImg}
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className={styles.imagePlaceholder}>
                <span className={styles.initials}>SG</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
