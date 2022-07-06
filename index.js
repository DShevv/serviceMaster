const swiper = new Swiper("#slider1", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: "#swiper-button-next1",
    prevEl: "#swiper-button-prev1",
  },
});
const swiper2 = new Swiper("#slider2", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: "#swiper-button-next2",
    prevEl: "#swiper-button-prev2",
  },
});

const faq = document.querySelector(".faq");
const questions = document.querySelectorAll(".faq__list__item");

faq.addEventListener("click", (e) => {
  if (e.target.classList.contains("faq__list__item-title")) {
    const item = e.target.parentNode;
    item.classList.toggle("active");
  }
});

$(document).ready(function () {
  $("#tel").inputmask("+7 (999) 999-99-99");
});
