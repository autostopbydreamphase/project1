const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const src = ScrollReveal({
  distance: "60px",
  duration: 800, // Уменьшил продолжительность анимации до 1 секунды
  delay: 200, // Уменьшил задержку перед анимацией до 200 миллисекунд
  reset: true,
});

src.reveal(".text", { delay: 100, origin: "top" }); // Уменьшил задержку и продолжительность для .text
src.reveal(".form-container form", { delay: 300, origin: "left" }); // Уменьшил задержку и продолжительность для .form-container form
src.reveal(".heading", { delay: 300, origin: "top" }); // Уменьшил задержку и продолжительность для .heading
src.reveal(".ride-container .box", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .ride-container .box
src.reveal(".services-container .box", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .services-container .box
src.reveal(".reviews-container", { delay: 200, origin: "top" }); // Уменьшил задержку и продолжительность для .reviews-container
src.reveal(".newsletter .box", { delay: 150, origin: "bottom" }); // Уменьшил задержку и продолжительность для .newsletter .box

function show(state) {
  document.getElementById("regWindow").style.display = state;
  document.getElementById("grey-background").style.display = state;
}