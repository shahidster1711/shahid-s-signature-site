import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

// SingleStore Logo - Purple infinity-like symbol
export const SingleStoreLogo: React.FC<LogoProps> = ({ className, size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6z"
      fill="#AA8CFF"
      fillOpacity="0.3"
    />
    <path
      d="M11 12.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5v1.5h-2v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5h5c1.38 0 2.5 1.12 2.5 2.5v2c0 1.38-1.12 2.5-2.5 2.5h-5c-1.38 0-2.5-1.12-2.5-2.5V18h2v1.5c0 .28.22.5.5.5h5c.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5h-5c-1.38 0-2.5-1.12-2.5-2.5v-2z"
      fill="#AA8CFF"
    />
  </svg>
);

// AWS Logo - Stylized cloud/arrow
export const AWSLogo: React.FC<LogoProps> = ({ className, size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.5 18.5L12 13l2.5 5.5M10.5 16.5h3"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13l1.5 5.5L19 15l1.5 3.5L22 13"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 21c8 4 12 4 20 0"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M24 20l2 1-2 1"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Infosys Logo - Stylized "i" in circle
export const InfosysLogo: React.FC<LogoProps> = ({ className, size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="11" stroke="#007CC3" strokeWidth="2" />
    <circle cx="16" cy="10" r="1.5" fill="#007CC3" />
    <path
      d="M16 14v8"
      stroke="#007CC3"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
