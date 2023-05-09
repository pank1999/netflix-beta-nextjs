import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about" className={styles.navbarLink}>
              about
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/movie" className={styles.navbarLink}>
              movie
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact" className={styles.navbarLink}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
