const cursorDefault = document.querySelector(".cursor-default");

document.addEventListener("mousemove", function (e) {
  const height = cursorDefault.offsetHeight;
  const width = cursorDefault.offsetWidth;

  const posX = e.pageX - width / 2;
  const posY = e.pageY - height / 2;

  gsap.to(cursorDefault, {
    x: posX,
    y: posY,
    duration: 1,
    ease: "power2.out",
  });
});

document.addEventListener("mousedown", function (e) {
  cursorDefault.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="50" viewBox="0 0 58 50" fill="none">
  <path d="M13 20L4 11L0.660004 20H13Z" fill="#1A1A1A"/>
  <path d="M45 20L54 11L57.34 20H45Z" fill="#1A1A1A"/>
  <path d="M6.34007 9H17.3401L14.0001 0L6.34007 9Z" fill="#1A1A1A"/>
  <path d="M51.66 9H40.66L44 0L51.66 9Z" fill="#1A1A1A"/>
  <path d="M36.8 0H21.3L29 9L36.8 0Z" fill="#1A1A1A"/>
  <path d="M13.95 50H0.849997L23 26L13.95 50Z" fill="#1A1A1A"/>
  <path d="M57.15 50H44.0549L35 26L57.15 50Z" fill="#1A1A1A"/>
</svg>`;
});
document.addEventListener("mouseup", function (e) {
  cursorDefault.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="35"
  viewBox="0 0 48 35"
  fill="none"
  >
  <path d="M0 9L9 0L12.34 9H0Z" fill="#1A1A1A" />
  <path d="M47.84 9L38.84 0L35.5 9H47.84Z" fill="#1A1A1A" />
  <path d="M22 0H11L14.34 9L22 0Z" fill="#1A1A1A" />
  <path d="M26 0H37L33.66 9L26 0Z" fill="#1A1A1A" />
  <path d="M31.8 9H16.3L24 0L31.8 9Z" fill="#1A1A1A" />
  <path d="M13.1 11H0L22.15 35L13.1 11Z" fill="#1A1A1A" />
  <path d="M48 11H34.9049L25.85 35L48 11Z" fill="#1A1A1A" />
  <path d="M33 11H15L24 35L33 11Z" fill="#1A1A1A" />
  </svg>`;
});
