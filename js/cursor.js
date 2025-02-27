const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easing = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    cursorBorder.style.setProperty("--size", "80px");
  });

  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.setProperty("--size", "50px");
  });
});
