export const MeituanLogo = () => {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto"
    >
      {/* Chinese characters 美团 */}
      <text
        x="10"
        y="55"
        fontSize="36"
        fontFamily="SimSun, serif"
        fontWeight="400"
        fill="currentColor"
      >
        美团
      </text>
      {/* Meituan text */}
      <text
        x="90"
        y="55"
        fontSize="36"
        fontFamily="Arial, sans-serif"
        fontWeight="300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        letterSpacing="1"
      >
        Meituan
      </text>
    </svg>
  );
};
