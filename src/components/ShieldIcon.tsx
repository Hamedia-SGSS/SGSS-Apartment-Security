import React from "react";

export type ShieldGlyph =
  | "check"
  | "car"
  | "package"
  | "trespass"
  | "dispute"
  | "guest"
  | "noise"
  | "pool"
  | "door"
  | "boundary"
  | "parking"
  | "gate"
  | "community"
  | "luxury"
  | "housing"
  | "senior"
  | "mixed"
  | "gated"
  | "garage"
  | "multibuilding";

interface ShieldIconProps {
  glyph: ShieldGlyph;
  variant?: "filled" | "outline";
  size?: number;
  className?: string;
}

const SHIELD_PATH =
  "M20 2.5L5.5 8.5V19.5C5.5 29.2 11.7 37.8 20 40.8C28.3 37.8 34.5 29.2 34.5 19.5V8.5L20 2.5Z";

function renderGlyph(glyph: ShieldGlyph) {
  switch (glyph) {
    case "check":
      return (
        <path
          d="M14.5 21.5L18.2 25.2L26 17.2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );

    case "car":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.5 23.5L14 18.5C14.3 17.6 15.1 17 16 17H24C24.9 17 25.7 17.6 26 18.5L27.5 23.5" />
          <rect x="11.5" y="23" width="17" height="5" rx="1.5" />
          <circle cx="15" cy="25.5" r="0.9" fill="#ffffff" stroke="none" />
          <circle cx="25" cy="25.5" r="0.9" fill="#ffffff" stroke="none" />
          <path d="M14 28V29.5M26 28V29.5" />
        </g>
      );

    case "package":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 14L27.5 18V26.5L20 30.5L12.5 26.5V18L20 14Z" />
          <path d="M12.5 18L20 22L27.5 18" />
          <path d="M20 22V30.5" />
          <path d="M16.2 16L23.7 20" />
        </g>
      );

    case "trespass":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="17.5" cy="17.5" r="3" />
          <path d="M12.5 27C12.5 23.8 14.7 22 17.5 22C19.3 22 20.8 22.7 21.7 24" />
          <circle cx="25" cy="24.5" r="3.5" />
          <path d="M22.8 22.3L27.2 26.7" />
        </g>
      );

    case "dispute":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 16.5C12 15.4 12.9 14.5 14 14.5H22C23.1 14.5 24 15.4 24 16.5V21.5C24 22.6 23.1 23.5 22 23.5H16.5L13 26.5V23.5C12.4 23.2 12 22.4 12 21.5V16.5Z" />
          <path d="M24 19.5H26.5C27.3 19.5 28 20.2 28 21V25C28 25.8 27.3 26.5 26.5 26.5H25.5V29L22.5 26.5H19.5" />
        </g>
      );

    case "guest":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="11.5" y="16" width="17" height="12" rx="2" />
          <circle cx="16.5" cy="21" r="1.8" />
          <path d="M14 25.5C14.5 24 15.4 23.5 16.5 23.5C17.6 23.5 18.5 24 19 25.5" />
          <path d="M21.5 20H25.5M21.5 23.5H24.5" />
        </g>
      );

    case "noise":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19.5H15L19.5 15.5V28.5L15 24.5H12V19.5Z" />
          <path d="M23 18.5C24.2 19.8 24.2 24.2 23 25.5" />
          <path d="M25.8 16C28 18.8 28 25.2 25.8 28" />
        </g>
      );

    case "pool":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.5 20.5C13.2 19 14.8 19 16.5 20.5C18.2 22 19.8 22 21.5 20.5C23.2 19 24.8 19 26.5 20.5C27.3 21.2 28 21.5 28.5 21.5" />
          <path d="M11.5 25.5C13.2 24 14.8 24 16.5 25.5C18.2 27 19.8 27 21.5 25.5C23.2 24 24.8 24 26.5 25.5C27.3 26.2 28 26.5 28.5 26.5" />
          <path d="M16 17.5V15.5M24 17.5V15.5" />
        </g>
      );

    case "door":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 29V15.5C14 14.7 14.7 14 15.5 14H24.5C25.3 14 26 14.7 26 15.5V29" />
          <path d="M11.5 29H28.5" />
          <circle cx="23" cy="22" r="1" fill="#ffffff" stroke="none" />
        </g>
      );

    case "boundary":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 15.5V28.5M20 15.5V28.5M26 15.5V28.5" />
          <path d="M11.5 19H28.5M11.5 25H28.5" />
        </g>
      );

    case "parking":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12.5" y="14.5" width="15" height="15" rx="2.5" />
          <path d="M17.5 26V18H21C22.4 18 23.5 19 23.5 20.3C23.5 21.6 22.4 22.5 21 22.5H17.5" />
        </g>
      );

    case "gate":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12" y="21.5" width="4" height="7" rx="0.8" />
          <path d="M16 23L27.5 16.5" />
          <path d="M11 28.5H29" />
          <circle cx="14" cy="18.5" r="1.3" />
        </g>
      );

    case "community":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.5 28V19.5L16.5 16L21.5 19.5V28H11.5Z" />
          <path d="M21.5 28V21.5L25 18.5L28.5 21.5V28H21.5Z" />
          <path d="M15.5 28V24H17.5V28" />
        </g>
      );

    case "luxury":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 16H25L28.5 20.5L20 29.5L11.5 20.5L15 16Z" />
          <path d="M11.5 20.5H28.5" />
          <path d="M17 16L15.5 20.5L20 29.5L24.5 20.5L23 16" />
        </g>
      );

    case "housing":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.5 21L20 14.5L28.5 21" />
          <path d="M14 19.5V28H26V19.5" />
          <path d="M18.2 28V23H21.8V28" />
        </g>
      );

    case "senior":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 28.5C20 28.5 12.5 24 12.5 18.8C12.5 16.6 14.2 15 16.3 15C17.8 15 19.1 15.8 20 17C20.9 15.8 22.2 15 23.7 15C25.8 15 27.5 16.6 27.5 18.8C27.5 24 20 28.5 20 28.5Z" />
        </g>
      );

    case "mixed":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="13" y="14.5" width="14" height="14" rx="1" />
          <path d="M16.5 18H18.5M21.5 18H23.5M16.5 21.5H18.5M21.5 21.5H23.5M18.5 28.5V25H21.5V28.5" />
        </g>
      );

    case "gated":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 28.5V17.5M28 28.5V17.5" />
          <path d="M12 20.5C15 17 25 17 28 20.5" />
          <path d="M16 20V28.5M20 19.5V28.5M24 20V28.5" />
          <path d="M12 25H28" />
        </g>
      );

    case "garage":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20L20 15L28 20V28.5H12V20Z" />
          <path d="M17.5 26.5V20.5H20.5C21.6 20.5 22.5 21.3 22.5 22.3C22.5 23.3 21.6 24 20.5 24H17.5" />
        </g>
      );

    case "multibuilding":
      return (
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="11.5" y="17.5" width="7.5" height="11" rx="0.8" />
          <rect x="21" y="14.5" width="7.5" height="14" rx="0.8" />
          <path d="M14.5 20.5H16M14.5 23.5H16M24 17.5H25.5M24 20.5H25.5M24 23.5H25.5" />
        </g>
      );
  }
}

export function ShieldIcon({
  glyph,
  variant = "filled",
  size = 42,
  className,
}: ShieldIconProps) {
  const height = Math.round((size * 44) / 40);
  const isFilled = variant === "filled";

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={SHIELD_PATH}
        fill={isFilled ? "#1d2c48" : "rgba(29, 44, 72, 0.35)"}
        stroke="#fecf31"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {renderGlyph(glyph)}
    </svg>
  );
}
