import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const row1 = [
  { label: "Vacant Property", href: "https://sgss-vacant-property.vercel.app/" },
  { label: "Remote Monitoring", href: "https://sgss-remote-monitoring.vercel.app/" },
  { label: "Unarmed Guard", href: "https://sgss-unarmed-guard.vercel.app/" },
  { label: "Fire Watch", href: "https://sgss-fire-watch.vercel.app/" },
];

const row2 = [
  { label: "Access Control", href: "https://sgss-access-control.vercel.app/" },
  { label: "Event Security", href: "https://sgss-event-security.vercel.app/" },
  { label: "Camera Monitoring", href: "https://sgss-camera-monitoring.vercel.app/" },
  { label: "Secure Guard", href: "https://www.secureguardservices.com/" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            style={{ height: '76px' }}
          />
        </div>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinksRow}>
            {row1.map((link, idx) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {link.label}
                </Link>
                {idx < row1.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.footerLinksRow}>
            {row2.map((link, idx) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {link.label}
                </Link>
                {idx < row2.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

