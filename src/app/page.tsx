import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations and fits
const situations = [
  { icon: "🚗", title: "Vehicle Break-ins", desc: "Patrolling garages and open lots to prevent break-ins and vehicle vandalism." },
  { icon: "📦", title: "Package Theft", desc: "Monitoring lobby deliveries and package lockers to prevent porch piracy." },
  { icon: "👤", title: "Unauthorized Guests", desc: "Checking credentials and managing entry to stop unauthorized access." },
  { icon: "🔊", title: "Noise Complaints", desc: "Addressing after-hours disturbance complaints professionally to maintain quiet hours." },
  { icon: "🏊", title: "Pool & Amenity Misuse", desc: "Monitoring common amenities to prevent after-hours trespass and property damage." },
  { icon: "🚪", title: "Loitering near Entrances", desc: "Keeping doorways, lobbies, and common walkways clear and safe for residents." },
  { icon: "⛺", title: "Homeless Activity", desc: "De-escalating trespassing, loitering, and encampments near property boundaries." },
  { icon: "⛔", title: "Parking Violations", desc: "Conducting parking enforcement, fire lane clearance, and towing coordination." },
  { icon: "🚧", title: "Gate Access Problems", desc: "Assisting residents and guests with malfunctioning vehicle gates or access key issues." },
  { icon: "🤝", title: "Resident Disputes", desc: "Mediating community conflicts peacefully without unnecessary escalation." },
];

const properties = [
  { icon: "🏘️", label: "Apartment Communities" },
  { icon: "💎", label: "Luxury Apartments" },
  { icon: "🏠", label: "Affordable Housing" },
  { icon: "👵", label: "Senior Housing" },
  { icon: "🏢", label: "Mixed-Use Residential" },
  { icon: "⛩️", label: "Gated Communities" },
  { icon: "🅿️", label: "Parking Garages" },
  { icon: "🏢", label: "Multi-Building Properties" },
];

const coverageOptions = [
  { service: "Overnight Patrols", schedule: "Custom Hours", desc: "Dedicated physical patrols during peak vulnerability periods (typically 10 PM - 6 AM)." },
  { service: "Weekend Amenity Checks", schedule: "Fri - Sun Focus", desc: "Increased monitoring of pools, gyms, clubhouse facilities, and shared areas." },
  { service: "High-Complaint Target Coverage", schedule: "Flexible Shift", desc: "Targeted deployment focused on specific areas with ongoing issues or resident concerns." },
  { service: "Move-in / Peak Periods", schedule: "Seasonal / Occasional", desc: "Extra support during major moving weekends, property transitions, or community events." },
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
            src="/apartment_security_hero.png"
            alt="Secure Guard officer standing in front of apartment complex at twilight"
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
              Secure Guard Security Services delivers responsive, de-escalation-focused protection for residential communities. Protect your tenants, secure your parking structures, and ensure smooth after-hours operations.
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
              {[
                { icon: "🚗", title: "Vehicle Break-ins", desc: "Vulnerable parking garages and open carports are targets for break-ins and theft." },
                { icon: "📦", title: "Lobby Package Theft", desc: "Unsecured lobbies and doorsteps attract opportunistic porch pirates." },
                { icon: "🚶", title: "Trespassing & Loitering", desc: "Non-residents gathering in stairwells, laundry rooms, or recreation zones." },
                { icon: "🗣️", title: "Resident Disputes", desc: "Noise complaints, parking violations, and conflicts requiring diplomatic de-escalation." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
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
                src="/apartment_patrol_solution.png" 
                alt="Secure Guard officer patrolling residential building courtyard" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Visible Patrols & <span className={styles.titleAccent}>Professional Community Presence</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides apartment security officers, patrol services, gate monitoring, parking lot checks, amenity area monitoring, resident assistance, incident reporting, and after-hours support.
              </p>
              <p className={styles.bodyText}>
                Our officers are trained to de-escalate situations professionally. We provide de-escalation-focused patrols and support to property managers and leasing staff, managing resident disputes and neighborhood complaints peacefully.
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
            Security coverage can be customized for overnight hours, weekends, high-complaint areas, move-in periods, or properties dealing with ongoing trespassing or safety concerns. We design a plan that fits your community’s specific schedule and layout.
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
                By deploying Secure Guard, you establish a reliable security presence that supports both property managers and leasing staff, reduces property damage, and ensures residents feel safe and supported.
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
                  <span className={styles.opsFeatureIcon}>🛡️</span>
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
                  <span className={styles.situationIcon}>{sit.icon}</span>
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
                <div className={styles.propertyIcon}>{prop.icon}</div>
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
