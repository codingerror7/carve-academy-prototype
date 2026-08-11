import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      {/* Top Utility Bar */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <div className={styles.topbarItem}>
            <FiMapPin />
            <span>We're premier academic training academy</span>
          </div>
          <div className={styles.topbarItem}>
            <FiMail />
            <a href="mailto:info@carveacademy.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@carveacademy.com
            </a>
          </div>
        </div>
        <div className={styles.topbarRight}>
          <span>Follow Us —</span>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbarContainer}>
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <div className={styles.logoIconInner}></div>
          </div>
          <span className={styles.logoText}>Carve Academy</span>
        </Link>

        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link href="/" className={styles.navLink} style={{ color: '#b3f55c' }}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#" className={styles.navLink}>
              Pages <FaChevronDown className={styles.chevron} />
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#" className={styles.navLink}>
              Services <FaChevronDown className={styles.chevron} />
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#" className={styles.navLink}>
              Blog <FaChevronDown className={styles.chevron} />
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>

        <button className={styles.appointmentBtn}>
          <span>Book Appointment</span>
          <div className={styles.btnArrowCircle}>»</div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
