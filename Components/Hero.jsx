import React from 'react';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background decoration overlays */}
      <div className={styles.heroOverlay} />
      <div className={styles.heroGlow} />

      <div className={styles.container}>
        <div className={styles.contentLeft}>
          {/* Rating Badge */}
          <div className={styles.ratingBadge}>
            <span className={styles.ratingValue}>Admissions Open : session 2026-27</span>


          </div>
          <span className={styles.reviewsCount}></span>
        </div>

        {/* Heading */}
        <h1 className={styles.heroTitle}>
          CARVE ACADEMY <br />
          Building Bright Futures Through<span className={styles.highlightText}> Quality </span><br />
          Education
        </h1>

        {/* Description */}
        <p className={styles.heroDesc}>
          We provide expert academic programs and mentoring to help students grow, optimize skills, and achieve sustainable success in their future endeavors.
        </p>

        {/* Action buttons */}
        <div className={styles.actionRow}>
          <button className={styles.ctaBtn}>
            <span>Book Appointment</span>
            <div className={styles.btnArrow}>»</div>
          </button>

          <div className={styles.phoneContact}>
            <div className={styles.phoneIconContainer}>
              <FaPhoneAlt />
            </div>
            <div className={styles.phoneTextStack}>
              <span className={styles.phoneLabel}>CALL US</span>
              <a href="tel:+8804590053" className={styles.phoneNumber}>
                +91 9898989898
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
