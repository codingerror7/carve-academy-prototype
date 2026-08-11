"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classLevel: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', classLevel: '', message: '' });
    }, 3000);
  };

  return (
    <section className={styles.contactSection} id="Contact">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.prefix}>
            <span className={styles.asterisk}>✦</span>
            <span>Contact Us</span>
          </div>
          <h2 className={styles.sectionTitle}>Get in touch with us</h2>
          <p className={styles.sectionDesc}>
            Have questions about admissions, academic programs, or campus life? Send us a message or visit our campus. We are happy to help!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Campus Information</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.infoTextStack}>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>123 Academy Drive, Suite 500, New York, NY 10001</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaPhoneAlt />
                  </div>
                  <div className={styles.infoTextStack}>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoValue}>+880 (4590) 053</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.infoTextStack}>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>info@carveacademy.com</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaClock />
                  </div>
                  <div className={styles.infoTextStack}>
                    <span className={styles.infoLabel}>Office Timings</span>
                    <span className={styles.infoValue}>
                      Mon – Fri: 8:00 AM – 5:00 PM<br />
                      Sat: 9:00 AM – 1:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className={styles.mapWrapper}>
              <iframe
                title="Carve Academy Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4282570058836!2d-74.00622692426315!3d40.75305997138766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!2d0x0%3A0x0!2zNDDCsDQ1JzExLjAiTiA3NMMwMCcwMi40Ilc!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className={styles.mapIframe}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@email.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 (4590) 053"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="classLevel">Student Class / Grade</label>
                <select
                  id="classLevel"
                  name="classLevel"
                  value={formData.classLevel}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="Elementary">Elementary School</option>
                  <option value="Middle">Middle School (Class 6 - 8)</option>
                  <option value="High">High School (Class 9 - 12)</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.label} htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your query here..."
                  className={styles.textarea}
                  required
                />
              </div>

              <div className={styles.formGroupFull}>
                <button type="submit" className={styles.submitBtn} disabled={submitted}>
                  {submitted ? (
                    <span>Sending... Thank You!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
