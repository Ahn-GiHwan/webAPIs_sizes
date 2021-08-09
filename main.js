const screenEl = document.querySelector(".screen");
const outerEl = document.querySelector(".outer");
const innerEl = document.querySelector(".inner");
const clientWidthEl = document.querySelector(".clientWidth");

const size = () => {
  screenEl.innerHTML = `window.screen: ${screen.width}, ${screen.height}`;
  outerEl.innerHTML = `window.outer: ${outerWidth}, ${outerHeight}`;
  innerEl.innerHTML = `window.inner: ${innerWidth}, ${innerHeight}`;
  clientWidthEl.innerHTML = `documentElement.clientWidth: ${window.document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

  console.log("size");
};

size();
window.addEventListener("resize", () => {
  size();
});
