import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ShieldIcon, type ShieldGlyph } from "@/components/ShieldIcon";

// Reusable icons for situations and fits
const situations: { glyph: ShieldGlyph; title: string; desc: string }[] = [
  { glyph: "car", title: "Vehicle Break-ins", desc: "Patrol garages and monitor designated delivery areas to help deter theft and promptly report suspicious activity." },
  { glyph: "package", title: "Package Theft", desc: "Patrol garages and monitor designated delivery areas to help deter theft and promptly report suspicious activity." },
  { glyph: "guest", title: "Unauthorized Guests", desc: "Check visitor authorization where the property has approved access-control policies and resident privacy requirements." },
  { glyph: "noise", title: "Noise Complaints", desc: "Addressing after-hours disturbance complaints professionally and reporting to property management to support quiet hours." },
  { glyph: "pool", title: "Pool & Amenity Misuse", desc: "Monitoring common amenities to help deter after-hours trespass and report property damage." },
  { glyph: "door", title: "Loitering near Entrances", desc: "Monitoring doorways, lobbies, and common walkways to support clear and orderly resident access." },
  { glyph: "boundary", title: "Unauthorized Entry & Boundary Concerns", desc: "Addressing unauthorized entry, loitering, and boundary concerns in accordance with property policies and applicable law." },
  { glyph: "parking", title: "Parking Violations", desc: "Document parking violations and coordinate authorized towing under property policies and applicable local requirements." },
  { glyph: "gate", title: "Gate Access Problems", desc: "Assisting residents and guests with malfunctioning vehicle gates or access issues per property post orders." },
  { glyph: "dispute", title: "Resident Disputes", desc: "Use verbal de-escalation and notify property management or emergency services as appropriate; officers support rather than replace property management." },
];

const properties: { glyph: ShieldGlyph; label: string }[] = [
  { glyph: "community", label: "Apartment Communities" },
  { glyph: "luxury", label: "Luxury Apartments" },
  { glyph: "housing", label: "Affordable Housing" },
  { glyph: "senior", label: "Senior Housing" },
  { glyph: "mixed", label: "Mixed-Use Residential" },
  { glyph: "gated", label: "Gated Communities" },
  { glyph: "garage", label: "Parking Garages" },
  { glyph: "multibuilding", label: "Multi-Building Properties" },
];

const coverageOptions = [
  { service: "Overnight Patrols", schedule: "Sample: 10 PM - 6 AM", desc: "Scheduled physical patrols during overnight hours (sample schedule; actual hours and staffing are determined by the client's service agreement)." },
  { service: "Weekend Amenity Checks", schedule: "Sample: Fri - Sun", desc: "Scheduled monitoring of pools, gyms, clubhouse facilities, and shared areas per the property agreement." },
  { service: "High-Complaint Target Coverage", schedule: "Custom / By Agreement", desc: "Targeted deployment focused on specific areas with ongoing issues or resident concerns." },
  { service: "Move-in / Peak Periods", schedule: "Seasonal / Contracted", desc: "Separately scheduled support during major moving weekends, property transitions, or community events." },
];

export default function ApartmentSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/apart.png"
            alt="Secure Guard officer standing in front of apartment complex"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Apartment Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Protect Residents, Property, Parking Areas, <span className={styles.heroTitleAccent}>and Daily Community Operations</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers responsive, de-escalation-focused security services for residential communities. Help protect residents and property through visible patrols, access control, and timely incident reporting.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges Beyond a <span className={styles.titleAccent}>Front Gate Guard</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Apartment communities deal with a wide range of security concerns, from trespassing and vehicle break-ins to resident complaints, noise issues, package theft, loitering, and unauthorized access.
              </p>
              <p className={styles.bodyText}>
                Property managers need more than a guard standing at the front. They need visible patrols, clear reporting, resident support, parking lot checks, access control, and a team that understands how to handle community issues professionally without escalating situations unnecessarily.
              </p>
            </div>
            <div className={styles.whyCards}>
              {(
                [
                  { glyph: "car", title: "Vehicle Break-ins", desc: "Patrol garages and monitor designated delivery areas to help deter theft and promptly report suspicious activity." },
                  { glyph: "package", title: "Lobby Package Theft", desc: "Patrol garages and monitor designated delivery areas to help deter theft and promptly report suspicious activity." },
                  { glyph: "trespass", title: "Trespassing & Loitering", desc: "Non-residents gathering in stairwells, laundry rooms, or recreation zones." },
                  { glyph: "dispute", title: "Resident Disputes", desc: "Use verbal de-escalation and notify property management or emergency services as appropriate; officers support rather than replace property management." },
                ] as { glyph: ShieldGlyph; title: string; desc: string }[]
              ).map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <ShieldIcon glyph={c.glyph} variant="filled" size={38} />
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a4e7c87eada8c1f4560def4.webp" 
                alt="Secure Guard officer patrolling residential building courtyard" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Visible Patrols & <span className={styles.titleAccent}>Professional Community Presence</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides apartment security officers, patrol services, gate monitoring, parking lot checks, amenity area monitoring, resident assistance, incident reporting, and after-hours support—with standing guards, mobile patrols, and specialized duties defined in your service agreement.
              </p>
              <p className={styles.bodyText}>
                Our officers are trained in verbal de-escalation and follow property post orders to support property managers and leasing staff by observing, documenting, and escalating community issues appropriately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Tailored Coverage Based on <span className={styles.titleAccentGold}>Property Needs</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Sample schedules are shown below. Security coverage hours, patrol frequency, and staffing levels are customized and determined by your property&apos;s service agreement.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you establish a reliable security presence that supports both property managers and leasing staff, helps deter property damage, and supports a visible security presence and helps residents feel informed and supported.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Visible security presence for residents and guests",
                "Reduced trespassing, loitering, and parking issues",
                "Documented patrols and incident reports",
                "Support for property managers and leasing staff",
                "Better response to resident complaints",
                "Improved monitoring of entrances, gates, garages, and amenities",
                "Flexible coverage based on property needs",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>
                    <ShieldIcon glyph="check" variant="outline" size={22} />
                  </span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>De-escalation In Action</span>
            <h2 className={styles.sectionTitle}>
              Common Apartment <span className={styles.titleAccent}>Security Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>
                    <ShieldIcon glyph={sit.glyph} variant="filled" size={36} />
                  </span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Communities We <span className={styles.titleAccentGold}>Protect & Serve</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our residential security services are customized to suit the specific design, resident demographic, and security requirements of different multi-family properties.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>
                  <ShieldIcon glyph={prop.glyph} variant="outline" size={42} />
                </div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
