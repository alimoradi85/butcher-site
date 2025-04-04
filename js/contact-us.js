// contact us
// create slider of images in contact us
const moreImage = document.querySelector(
  ".contact-us .info .read-more .inner-read-more .more-image"
);
const modalImage = moreImage.querySelector("img");

const prev = moreImage.querySelector(".prve");
const next = moreImage.querySelector(".next");

const titleOfImage = moreImage.querySelector("p");

const titels = [
  "Fine Meat Kebabs",
  "The Best Ground Beef",
  "Fresh Milk",
  "Free Range Chicken",
  "Free Range Cattle Farming",
];
const images = [
  "../image/fine-meat-kebabs-600x450.jpg",
  "../image/ground-beef-297x300.jpg",
  "../image/fresh-milk-600x450.jpg",
  "../image/seasoned-chicken.jpg",
  "../image/cattle-farming.jpg",
  "../image/sirloin-steaks.jpg",
];
let imageIndex = 0;
modalImage.src = images[imageIndex];
titleOfImage.innerText = titels[imageIndex];
next.addEventListener("click", function () {
  imageIndex++;
  if (imageIndex >= images.length || imageIndex >= titels.length) {
    imageIndex = 0;
  }
  modalImage.src = images[imageIndex];
  titleOfImage.innerText = titels[imageIndex];
});

prev.addEventListener("click", function () {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
    imageIndex = titels.length - 1;
  }
  modalImage.src = images[imageIndex];
  titleOfImage.innerText = titels[imageIndex];
});

//   when more image in contact-us pages are hover

moreImage.addEventListener("mouseenter", function () {
  next.style.opacity = `0.8`;
  prev.style.opacity = `0.8`;
  next.addEventListener("mouseenter", function () {
    this.style.opacity = `1`;
  });
  prev.addEventListener("mouseenter", function () {
    this.style.opacity = `1`;
  });
});
moreImage.addEventListener("mouseleave", function () {
  next.style.opacity = `0`;
  prev.style.opacity = `0`;
  prev.addEventListener("mouseleave", function () {
    this.style.opacity = `0.8`;
  });
  next.addEventListener("mouseleave", function () {
    this.style.opacity = `0.8`;
  });
});
