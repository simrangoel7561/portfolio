import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { personalInfo } from '../../data/portfolioData';
import profilePhoto from '../../assets/profile photo.jpeg';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundPattern}>
        <div className={styles.geometricShape}></div>
        <div className={styles.geometricShape}></div>
        <div className={styles.geometricShape}></div>
      </div>
      
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.textContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.subtitle}>{personalInfo.tagline}</p>
            <h2 className={styles.statement}>{personalInfo.heroStatement}</h2>
          </div>
          
          <div className={styles.profileImage}>
            {!imageError ? (
              <img 
                src={profilePhoto}
                alt={`${personalInfo.name} - Professional profile`}
                className={styles.profileImg}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className={styles.profilePlaceholder}>
                <div className={styles.initials}>SG</div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
}

export default Hero;
