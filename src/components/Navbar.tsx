"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo} id="nav-logo">
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/691d0ba7c2cf864910f19e13.png"
            alt="SGSS Logo"
            className={styles.logoImg}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <button
              onClick={() => typeof window !== "undefined" && window.print()}
              className={styles.printBtn}
              aria-label="Print page or save as PDF"
              title="Print page or save as PDF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" style={{ display: 'none' }} />
                <path d="M6 9V2h12v7" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </button>
          </li>
          <li>
            <Link
              href="https://www.secureguardservices.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
              id="nav-cta"
            >
              Request Pricing
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

