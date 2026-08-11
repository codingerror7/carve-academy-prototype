import React from 'react';
import { FiBriefcase, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.prefix}>
              <span className={styles.asterisk}>✦</span>
              <span>Our Approach</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Essential features for<br />
              modern academic success
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerRightText}>
              Explore integrated learning approaches, improve academic skills, increase student potential, and support long-term educational growth and sustainable development.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: White */}
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={styles.iconWrapper}>
              <FiBriefcase />
            </div>
            <h3 className={styles.cardTitle}>Next-gen learning Resources</h3>
            <p className={styles.cardDesc}>
              We provide expert academic guidance and curated resource materials to help students learn effectively.
            </p>
            <a href="#" className={styles.exploreBtn}>
              <span>Explore More</span>
              <FiArrowRight />
            </a>
          </div>

          {/* Card 2: Lime Green */}
          <div className={`${styles.card} ${styles.cardLime}`}>
            <div className={styles.iconWrapper}>
              <FiTrendingUp />
            </div>
            <h3 className={styles.cardTitle}>Personal Growth Guidance</h3>
            <p className={styles.cardDesc}>
              Identify new growth opportunities and accelerate sustainable academic success through personal mentoring.
            </p>
            <a href="#" className={styles.exploreBtn}>
              <span>Explore More</span>
              <FiArrowRight />
            </a>
            {/* Decorative circle shape */}
            <div className={styles.cardLimeOverlay}>
              <div className={styles.cardLimeOverlayInner}></div>
            </div>
          </div>

          {/* Card 3: Dark Green */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.iconWrapper}>
              <FaHandshake />
            </div>
            <h3 className={styles.cardTitle}>Academic Skill Improvement</h3>
            <p className={styles.cardDesc}>
              Optimize learning strategies to increase study efficiency, focus, and overall academic performance.
            </p>
            <a href="#" className={styles.exploreBtn}>
              <span>Explore More</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
