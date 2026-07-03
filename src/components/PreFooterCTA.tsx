import React from 'react';
import styles from './PreFooterCTA.module.css';

export function PreFooterCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Need a Security Partner You Can Rely On?</h2>
        <div className={styles.buttonGroup}>
          <a href="https://www.secureguardservices.com/contact" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Get a Free Quote</a>
          <a
            href="https://www.secureguardservices.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Speak to a Specialist
          </a>
        </div>
      </div>
    </section>
  );
}
