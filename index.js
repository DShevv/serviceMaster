const swiper = new Swiper("#slider1", {
  // Optional parameters
  loop: true,
  slidesPerView: window.innerWidth > 480 ? 3 : 1,
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
  slidesPerView: window.innerWidth > 480 ? 2 : 1,
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

const drop = document.querySelector(".info__city_dropdown");
const closeDrop = document.querySelector(".info__city_dropdown-close");

function checkClick(e) {
  if (
    !drop.contains(e.target) &&
    e.target !== drop &&
    !e.target.classList.contains("info__city-select")
  ) {
    drop.classList.remove("active");
    document.removeEventListener("click", checkClick);
  }
}

function ShowDrop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  drop.classList.add("active");
  document.addEventListener("click", checkClick);
}

closeDrop.addEventListener("click", (e) => {
  drop.classList.remove("active");
});

const menu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header-menu");

menuBtn.addEventListener("click", toggleMenu);

let opened = false;

function toggleMenu(e) {
  if (opened) {
    document.body.style.overflowY = "auto";
    opened = !opened;
  } else {
    document.body.style.overflowY = "hidden";
    opened = !opened;
  }
  e.target.classList.toggle("active");
  menu.classList.toggle("active");
}

const menuItems = document.querySelectorAll(".header__menu-item");

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__menu-item")) {
    const sub = e.target.querySelector(".header__menu-item__submenu");
    if (sub.classList.contains("active")) {
      menuItems.forEach((elem) => {
        const submenu = elem.querySelector(".header__menu-item__submenu");
        submenu.classList.remove("active");
      });
    } else {
      menuItems.forEach((elem) => {
        const submenu = elem.querySelector(".header__menu-item__submenu");
        submenu.classList.remove("active");
      });
      sub.classList.add("active");
    }
  }
  if (e.target.classList.contains("header__menu-item_icon")) {
    const sub = e.target.parentNode.querySelector(
      ".header__menu-item__submenu"
    );
    if (sub.classList.contains("active")) {
      menuItems.forEach((elem) => {
        const submenu = elem.querySelector(".header__menu-item__submenu");
        submenu.classList.remove("active");
      });
    } else {
      menuItems.forEach((elem) => {
        const submenu = elem.querySelector(".header__menu-item__submenu");
        submenu.classList.remove("active");
      });
      sub.classList.add("active");
    }
  }
});
