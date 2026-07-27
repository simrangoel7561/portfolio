import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Background', href: '#about' },
    { label: 'Expertise', href: '#capabilities' },
    { label: 'Experience', href: '#engagements' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          <span className={styles.logoText}>SG</span>
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`} />
        </button>

        <div className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ''}`} onClick={() => setIsMenuOpen(false)} />

        <ul
          className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {navItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
