"use client";
import { useState } from 'react';
import styles from '@/app/styles/FloatingMenu.module.css';
import { FontAwesome } from 'react-icons/fa';
function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsExiting(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsExiting(false);
      }, 500); // Match the duration of fadeOut animation
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.floatingMenu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? '✖' : '✉'} {/* Toggle between message icon and close icon */}
      </button>
      {isOpen && (
        <div className={`${styles.menuItems} ${isExiting ? styles.exiting : ''}`}>
          <a href="https://wa.me/7698366026" target='_blank' className={styles.menuItem}>
            📞 {/* Phone icon */}
          </a>
          <a href="mailto:shilpcdc@gmail.com" target='_blank' className={styles.menuItem}>
            💬 {/* WhatsApp icon */}
          </a>
        </div>
      )}
    </div>
  );
}

export default FloatingMenu;
