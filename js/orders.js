// get data from the page user comes
const receivedPrice = localStorage.getItem("procutsPrice");
const receivedName = localStorage.getItem("productsName");
const receivedImage = localStorage.getItem("productsimage");

//select elements
const imageProduct = document.querySelector(".image-product");
const h1Element = [...document.querySelectorAll(".set-name")];
const priceElement = document.querySelector(".set-price");
// set the recivedData in elements
h1Element.forEach((h1) => {
  h1.innerHTML = receivedName;
});
priceElement.innerHTML = receivedPrice;
imageProduct.src = receivedImage;

let selectOption = document.querySelector(".select-orders");
const priceOrders = document.querySelector(".priec-order");

const quantityOption = (select) => {
  for (let i = 0; i <= 10; i++) {
    if (i === 2 || i === 5 || i === 10) {
      select.innerHTML += `
      <option>${i} Strips</option>
    `;
    }
  }
};
quantityOption(selectOption);

// any select for incrementing number to order the product
const ordersNumber = document.querySelector(".numbers");
const next = ordersNumber.querySelector(".next");
const prve = ordersNumber.querySelector(".prve");
const num = ordersNumber.querySelector(".num");
let increment = 1;
next.addEventListener("click", function () {
  increment++;
  num.innerHTML = increment;
  if (increment >= 20) {
    increment = 20;
  }
});
prve.addEventListener("click", function () {
  increment--;
  num.innerHTML = increment;
  if (increment <= 0) {
    increment = 1;
  }
});

// a little js for desciption part of orders to
// when one of the titles clicked Only its info will be seen.
const filtersDescription = [...document.querySelectorAll(".titles li")];
const itemDescription = [...document.querySelectorAll(".item-description")];
filtersDescription.filter((filter) => {
  filter.addEventListener("click", function () {
    itemDescription.forEach((item) => {
      if (item.id === filter.dataset.filter) {
        item.style.display = `block`;
      } else {
        item.style.display = `none`;
      }
    });
  });
});
// when user clciked on one of the stras its background will changed
const stars = Array.from(document.querySelectorAll(".points"));
stars.forEach((star) => {
  star.addEventListener("click", function () {
    star.style.backgroundColor = `rgba(128, 128, 128, 0.3)`;
  });
});

// select forms in Reviews
const formReviews = document.querySelector(".form-reviews");
const inputEmail = document.querySelector(".form-reviews #email");
const inputName = document.querySelector(".form-reviews #name");
const messagesReviews = document.querySelector(".form-reviews #messages");
const buttonReviews = document.querySelector(".form-reviews .submit-in-orders");

// when inputs are nothig get an eror
buttonReviews.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputName.value === "" ||
    inputEmail.value === "" ||
    messagesReviews.value === ""
  ) {
    const pEror = document.createElement("p");
    pEror.classList.add("peror");
    pEror.innerText = `please fill out the form`;
    formReviews.append(pEror);
    setTimeout(() => {
      pEror.remove();
    }, 3000);
  }
});

// modal image
const modal = document.querySelector(".modal");
const close = modal.querySelector(".close");
const modalImage = modal.querySelector(".modal .image-in-modal");

close.addEventListener("click", function () {
  modal.style.transform = `scale(0)`;
});

imageProduct.addEventListener("click", function (e) {
  const imageSrc = this.getAttribute("src");
  modalImage.setAttribute("src", imageSrc);
  modal.style.transform = `scale(1)`;
  modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
});
