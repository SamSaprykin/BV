/* eslint-disable no-nested-ternary */
import React from "react";

/* Elements Decoration Icons */

const IconsLibrary = ({ type, className, fill, fillChild }) => {
  return type === "menu-icon" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      className={className}
    >
      <g>
        <g>
          <g>
            <path
              fill={fill}
              d="M34 0c18.778 0 34 15.222 34 34S52.778 68 34 68 0 52.778 0 34 15.222 0 34 0z"
            />
          </g>
          <g>
            <path
              fill={fillChild}
              d="M49 32.5l-12.053-1.447L35.5 19h-3l-1.447 12.053L19 32.5v3l12.053 1.447L32.5 49h3l1.447-12.053L49 35.5z"
            />
          </g>
        </g>
      </g>
    </svg>
  ) : type === "main-logo" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <g>
        <g>
          <path
            fill={fill}
            d="M79.994 47.023a13.572 13.572 0 0 0-4.984-10.527L35.201 3.213A13.46 13.46 0 0 0 26.454 0H4C1.79 0 0 1.797 0 4.013v38.534a4.009 4.009 0 0 0 1.532 3.157l19.413 16.224a3.341 3.341 0 0 1-.271-1.323V25.917a3.337 3.337 0 0 1 3.331-3.343h20.177c6.646 0 12.035 5.403 12.039 12.07a12.048 12.048 0 0 1-3.612 8.62 12.052 12.052 0 0 1 3.612 8.62c0 6.67-5.39 12.078-12.04 12.078H23.999c-.251 0-.5-.03-.745-.086l18.09 15.113A3.973 3.973 0 0 0 43.997 80h22.46C73.937 80 80 73.917 80 66.412a13.56 13.56 0 0 0-4.063-9.697A13.56 13.56 0 0 0 80 47.018z"
          />
        </g>
      </g>
    </svg>
  ) : type === "eyes" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="32"
      viewBox="0 0 24 32"
      className={className}
    >
      <g>
        <g>
          <g>
            <text
              dominantBaseline="text-before-edge"
              fill="#fff"
              fontFamily="'Forma DJR Cyrillic Micro','FormaDJRCyrillicMicro-Regular'"
              fontSize="24"
              fontStyle="none"
              fontWeight="400"
            >
              <tspan fontFamily="'Apple Color Emoji','AppleColorEmoji'">
                👀
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ) : type === "arrow-right" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      className={className}
    >
      <g>
        <g>
          <path
            fill={fill}
            d="M18 8l-5.502 8H9.535l4.656-6.667H0V6.667h14.19L9.536 0h2.963z"
          />
        </g>
      </g>
    </svg>
  ) : (
    <></>
  );
};

export default IconsLibrary;
