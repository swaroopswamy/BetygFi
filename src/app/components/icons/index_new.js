// components/Icon.js
const Icon = ({ name, width, height, color, }) => {
  const icons = {
    x_dark: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="x">
          <path
            id="Vector"
            d="M18 6L6 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M6 6L18 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
    x_light: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="x">
          <path
            id="Vector"
            d="M18 6L6 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M6 6L18 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
    green_tick: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12.8359" cy="12" rx="12" ry="12" transform="rotate(-180 12.8359 12)" fill="#55A406" />
        <path d="M18.3359 8.75L11.4609 15.625L8.33594 12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    unticked: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M0.499999 12C0.5 5.64873 5.64873 0.5 12 0.500001C18.3513 0.500001 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64872 23.5 0.499999 18.3513 0.499999 12Z" stroke="#333333" />
          <path d="M17.5 8.75L10.625 15.625L7.5 12.5" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    )
  };

  return icons[name] || null;
};

export default Icon;
