import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

const industriesCol1 = [
  { label: "Apartment", href: "https://sgss-apartment-security.vercel.app/" },
  { label: "Business Park", href: "https://sgss-business-park-security.vercel.app/" },
  { label: "Airport", href: "https://sgss-airport-security.vercel.app/" },
  { label: "Casino", href: "https://sgss-casino-security.vercel.app/" },
  { label: "Club", href: "https://sgss-club-security.vercel.app/" },
  { label: "Construction Site", href: "https://sgss-construction-site-security.vercel.app/" },
  { label: "Educational Institute", href: "https://sgss-educational-institute-security.vercel.app/" },
  { label: "Energy Facility", href: "https://sgss-energy-facility-security.vercel.app/" },
  { label: "Event", href: "https://sgss-event-security-industry.vercel.app/" },
];

const industriesCol2 = [
  { label: "Financial Institution", href: "https://sgss-financial-institution-security.vercel.app/" },
  { label: "Government Facility", href: "https://sgss-government-facility-security-u.vercel.app/" },
  { label: "Healthcare Facility", href: "https://sgss-healthcare-facility-security.vercel.app/" },
  { label: "High Rise", href: "https://sgss-high-rise-security.vercel.app/" },
  { label: "Homeowners Association", href: "https://sgss-homeowners-association-securit.vercel.app/" },
  { label: "Hotel", href: "https://sgss-hotel-security.vercel.app/" },
  { label: "Mall", href: "https://sgss-mall-security.vercel.app/" },
  { label: "Manufacturing Facility", href: "https://sgss-manufacturing-facility-securit.vercel.app/" },
];

const industriesCol3 = [
  { label: "Religious Facility", href: "https://sgss-religious-facility-security.vercel.app/" },
  { label: "Shopping Center", href: "https://sgss-shopping-center-security.vercel.app/" },
  { label: "Sporting Event", href: "https://sgss-sporting-event-security.vercel.app/" },
  { label: "Storage Facility", href: "https://sgss-storage-facility-security.vercel.app/" },
  { label: "Strike/Union Dispute", href: "https://sgss-strike-union-dispute-security.vercel.app/" },
  { label: "Transportation & Logistics Facility", href: "https://sgss-transportation-logistics-facility-security.vercel.app/" },
  { label: "Vehicle Dealer", href: "https://sgss-vehicle-dealer-security.vercel.app/" },
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
