import React from "react";

const Naver = ({ size, color }: { size?: number; color?: string }) => {
  return (
    <svg
      fill="none"
      height={size || 24}
      viewBox={`0 0 ${size || 24} ${size || 24}`}
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6817 4.5V12.1271L9.31831 4.5H3.5625V19.5H9.31831V12L14.6817 19.5H20.4375V4.5H14.6817Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};

export default Naver;
