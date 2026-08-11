import React from 'react';
import styles from './PrincipalMessage.module.css';

const PrincipalMessage = () => {
  return (
    <section className={styles.principalSection} id="Principals">
      <div className={styles.container}>
        {/* Left Column: Portrait */}
        <div className={styles.portraitCol}>
          {/* Radial soft lime glow behind the portrait */}
          <div className={styles.portraitGlow} />
          
          <div className={styles.portraitWrapper}>
            <img
              src="principle.jpg"
              alt="Moris S. Babar, Principal of Carve Academy"
              className={styles.portraitImage}
            />
          </div>
        </div>

        {/* Right Column: Message */}
        <div className={styles.contentCol}>
          <div className={styles.prefix}>
            <span className={styles.asterisk}>✦</span>
            <span>From the Principal's Desk</span>
          </div>

          <h2 className={styles.heading}>A Message from Our Principal</h2>

          <p className={styles.introLine}>
            "Guiding every student toward excellence, integrity, and lifelong learning."
          </p>

          <div className={styles.messageBody}>
            <p className={styles.messageParagraph}>
              Welcome to Carve Academy. As the Principal, it is my absolute privilege to lead an institution that is deeply dedicated to fostering academic excellence, innovation, and character development. Our student-centered approach is designed to nurture creativity, cultivate confidence, and instill a lifelong love for learning in every student.
            </p>
            <p className={styles.messageParagraph}>
              At Carve Academy, we believe that education extends beyond the classroom. We strive to create an inclusive and supportive learning environment where academic rigor meets holistic growth. Through our diverse curriculum and hands-on learning experiences, we prepare our students to face the challenges of a rapidly changing future with resilience and discipline.
            </p>
            <p className={styles.messageParagraph}>
              A successful educational journey is built on a strong, collaborative partnership between the school and parents. We deeply value your trust and collaboration in shaping the future of our youth. Together, let us guide our students to discover their unique potentials and build a foundation for sustainable success.
            </p>
          </div>

          {/* Meta & Signature */}
          <div className={styles.principalMeta}>
            <div className={styles.metaText}>
              <span className={styles.name}>Moris S. Babar</span>
              <span className={styles.designation}>Principal, Carve Academy</span>
            </div>

            {/* Handwritten Signature Placeholder using inline SVG for crisp rendering */}
            <div className={styles.signatureBox}>
              <svg className={styles.signatureSvg} viewBox="0 0 150 50">
                <path
                  d="M 15 32 C 30 18, 40 28, 48 18 C 55 10, 60 38, 65 25 C 72 12, 78 28, 85 18 C 92 8, 98 32, 105 22 C 112 12, 118 28, 125 15 C 130 8, 135 22, 140 12 M 72 24 L 115 24 M 45 16 L 40 38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.signatureLabel}>Principal's Signature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
