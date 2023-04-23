// menu
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

nav.addEventListener("click", function () {
  hamburger.classList.remove("open");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  navItems.forEach((item) => item.classList.remove("open"));

  showMenu = false;
});

// form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorErr = document.querySelectorAll(".error");

function validateForm() {
  clearMessage();

  let errors = false;

  if (nameInput.value.length < 1) {
    errorErr[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errors = true;
  }

  if (!emailIsvalid(email.value)) {
    errorErr[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errors = true;
  }

  if (message.value.length < 1) {
    errorErr[2].innerText = "Enter message";
    message.classList.add("error-border");
    errors = true;
  }

  if (!errors) {
    success.innerHTML = "Success";
  }
}

function clearMessage() {
  for (let i = 0; i < errorErr.length; i++) {
    errorErr[i].innerText = "";
  }

  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
  success.innerHTML = "";
}

function emailIsvalid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// scroll to top
const scrollBtn = document.querySelector(".scroll-to-top");
const scrollFooter = document.querySelector("footer");

const refreshButton = () => {
  if (document.documentElement.scrollTop <= 150) {
    scrollBtn.style.display = "none";
    scrollFooter.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
    scrollFooter.style.display = "block";
  }
};

refreshButton();

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", () => {
  refreshButton();
});
