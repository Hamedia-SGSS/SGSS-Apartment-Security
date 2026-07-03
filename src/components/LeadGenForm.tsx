import React from 'react';
import styles from './LeadGenForm.module.css';

export function LeadGenForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Request Armed Protection Services Today</h2>
      <hr className={styles.separator} />
      <form className={styles.form}>
        <div className={styles.row}>
          <input type="text" placeholder="First Name*" className={styles.pillInput} required />
          <input type="text" placeholder="Last Name*" className={styles.pillInput} required />
        </div>
        <div className={styles.row}>
          <div className={styles.inputIconWrapper}>
            <span className={styles.inputIcon}>✉️</span>
            <input type="email" placeholder="Email*" className={`${styles.pillInput} ${styles.hasIcon}`} required />
          </div>
          <input type="tel" placeholder="Phone*" className={styles.pillInput} required />
        </div>
        <div className={styles.row}>
          <input type="text" placeholder="Business Name*" className={styles.pillInput} required />
          <input type="text" placeholder="City*" className={styles.pillInput} required />
        </div>
        <textarea placeholder="Tell us about your security needs..." className={styles.textArea} rows={4} required></textarea>
        <div className={styles.termsWrapper}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" required className={styles.checkbox} />
            <span className={styles.termsText}>
              I agree to the <a href="/privacy" className={styles.link}>Privacy Policy</a> & <a href="/terms" className={styles.link}>Terms of Conditions</a>
            </span>
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>GET A FREE QUOTE</button>
      </form>
    </div>
  );
}
