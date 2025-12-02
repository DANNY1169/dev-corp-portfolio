import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Hexagon background */}
      <path
        d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
        fill="url(#gradient1)"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
      />

      {/* Code brackets < > */}
      <path
        d="M14 13L9 20L14 27"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 13L31 20L26 27"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Forward slash / */}
      <path
        d="M22 12L18 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient
          id="gradient1"
          x1="5"
          y1="2"
          x2="35"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
