"use client";
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import { CgCloseR, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={openMenu ? `${styles.active}` : ""}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link href="/" onClick={() => setOpenMenu(false)} className={`${styles.navbarLink} ${isActive('/') ? styles.activeLink : ''}`}>
                HOME
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/about" onClick={() => setOpenMenu(false)} className={`${styles.navbarLink} ${isActive('/about') ? styles.activeLink : ''}`}>
                ABOUT
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/services" onClick={() => setOpenMenu(false)} className={`${styles.navbarLink} ${isActive('/services') ? styles.activeLink : ''}`}>
                SERVICES
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/gallery" onClick={() => setOpenMenu(false)} className={`${styles.navbarLink} ${isActive('/gallery') ? styles.activeLink : ''}`}>
                GALLERY
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/contact" onClick={() => setOpenMenu(false)} className={`${styles.navbarLink} ${isActive('/contact') ? styles.activeLink : ''}`}>
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className={styles['mobile-navbar-btn']}>
            <CgMenu
              name="menu-outline"
              className={styles['mobile-nav-icon']}
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
