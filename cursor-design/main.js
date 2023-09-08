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

  gsap.to(cursorDefault, {
    opacity: 1,
    delay: 0.25,
  });
});

document.addEventListener("mousedown", function (e) {
  gsap.to(cursorDefault, {
    scale: 0.75,
    rotation: 360 * 10,
    duration: 0.25,
    yoyo: true,
  });
});

document.addEventListener("mouseup", function (e) {
  gsap.to(cursorDefault, {
    scale: 1,
    rotation: 0,
    duration: 0.25,
  });
});
