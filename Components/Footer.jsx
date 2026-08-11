import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Socials */}
          <div className={styles.logoCol}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <div className={styles.logoIconInner}></div>
              </div>
              <span className={styles.logoText}>Carve Academy</span>
            </div>
            <p className={styles.desc}>
              Shaping future leaders through next-generation academic training and modern educational frameworks. Replicating premium education excellence.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaXTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
              <a href="#" className={styles.socialIcon}><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/">Home</Link></li>
              <li className={styles.linkItem}><Link href="/about">About Us</Link></li>
              <li className={styles.linkItem}><a href="#">Our Programs</a></li>
              <li className={styles.linkItem}><a href="#">Admissions</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className={styles.title}>Support</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#">Help Center</a></li>
              <li className={styles.linkItem}><a href="#">Privacy Policy</a></li>
              <li className={styles.linkItem}><a href="#">Terms & Conditions</a></li>
              <li className={styles.linkItem}><Link href="/contact">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className={styles.contactCol}>
            <h4 className={styles.title}>Contact Us</h4>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span className={styles.contactText}>
                123 Academy Drive, Suite 500<br />New York, NY 10001
              </span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span className={styles.contactText}>+880 (4590) 053</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span className={styles.contactText}>info@carveacademy.com</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Carve Academy. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
