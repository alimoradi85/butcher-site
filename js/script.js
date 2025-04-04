// when bars and close icon are hover on nav header
const barsIcon = document.querySelector(
  ".nav-header .bottom-header .bars-menu .bars-icon"
);

const closeIcon = document.querySelector(
  ".nav-header .bottom-header .bars-menu .close-icon"
);

barsIcon.addEventListener("click", function () {
  barsIcon.classList.add("rotate");
  barsIcon.style.opacity = `0`;
  closeIcon.style.opacity = `1`;
  closeIcon.style.fontSize = `30px`;
});

closeIcon.addEventListener("click", function () {
  barsIcon.classList.remove("rotate");
  barsIcon.style.opacity = `1`;
  closeIcon.style.opacity = `0`;
  closeIcon.style.fontSize = `0px`;
});

// set position fixed to nav header when window scrolled
const navHeader = document.querySelector("#header .nav-header");
const navOffsetTop = navHeader.offsetTop;
const elevatore = document.querySelector(".elevatore");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  const scrollTop = this.scrollY;

  if (scrollTop >= navOffsetTop) {
    navHeader.classList.add("position-fixed");
  } else {
    navHeader.classList.remove("position-fixed");
  }

  if (scrollTop > lastScrollY) {
    elevatore.style.opacity = `1`;
  } else {
    elevatore.style.opacity = `0`;
  }
  lastScrollY = scrollTop;
});

// elevatore
elevatore.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// get forms in pages and create a messeage when buttons clicked
const forms = Array.from(document.querySelectorAll("form"));
const buttonSubscribes = Array.from(
  document.querySelectorAll(".button-subscribe")
);
buttonSubscribes.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    forms.forEach((form) => {
      if (button.id === form.dataset.form) {
        createElement(form);
      }
    });
  });
});

// A function for create messages
function createElement(form, message, close) {
  message = document.createElement("div");
  close = document.createElement("span");
  message.classList.add("message-in-form");
  close.innerText = `X`;
  message.innerText = `Thank you for your message. It has been sent.`;
  message.append(close);
  form.append(message);
  close.addEventListener("click", function () {
    message.style.display = `none`;
  });
  setTimeout(() => {
    message.remove();
  }, 4000);
}

// loaded elements slow

const obServer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
// loaded elements from deferent arrows
const leftToRightElement = document.querySelectorAll(".left-to-right");
const rightToLeftShowElement = document.querySelectorAll(".right-to-left");
const bottomToRightShowElements = document.querySelectorAll(".bottom-to-top");
const topToBottomShowElement = document.querySelectorAll(".top-to-bottom");
topToBottomShowElement.forEach((el) => obServer.observe(el));
rightToLeftShowElement.forEach((el) => obServer.observe(el));
bottomToRightShowElements.forEach((el) => obServer.observe(el));
leftToRightElement.forEach((el) => obServer.observe(el));
