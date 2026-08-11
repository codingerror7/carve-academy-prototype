import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Side collage and cards */}
        <div className={styles.collageGrid}>
          {/* Top Row: Spanning Image */}
          <img
            src="/about_1.png"
            alt="Students collaborating"
            className={styles.imageTop}
          />

          {/* Row 2: Left Stat Card */}
          <div className={styles.statCard}>
            <FiCheckCircle className={styles.checkIcon} />
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Our Total Graduated Students</div>
          </div>

          {/* Row 2: Right Image */}
          <img
            src="/about_2.png"
            alt="Students studying"
            className={styles.imageBottom}
          />

          {/* Row 3: Left Avg Ratings Card */}
          <div className={styles.ratingCard}>
            <div className={styles.ratingStars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <span className={styles.ratingNum}>4.9</span>
              <span className={styles.ratingScale}>/5.0</span>
            </div>
            <span className={styles.ratingLabel}>Avg. student ratings</span>
          </div>

          {/* Row 3: Right Premium Skills Card */}
          <div className={styles.skillsCard}>
            <h4 className={styles.skillsTitle}>Premium skills</h4>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Academics</span>
              <span className={styles.tag}>Consulting</span>
              <span className={styles.tag}>Creativity</span>
              <span className={styles.tag}>Research</span>
              <span className={styles.tag}>Technology</span>
            </div>
          </div>
        </div>

        {/* Right Side description & info */}
        <div className={styles.contentRight}>
          <div className={styles.prefix}>
            <span className={styles.asterisk}>✦</span>
            <span>Who We Are?</span>
          </div>
          <h2 className={styles.title}>
            Comprehensive solution for academic excellence
          </h2>
          <p className={styles.description}>
            Discover innovative learning programs that help students improve skills, increase knowledge, and achieve long-term growth in a competitive global academic landscape. Our modern teaching methodologies prepare students for leadership and success.
          </p>

          <button className={styles.moreAboutBtn}>
            <span>More About Us</span>
            <div className={styles.btnArrow}>»</div>
          </button>

          <div className={styles.principalRow}>
            <img
              src="/avatar_moris.png"
              alt="Moris S. Barbar"
              className={styles.avatar}
            />
            <div className={styles.principalMeta}>
              <span className={styles.principalName}>Moris S. Barbar</span>
              <span className={styles.principalTitle}>Principal at — Carve Academy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
