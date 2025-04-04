const itemSelected = Array.from(document.querySelectorAll(".item-blog"));
const imageSelected = Array.from(document.querySelectorAll(".image-item"));
const nameOfProduct = Array.from(document.querySelectorAll(".name-of-product"));

// create sendData function to when an item clicked shows thier information about that in new page
function sendData(nameItem, imgItem) {
  // product`s info

  itemSelected.forEach((item) => {
    item.addEventListener("click", function () {
      nameItem = item?.children[1].children[0].innerText;
      imgItem = item?.children[0]?.children[0]?.children[0].src;
      localStorage.setItem("productsName", nameItem);
      localStorage.setItem("productsimage", imgItem);
    });
  });

  // when an item clicked href will change and page gose to new page
  window.location.href = "read-more.html";
}
