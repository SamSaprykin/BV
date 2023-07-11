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
  ) : type === "sm-arrow-right" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      className={className}
      fill={fill}
    >
      <g>
        <g>
          <path d="M14 6l-4.28 6H7.416l3.621-5H0V5h11.037L7.416 0H9.72z" />
        </g>
      </g>
    </svg>
  ) : type === "sm-arrow-right-white" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      className={className}
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M14 6l-4.28 6H7.416l3.621-5H0V5h11.037L7.416 0H9.72z"
          />
        </g>
      </g>
    </svg>
  ) : type === "zorgwijzerLogo" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="291"
      height="68"
      viewBox="0 0 291 68"
    >
      <defs>
        <linearGradient
          id="p5dka"
          x1="7.56"
          x2="29.85"
          y1="48.76"
          y2="26.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#127d20" />
          <stop offset="1" stopColor="#63d529" />
        </linearGradient>
        <linearGradient
          id="p5dkb"
          x1="54.24"
          x2="71.83"
          y1="45.62"
          y2="20.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f1b830" />
          <stop offset=".07" stopColor="#eec331" />
          <stop offset=".22" stopColor="#e8d633" />
          <stop offset=".4" stopColor="#e4e434" />
          <stop offset=".62" stopColor="#e2ed35" />
          <stop offset="1" stopColor="#e1ef35" />
        </linearGradient>
        <linearGradient
          id="p5dkc"
          x1="30.15"
          x2=".02"
          y1="31.08"
          y2="31.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f1b830" />
          <stop offset="1" stopColor="#e1ef35" />
        </linearGradient>
        <linearGradient
          id="p5dkd"
          x1=".3"
          x2="69.42"
          y1="21.39"
          y2="21.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f1b830" />
          <stop offset="1" stopColor="#e1ef35" />
        </linearGradient>
        <linearGradient
          id="p5dke"
          x1="-5.22"
          x2="-5.22"
          y1="237.54"
          y2="218.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#58cff4" />
          <stop offset="1" stopColor="#26a8f1" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <g>
            <g>
              <path
                fill="#fff"
                d="M117.108 41.18c-3.352 0-5.617-2.4-5.617-6.024 0-3.625 2.265-6.026 5.617-6.026 3.262 0 5.573 2.492 5.573 6.026 0 3.624-2.266 6.025-5.573 6.025zm0-17.531c-6.931 0-11.778 4.711-11.778 11.461 0 6.796 4.847 11.507 11.778 11.507 6.932 0 11.734-4.757 11.734-11.507s-4.848-11.461-11.734-11.461z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M206.446 23.83h-4.62a.777.777 0 0 0-.77.589l-4.577 14.089-4.53-14.09a.83.83 0 0 0-.77-.588h-4.712a.777.777 0 0 0-.77.589l-4.53 14.089-4.666-14.09c-.09-.316-.408-.543-.77-.543h-4.667c-.271 0-.498.136-.68.363a.914.914 0 0 0-.09.77l7.747 20.975c.136.317.408.544.77.544h4.666c.363 0 .68-.227.77-.544l4.53-13.274 4.531 13.274c.136.317.408.544.77.544h4.712c.362 0 .634-.227.77-.544l7.656-20.975a.913.913 0 0 0-.09-.77.747.747 0 0 0-.68-.408z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M215.326 45.666V24.69a.812.812 0 0 0-.816-.816h-4.485a.812.812 0 0 0-.815.816v20.975c0 .453.362.815.815.815h4.485a.812.812 0 0 0 .816-.815z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M212.245 20.341c1.993 0 3.488-1.495 3.488-3.488 0-2.038-1.495-3.533-3.488-3.533-1.993 0-3.488 1.54-3.488 3.533.045 1.948 1.54 3.488 3.488 3.488z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M223.843 13.274c-2.04 0-3.58 1.54-3.58 3.58 0 2.038 1.54 3.578 3.58 3.578 2.084 0 3.624-1.495 3.624-3.579s-1.54-3.579-3.624-3.579z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M226.062 23.83h-4.485a.812.812 0 0 0-.815.815v22.516c0 1.359-.544 2.039-1.676 2.039-.68 0-1.495-.318-2.22-.816a.893.893 0 0 0-.68-.136.78.78 0 0 0-.543.453l-1.495 3.534c-.136.362-.046.77.272.997 1.359 1.042 3.125 1.585 4.892 1.585 3.67 0 7.611-2.537 7.611-8.064V24.691c-.045-.499-.408-.861-.86-.861z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M249.71 41.136h-10.6l10.872-12.912c.136-.136.182-.317.182-.543v-3.036c0-.453-.363-.86-.816-.86h-17.26c-.227 0-.408.09-.59.226a.861.861 0 0 0-.226.589v3.715c0 .453.363.815.816.815h9.876L231.09 41.996c-.136.136-.181.318-.181.544v3.08c0 .454.362.861.815.861h17.986c.226 0 .407-.09.589-.226a.861.861 0 0 0 .226-.59v-3.714c0-.408-.362-.815-.815-.815z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M258.228 32.755c.68-2.402 2.537-3.806 5.164-3.806 2.718 0 4.485 1.404 4.938 3.806zm5.074-9.106c-6.75.045-11.417 4.756-11.417 11.507 0 6.84 4.666 11.461 11.552 11.461 3.806 0 7.022-1.313 9.288-3.805a.889.889 0 0 0 0-1.133l-2.401-2.582a.73.73 0 0 0-.59-.272.861.861 0 0 0-.588.227 7.461 7.461 0 0 1-5.346 2.22c-2.582 0-4.53-1.314-5.391-3.625h14.769c.453 0 .77-.317.815-.77.317-4.575-.589-8.019-2.673-10.284-1.857-1.902-4.53-2.944-8.018-2.944z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M144.109 23.649h-3.035a9.033 9.033 0 0 0-3.489.68c-3.579 1.404-6.116 4.847-6.116 8.924V45.62c0 .453.363.815.816.815h4.53a.812.812 0 0 0 .816-.815V34.703c.362-3.308 2.808-5.256 6.387-5.074.227 0 .453-.091.59-.227a.73.73 0 0 0 .271-.589v-4.349c.046-.453-.317-.815-.77-.815z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M290.076 24.464a.812.812 0 0 0-.816-.815h-3.035a9.033 9.033 0 0 0-3.488.68c-3.58 1.404-6.116 4.847-6.116 8.924V45.62c0 .453.362.815.815.815h4.53a.812.812 0 0 0 .816-.815V34.703c.362-3.308 2.809-5.256 6.388-5.074.226 0 .453-.091.589-.227a.73.73 0 0 0 .271-.589l.046-4.349c0 .045 0 0 0 0z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M157.519 40.23c-3.126 0-5.255-2.266-5.3-5.663.045-2.583 1.358-4.53 3.397-5.3.589-.227 1.223-.318 1.903-.318 3.126 0 5.21 2.265 5.21 5.618 0 .272 0 .498-.046.725-.317 2.944-2.355 4.938-5.164 4.938zm11.326 4.485V33.026c-.091-3.941-2.583-7.293-6.071-8.653h-.045c-1.088-.407-2.266-.68-3.489-.68h-3.125c-5.935.182-9.877 4.486-9.877 10.783 0 6.569 4.123 10.963 10.284 10.963 2.446 0 4.53-.724 6.07-2.084v.408c-.09 2.945-1.087 5.708-5.707 5.663-2.22 0-4.123-.634-6.116-2.13a.786.786 0 0 0-.635-.135c-.226.045-.407.181-.543.408l-1.948 3.261c-.227.363-.091.861.226 1.088 2.854 1.948 5.935 2.9 9.197 2.9 6.66 0 11.688-4.214 11.733-9.424.046-.045.046-.634.046-.68z"
              />
            </g>
            <g>
              <path
                fill="#fff"
                d="M103.02 41.09H90.38l12.684-15.086a.514.514 0 0 0 .136-.362v-3.443c0-.317-.272-.634-.589-.634H83.176c-.18 0-.317.045-.407.18a.675.675 0 0 0-.182.409v4.167a.6.6 0 0 0 .59.59H95L82.316 41.95a.514.514 0 0 0-.136.363v3.488c0 .317.272.634.589.634h20.205c.181 0 .317-.045.408-.181a.675.675 0 0 0 .18-.408V41.68c.046-.317-.226-.589-.543-.589z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                fill="url(#p5dka)"
                d="M2.809 28.134c.226.996.68 2.22 1.495 3.443.136.226.271.407.453.634.136.181.317.408.498.589l.045.045c.181.181.363.363.544.59l.09.09c.182.18.363.362.544.543l.136.136c.181.136.362.317.544.453.09.046.18.136.226.181l.544.408c.09.09.226.136.362.227.181.09.317.226.499.317.136.09.271.136.407.226.182.091.363.227.544.317a27.716 27.716 0 0 0 3.398 1.496c.543.226 1.132.407 1.676.543 2.265.634 4.485.906 6.705.906 1.132 0 2.22-.09 3.307-.272 2.13-.317 4.258-.951 6.388-1.812 4.847-1.767 6.342-2.854 6.387-2.854-.045-.045.046.045 0 0-4.756-2.854-10.329-6.342-15.539-8.336-3.216-1.223-6.569-2.038-9.966-2.355-3.896-.363-7.249 1.042-9.423 3.533 0 .272.09.59.136.952 0-.046 0-.046 0 0z"
              />
            </g>
            <g>
              <path
                fill="url(#p5dkb)"
                d="M74.297 33.117c-.272-2.31-1.178-4.35-2.582-5.98-2.175-2.492-5.527-3.896-9.423-3.534-3.398.317-6.75 1.133-9.967 2.356-2.718 1.042-5.3 2.356-7.838 3.76a46.444 46.444 0 0 1 3.444-1.495c3.488-1.314 7.067-2.22 10.736-2.537 4.214-.407 7.838 1.133 10.148 3.851 1.495 1.722 2.492 3.941 2.764 6.433 0 .317.045.634.045.997 0 .317-.045.634-.045.996a22.323 22.323 0 0 1-.317 2.99c-.453 2.13-1.088 4.123-1.994 6.071a46.125 46.125 0 0 1-1.54 2.99 30.483 30.483 0 0 1-.997 1.586c.227-.272.499-.59.725-.861a39.626 39.626 0 0 0 3.217-4.576c.498-.906.996-1.812 1.45-2.763.815-1.767 1.404-3.67 1.857-5.618a28.52 28.52 0 0 0 .272-2.763c0-.317.045-.59.045-.906.045-.363.045-.68 0-.997z"
              />
            </g>
            <g>
              <path
                fill="url(#p5dkc)"
                d="M1.585 37.828c.227.136.453.272.635.454 7.61 4.847 15.539 5.073 27.906-.635-.09.046-.226.09-.317.136-.362.136-.725.272-1.042.408l-.815.272c-.363.136-.68.226-1.042.317-.272.09-.59.136-.86.226-.363.091-.68.182-1.043.272-.272.045-.589.136-.86.181-.363.091-.68.136-1.043.182-.271.045-.589.09-.86.136-.363.045-.68.09-1.042.135-.272.046-.59.046-.861.091-.363.045-.68.045-1.042.045h-1.903c-.272 0-.589-.045-.86-.045-.363-.045-.68-.045-1.043-.09-.271-.046-.588-.046-.86-.091-.363-.045-.725-.136-1.088-.181a7.359 7.359 0 0 1-.86-.182l-1.088-.271c-.271-.091-.543-.136-.815-.227-.362-.09-.77-.226-1.178-.362-.272-.091-.498-.182-.77-.272a14.69 14.69 0 0 1-1.269-.499c-.226-.09-.407-.18-.634-.271a25.453 25.453 0 0 1-1.948-.952C2.9 35.518 1.313 34.25.09 32.935c0 .091-.045.137-.045.227 0 .317-.045.59-.045.906 0 .317.045.59.045.906.045.635.09 1.314.181 1.948.317.227.68.499.997.725.136.046.272.136.362.181z"
              />
            </g>
            <g>
              <path
                fill="url(#p5dkd)"
                d="M69.314 36.062a12.325 12.325 0 0 0-.861-3.262c-.453-.997-.997-1.903-1.722-2.718-.271-.317-.543-.59-.86-.906a12.806 12.806 0 0 0-2.04-1.45l-.27-.136c-1.904-1.042-4.169-1.54-6.66-1.314-3.398.317-6.75 1.133-9.967 2.356-.816.317-1.631.68-2.447 1.042-.815.544-1.676 1.042-2.446 1.495-4.394 2.673-8.29 4.802-11.87 6.433-12.367 5.708-20.295 5.436-27.906.634-.227-.136-.453-.272-.634-.453-.09-.09-.227-.136-.317-.226-.318-.227-.68-.453-.997-.725.045.272.045.543.09.815.182.77.363 1.54.59 2.265.362 1.133.77 2.266 1.268 3.353.453.951.951 1.903 1.45 2.763.951 1.586 1.993 3.126 3.216 4.576.499.589.997 1.223 1.495 1.767.499.589 1.042 1.132 1.54 1.721l.091.09c.634.68 1.269 1.315 1.903 1.949.09.045.136.136.226.181l.046.045c.68.635 1.359 1.269 2.084 1.903l.045.046c.634.543 1.314 1.087 1.993 1.63.181.136.363.272.499.408.724.544 1.45 1.042 2.174 1.54 1.042.68 2.13 1.314 3.217 1.903.136.09.271.136.362.227 2.673 1.404 5.482 2.537 8.562 3.307.499.136.952.226 1.45.362 1.54.227 3.035.317 4.53.317s3.036-.136 4.53-.317c.499-.09.952-.226 1.45-.362 2.81-.725 5.437-1.767 7.928-2.99.68-.453 1.314-.906 1.948-1.405.091-.045.136-.135.227-.18.634-.5 1.223-.952 1.812-1.45a56.51 56.51 0 0 0 3.806-3.58c.045-.045.09-.135.18-.18l1.496-1.632.181-.18c.045-.091.136-.137.181-.227l1.631-1.903c.317-.362.589-.725.86-1.087a40.405 40.405 0 0 0 1.586-2.265c.272-.408.499-.77.725-1.178.499-.906.997-1.812 1.45-2.764.408-.906.77-1.812 1.087-2.763.317-.952.544-1.903.77-2.9.091-.68.182-1.359.227-2.084 0-.226.045-.453.045-.68 0-.316.046-.588.046-.905a3.033 3.033 0 0 0 0-.906z"
              />
            </g>
            <g>
              <path
                fill="url(#p5dke)"
                d="M37.194 0c-6.297 0-11.507 4.667-12.368 10.737a12.2 12.2 0 0 0-.136 1.812c0 6.932 5.618 12.55 12.549 12.55 3.262 0 6.206-1.27 8.472-3.308 2.491-2.31 4.077-5.572 4.077-9.242C49.743 5.618 44.125 0 37.194 0z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ) : type === "moon" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M14.136 13.864A12.726 12.726 0 0 1 11.378 0a14.055 14.055 0 0 0-7.237 3.866c-5.52 5.521-5.52 14.473 0 19.993 5.521 5.522 14.471 5.52 19.993 0A14.06 14.06 0 0 0 28 16.622a12.727 12.727 0 0 1-13.864-2.758z"
          />
        </g>
      </g>
    </svg>
  ) : type === "arrow-square" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M7.415 12l3.622-5H0V0h2v5h9.037L7.415 0H9.72l4.279 6.001L9.719 12z"
          />
        </g>
      </g>
    </svg>
  ) : type === "star" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      className={className}
    >
      <g>
        <g>
          <path
            fill="#40e640"
            d="M14.026 5.647l5.93-.026L21 8.889l-4.78 3.477 1.829 5.62L15.28 20l-4.78-3.503L5.72 20l-2.768-2.013 1.854-5.62L0 8.888l1.045-3.268 5.93.026L8.802 0h3.395z"
          />
        </g>
      </g>
    </svg>
  ) : type === "triangle" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="6"
      viewBox="0 0 16 6"
      className={className}
    >
      <g>
        <g transform="rotate(-180 8 3)">
          <path fill="#40e640" d="M8 0l8 6H0z" />
        </g>
      </g>
    </svg>
  ) : (
    <></>
  );
};
export default IconsLibrary;
