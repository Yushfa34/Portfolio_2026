import { motion } from "motion/react";

export function Mascot({ size = 180 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      aria-label="Developer mascot"
    >
      {/* body */}
      <motion.ellipse
        cx="100" cy="120" rx="78" ry="68"
        fill="var(--color-primary)"
        animate={{ scaleY: [1, 0.97, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* belly */}
      <ellipse cx="100" cy="135" rx="55" ry="42" fill="var(--color-primary-soft)" opacity="0.9" />
      {/* eyes */}
      <g>
        <circle cx="78" cy="95" r="14" fill="white" />
        <circle cx="122" cy="95" r="14" fill="white" />
        <motion.circle
          cx="80" cy="97" r="6" fill="#131F24"
          animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="124" cy="97" r="6" fill="#131F24"
          animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </g>
      {/* beak */}
      <path d="M88 118 Q100 130 112 118 Q100 138 88 118 Z" fill="#FFC800" stroke="#E0A800" strokeWidth="1.5" />
      {/* headphones */}
      <path d="M40 90 Q100 30 160 90" stroke="#131F24" strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="32" y="86" width="16" height="22" rx="6" fill="var(--color-accent)" />
      <rect x="152" y="86" width="16" height="22" rx="6" fill="var(--color-accent)" />
      {/* feet */}
      <ellipse cx="80" cy="188" rx="14" ry="6" fill="#FFC800" />
      <ellipse cx="120" cy="188" rx="14" ry="6" fill="#FFC800" />
    </motion.svg>
  );
}
