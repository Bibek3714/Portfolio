// ===== Navigation Toggle =====
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ===== ScrollReveal Options =====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-in-out",
};

// ===== Header =====
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".header__content .header__btn", { ...scrollRevealOption, delay: 600 });
ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "top", delay: 900 });

// ===== About =====
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".about__content .about__btn", { ...scrollRevealOption, delay: 600 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left", delay: 900 });

// ===== Services =====
ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 180 });

// ===== Portfolio =====
ScrollReveal().reveal(".portfolio__card", { ...scrollRevealOption, interval: 180 });
ScrollReveal().reveal(".portfolio__banner__card", { ...scrollRevealOption, interval: 180 });

// ===== Contact =====
ScrollReveal().reveal(".contact__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".contact__container .section__description", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".contact__socials a", { ...scrollRevealOption, interval: 140 });
ScrollReveal().reveal(".contact__container .btn", { ...scrollRevealOption, delay: 600 });