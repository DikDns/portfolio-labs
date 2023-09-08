const rect = document.querySelector(".cursor-default");

document.addEventListener("mousemove", function (e) {
  const height = rect.offsetHeight;
  const width = rect.offsetWidth;

  const posX = e.pageX - width / 2;
  const posY = e.pageY - height / 2;

  setTimeout(() => {
    rect.style.left = posX + "px";
    rect.style.top = posY + "px";
  }, 20);
});
