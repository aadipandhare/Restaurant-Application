
import React from "react";

export const WaveDivider= () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[145px] overflow-hidden z-20 pointer-events-none">

      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Cream section background */}
        <path
          d="M0 85
          C180 30 300 125 500 85
          C720 35 850 20 1050 65
          C1230 110 1350 105 1440 55
          L1440 180 L0 180 Z"
          fill="#FFF4DF"
        />

        {/* Golden wave underneath */}
        <path
          d="M0 72
          C180 17 300 112 500 72
          C720 22 850 7 1050 52
          C1230 97 1350 92 1440 42"
          fill="none"
          stroke="#D69A35"
          strokeWidth="13"
        />

        {/* Maroon overlapping ribbon */}
        <path
          d="M0 65
          C180 10 300 105 500 65
          C720 15 850 0 1050 45
          C1230 90 1350 85 1440 35"
          fill="none"
          stroke="#520D29"
          strokeWidth="7"
        />

        {/* Thin gold highlight */}
        <path
          d="M0 77
          C180 22 300 117 500 77
          C720 27 850 12 1050 57
          C1230 102 1350 97 1440 47"
          fill="none"
          stroke="#F5C45A"
          strokeWidth="2"
        />

        {/* Decorative left tree leaves */}
        <g transform="translate(0,15)">
          <path
            d="M-10 100 Q65 55 120 5"
            stroke="#B88632"
            strokeWidth="3"
            fill="none"
          />

          <path d="M15 85 Q-5 35 35 40 Q42 67 15 85Z"
            fill="#E8A719" stroke="#9B651C" />

          <path d="M38 65 Q25 10 70 23 Q73 48 38 65Z"
            fill="#55204E" stroke="#B88632" />

          <path d="M65 45 Q65 -5 105 10 Q100 35 65 45Z"
            fill="#E8A719" stroke="#9B651C" />

          <path d="M70 78 Q35 50 75 40 Q98 60 70 78Z"
            fill="#54204B" stroke="#B88632" />

          <path d="M5 105 Q-20 65 12 60 Q35 88 5 105Z"
            fill="#54204B" stroke="#B88632" />
        </g>

        {/* Decorative right tree leaves */}
        <g transform="translate(1440,15) scale(-1,1)">
          <path
            d="M-10 100 Q65 55 120 5"
            stroke="#B88632"
            strokeWidth="3"
            fill="none"
          />

          <path d="M15 85 Q-5 35 35 40 Q42 67 15 85Z"
            fill="#E8A719" stroke="#9B651C" />

          <path d="M38 65 Q25 10 70 23 Q73 48 38 65Z"
            fill="#55204E" stroke="#B88632" />

          <path d="M65 45 Q65 -5 105 10 Q100 35 65 45Z"
            fill="#E8A719" stroke="#9B651C" />

          <path d="M70 78 Q35 50 75 40 Q98 60 70 78Z"
            fill="#54204B" stroke="#B88632" />

          <path d="M5 105 Q-20 65 12 60 Q35 88 5 105Z"
            fill="#54204B" stroke="#B88632" />
        </g>

      </svg>
    </div>
  );
}
