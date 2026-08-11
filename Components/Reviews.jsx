import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './Reviews.module.css';

const reviewsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Parent of Class 8 Student',
    rating: 5,
    quote: 'Carve Academy has been a blessing for my child. The individual attention given by teachers and the focus on modern academic resources has significantly improved my child\'s confidence and academic performance.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 2,
    name: 'David Miller',
    role: 'Alumni (Class of 2024)',
    rating: 5,
    quote: 'The skill development programs at Carve Academy prepared me perfectly for my School transition. The emphasis on technology, critical thinking, and research gave me a strong head start in my university courses.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Grade 12 Student',
    rating: 5,
    quote: 'I love the collaborative culture here! The teachers are always approachable and encourage us to participate in creative research. It is more than just a school; it is a community where we learn to lead.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviewsSection} id="Reviews">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.prefix}>
            <span className={styles.asterisk}>✦</span>
            <span>Testimonials</span>
          </div>
          <h2 className={styles.sectionTitle}>What our community says</h2>
          <p className={styles.sectionDesc}>
            Hear directly from our parents, students, and alumni about their educational journeys and academic experiences at Carve Academy.
          </p>
        </div>

        {/* Swiper Continuous Scroll Marquee */}
        <div className={styles.swiperContainer}>
          <div className={styles.swiperTrack}>
            {/* First Set of Review Cards */}
            {reviewsData.map((item) => (
              <div key={`set1-${item.id}`} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.quote}>"{item.quote}"</p>
                <div className={styles.profileBlock}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={styles.avatar}
                  />
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{item.name}</span>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Second Set (Duplicate) to complete seamless infinite scroll loop */}
            {reviewsData.map((item) => (
              <div key={`set2-${item.id}`} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.quote}>"{item.quote}"</p>
                <div className={styles.profileBlock}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={styles.avatar}
                  />
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{item.name}</span>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Stats */}
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>School Acceptance</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.9/5.0</span>
            <span className={styles.statLabel}>Parent Satisfaction</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>15:1</span>
            <span className={styles.statLabel}>Student-Teacher Ratio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
