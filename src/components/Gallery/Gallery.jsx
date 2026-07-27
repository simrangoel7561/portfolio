import { useState, useCallback, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import heroImg1 from '../../assets/hero-1.jpeg';
import heroImg2 from '../../assets/hero-2.jpeg';
import heroImg3 from '../../assets/hero-3.jpeg';
import heroImg4 from '../../assets/hero-4.jpeg';
import heroImg5 from '../../assets/hero-5.jpeg';
import heroImg6 from '../../assets/hero-6.jpeg';
import heroImg7 from '../../assets/hero-7.jpeg';
import heroImg8 from '../../assets/hero-8.jpeg';
import heroImg9 from '../../assets/hero-9.jpeg';
import heroImg10 from '../../assets/hero-10.jpeg';

const galleryImages = [
  heroImg1, heroImg2, heroImg3, heroImg4, heroImg5,
  heroImg6, heroImg7, heroImg8, heroImg9, heroImg10,
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Moments &amp; Engagements</h2>
        <p className={styles.subtitle}>
          Selected moments from research, speaking, and institutional collaboration
        </p>
        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.carouselFrame}>
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={`${styles.carouselImg} ${index === currentIndex ? styles.active : ''}`}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            ))}
            <button
              className={`${styles.carouselBtn} ${styles.prevBtn}`}
              onClick={goPrev}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.nextBtn}`}
              onClick={goNext}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
          <div className={styles.dots}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
