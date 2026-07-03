import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const industriesCol1 = [
  { label: "Apartment", href: "/" },
  { label: "Business Park", href: "https://www.secureguardservices.com/" },
  { label: "Airport", href: "https://www.secureguardservices.com/" },
  { label: "Casino", href: "https://www.secureguardservices.com/" },
  { label: "Club", href: "https://www.secureguardservices.com/" },
  { label: "Construction Site", href: "https://www.secureguardservices.com/" },
  { label: "Educational Institute", href: "https://www.secureguardservices.com/" },
  { label: "Energy Facility", href: "https://www.secureguardservices.com/" },
  { label: "Event", href: "https://sgss-event-security.vercel.app/" },
];

const industriesCol2 = [
  { label: "Financial Institution", href: "https://www.secureguardservices.com/" },
  { label: "Government Facility", href: "https://www.secureguardservices.com/" },
  { label: "Healthcare Facility", href: "https://www.secureguardservices.com/" },
  { label: "High Rise", href: "https://www.secureguardservices.com/" },
  { label: "Homeowners Association", href: "https://www.secureguardservices.com/" },
  { label: "Hotel", href: "https://www.secureguardservices.com/" },
  { label: "Mall", href: "https://www.secureguardservices.com/" },
  { label: "Manufacturing Facility", href: "https://www.secureguardservices.com/" },
];

const industriesCol3 = [
  { label: "Religious Facility", href: "https://www.secureguardservices.com/" },
  { label: "Shopping Center", href: "https://www.secureguardservices.com/" },
  { label: "Sporting Event", href: "https://www.secureguardservices.com/" },
  { label: "Storage Facility", href: "https://www.secureguardservices.com/" },
  { label: "Strike/Union Dispute", href: "https://www.secureguardservices.com/" },
  { label: "Transportation & Logistics Facility", href: "https://www.secureguardservices.com/" },
  { label: "Vehicle Dealer", href: "https://www.secureguardservices.com/" },
  { label: "Secure Guard", href: "https://www.secureguardservices.com/" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <img
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a0262de60a7a52fdc112210.png"
            alt="SGSS Logo"
            className={styles.logoImg}
            style={{ height: "76px", width: "auto" }}
          />
          <p className={styles.brandDesc}>
            Professional security officers, mobile patrols, and access control solutions tailored for your business.
          </p>
        </div>

        {/* Link Column 1 (With Header) */}
        <div className={styles.footerLinksCol}>
          <h3 className={styles.footerHeader}>Industries</h3>
          <ul className={styles.footerLinkList}>
            {industriesCol1.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.footerLink}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Column 2 (No Header, Spaced) */}
        <div className={styles.footerLinksCol}>
          <div className={styles.headerSpacer} aria-hidden="true" />
          <ul className={styles.footerLinkList}>
            {industriesCol2.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.footerLink}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Column 3 (No Header, Spaced) */}
        <div className={styles.footerLinksCol}>
          <div className={styles.headerSpacer} aria-hidden="true" />
          <ul className={styles.footerLinkList}>
            {industriesCol3.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.footerLink}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Section (Spans Full Grid) */}
        <div className={styles.footerCopyContainer}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Secure Guard Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
