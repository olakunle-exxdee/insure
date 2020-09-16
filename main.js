const hamburger = document.querySelector(".hamburger");
const navbar2 = document.querySelector(".navbar__two");
const header = document.querySelector(".header");
const processes = document.querySelector(".processes");
const content = document.querySelector(".content");

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".logo",
  { opacity: 0, x: "-20rem" },
  {
    opacity: 1,
    delay: 0.4,
    ease: "power3.inOut",
    x: 0,
  }
);

gsap.fromTo(
  ".hamburger",
  { opacity: 0, x: "20rem" },
  {
    opacity: 1,
    delay: 0.4,
    ease: "power3.inOut",
    x: 0,
  }
);

gsap.fromTo(
  ".navbar__two",
  { opacity: 0, x: "-100rem", y: "-100rem" },
  {
    opacity: 1,
    ease: "power3.inOut",
    x: "0",
    y: "0",
    delay: 0.2,
  }
);

gsap.fromTo(
  ".hero__img",
  { opacity: 0, x: "-20rem" },
  {
    opacity: 1,
    delay: 0.8,
    ease: "power3.inOut",
    x: 0,
  }
);
gsap.fromTo(
  ".hero__content",
  { opacity: 0, x: "-100rem", y: "-100rem" },
  {
    opacity: 1,
    ease: "power3.inOut",
    x: "0",
    y: "0",
    delay: 0.6,
  }
);

gsap.fromTo(
  ".one",
  { opacity: 0, x: "-20rem" },
  {
    opacity: 1,
    delay: 0.4,
    ease: "power3.inOut",
    x: 0,
    scrollTrigger: {
      trigger: ".process",

      start: "top 100%",
      end: "bottom 0%",
      toggleActions: "play pause play reset",
    },
  }
);

gsap.fromTo(
  ".two",
  { opacity: 0, x: "-20rem" },
  {
    opacity: 1,
    delay: 0.8,
    ease: "power3.inOut",
    x: 0,
    scrollTrigger: {
      trigger: ".process",

      start: "top 100%",
      end: "bottom 0%",
      toggleActions: "play pause play reset",
    },
  }
);

gsap.fromTo(
  ".three",
  { opacity: 0, x: "-20rem" },
  {
    opacity: 1,
    delay: 1.4,
    ease: "power3.inOut",
    x: 0,
    scrollTrigger: {
      trigger: ".process",

      start: "top 100%",
      end: "bottom 0%",
      toggleActions: "play pause play reset",
    },
  }
);
let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    navbar2.classList.add("open");
    header.classList.add("open");

    showMenu = true;
  } else {
    navbar2.classList.remove("open");
    header.classList.remove("open");
    showMenu = false;
  }
});

const formLogin = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
// const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formControl = document.querySelector(".form-control");

let password = formLogin.elements.nameItem("password");

const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

username.addEventListener("input", validate);
email.addEventListener("input", validate);
password.addEventListener("input", validate);
password2.addEventListener("input", validate);

formLogin.addEventListener("submit", (e) => {
  if (username.value.trim() == "" || username.value.trim() == null) {
    formControl.classList.add("invalid");
  } else {
    formControl.classList.add("valid");
  }
  e.preventDefault();
});

function validate(e) {
  let target = e.target;
  if (target.name == "username") {
  }
  if (target.name == "email") {
  }
  if (target.name == "password") {
    if (pass_reg.test(target.value)) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }
}
