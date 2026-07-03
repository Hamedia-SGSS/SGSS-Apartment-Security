"use client";

import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      
      setScrollProgress(scroll);
      setIsVisible(totalScroll > 150);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circleRadius = 22;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div 
      className={`${styles.progressWrap} ${isVisible ? styles.activeProgress : ""}`} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className={styles.progressCircle} width="100%" height="100%" viewBox="-2 -2 50 50">
        <circle
          cx="23"
          cy="23"
          r={circleRadius}
          strokeWidth="3"
          fill="none"
          stroke="var(--color-gold)"
          transform="rotate(-90 23 23)"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 100ms ease-out, stroke 200ms ease'
          }}
        />
      </svg>
      <div className={styles.arrow}>↑</div>
    </div>
  );
}
