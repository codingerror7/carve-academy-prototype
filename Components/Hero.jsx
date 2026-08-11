import React from 'react';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background decoration */}
      <div className={styles.heroBgImage} />
      <div className={styles.heroBgGradient} />

      <div className={styles.container}>
        <div className={styles.contentLeft}>
          {/* Rating Badge */}
          <div className={styles.ratingBadge}>
            <span className={styles.ratingValue}>4.9</span>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className={styles.reviewsCount}>5K+ Reviews</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heroTitle}>
            NEXT — GEN TOP<br />
            NOTCH <span className={styles.highlightText}>ACADEMIC</span><br />
            EDUCATION
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
                  +880 (4590) 053
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side Image */}
        <div className={styles.imageContainer}>
          <img
            src="/hero_people.png"
            alt="Carve Academy Students"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
