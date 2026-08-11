"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling when mobile navigation drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={styles.headerContainer}>
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
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <div className={styles.logoIcon}>
            <div className={styles.logoIconInner}></div>
          </div>
          <span className={styles.logoText}>Carve Academy</span>
        </Link>

        {/* Desktop Menu Link Items */}
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link href="/" className={styles.navLink} style={{ color: '#b3f55c' }}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="#About" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#Reviews" className={styles.navLink}>
              Reviews 
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#Services" className={styles.navLink}>
              Services 
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href="#Principals" className={styles.navLink}>
              Principles Quote
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="#Contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Call to Action Button */}
        <button className={styles.appointmentBtn}>
          <span>Book Appointment</span>
          <div className={styles.btnArrowCircle}>»</div>
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Toggle navigation menu">
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Drawer Overlay Backdrop */}
      <div 
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOverlayActive : ''}`} 
        onClick={closeMenu}
      />

      {/* Mobile Navigation Slide-in Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerActive : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
            <div className={styles.logoIcon}>
              <div className={styles.logoIconInner}></div>
            </div>
            <span className={styles.logoText}>Carve Academy</span>
          </Link>
          <button className={styles.drawerCloseBtn} onClick={closeMenu} aria-label="Close navigation menu">
            <FiX />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className={styles.drawerLinks}>
          <li>
            <Link href="/" className={styles.drawerLink} style={{ color: '#b3f55c' }} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#About" className={styles.drawerLink} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <a href="#Reviews" className={styles.drawerLink} onClick={closeMenu}>
              <span>Reviews</span>
              
            </a>
          </li>
          <li>
            <a href="#Services" className={styles.drawerLink} onClick={closeMenu}>
              <span>Services</span>
              
            </a>
          </li>
          <li>
            <a href="#Principals" className={styles.drawerLink} onClick={closeMenu}>
              <span>Principles Quote</span>
              
            </a>
          </li>
          <li>
            <Link href="#Contact" className={styles.drawerLink} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Drawer Footer CTAs */}
        <div className={styles.drawerFooter}>
          <a href="tel:+8804590053" className={styles.drawerPhone}>
            <FaPhoneAlt className={styles.drawerPhoneIcon} />
            <span>+9198989898</span>
          </a>
          <button className={`${styles.appointmentBtn} ${styles.drawerBtn}`} onClick={closeMenu}>
            <span>Book Appointment</span>
            <div className={styles.btnArrowCircle}>»</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
