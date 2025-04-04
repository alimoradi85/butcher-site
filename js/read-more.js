const receivedImage = localStorage.getItem("productsimage");
const receivedName = localStorage.getItem("productsName");

const nameOfItem = document.querySelector(".set-name");
const sectionRead = document.querySelector(".section-read-more");

nameOfItem.innerText = receivedName;
sectionRead.style.background = `url(${receivedImage}) center center no-repeat`;
sectionRead.style.backgroundSize = `cover`;

console.log(sectionRead);
