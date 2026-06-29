import { motion } from "motion/react";

// Latin Empty Cross Outline SVG
export function WatermarkCross({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none text-gold/8 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Simple elegant cross */}
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="7" y1="8" x2="17" y2="8" />
      </svg>
    </div>
  );
}

// Ichthys (Christian Fish) Outline SVG
export function WatermarkFish({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none text-gold/8 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Fish paths */}
        <path d="M2 12c4-6 13-6 17 0 3 3 3 3 3 3s0 0-3 3c-4 6-13 6-17 0" />
        <path d="M19 12l3-3v6z" />
      </svg>
    </div>
  );
}

// Crown of Thorns Outline SVG
export function WatermarkCrown({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none text-gold/8 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Double circular crown loops */}
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="7" />
        {/* Braided thorn prongs */}
        <path d="M12 4l-1-2M16 5l2-1M19 9l2-1M20 13l2 1M17 18l1 2M13 20l-1 2M8 19l-2 1M4 15l-2 1M4 9l-2-1M7 5l-1-2" />
        <path d="M11 5l1-2M15 6l-1-2M18 8l1-2M19 12l1-2M18 16l-1 2M14 19l1 2M10 20l-1-2M6 17l1 2M5 13l-2-1M5 8l2 1" />
      </svg>
    </div>
  );
}

// Loaf of Bread Outline SVG
export function WatermarkBread({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none text-gold/8 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {/* Rounded rustic bread shape */}
        <path d="M3 14c0-4.4 3.6-8 8-8h2c4.4 0 8 3.6 8 8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        {/* Slash marks */}
        <line x1="7" y1="11" x2="10" y2="8" />
        <line x1="11" y1="11" x2="14" y2="8" />
        <line x1="15" y1="11" x2="18" y2="8" />
      </svg>
    </div>
  );
}
