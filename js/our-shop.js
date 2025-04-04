const nameOfProduct = Array.from(document.querySelectorAll(".name-of-product"));
const priceOfProduct = [...document.querySelectorAll(".price-of-product")];
const itemSelected = Array.from(document.querySelectorAll(".item-selected"));

// create sendData function to when an item clicked shows thier infornation about that in new page
function sendData(nameItem, priceItem, imgItem) {
  // product`s info

  itemSelected.forEach((item) => {
    item.addEventListener("click", function () {
      nameItem = item?.children[1].children[0].innerText;
      priceItem = item?.lastElementChild?.innerText;
      imgItem = item?.children[0]?.children[0]?.children[0].src;
      localStorage.setItem("productsName", nameItem);
      localStorage.setItem("procutsPrice", priceItem);
      localStorage.setItem("productsimage", imgItem);
    });
  });

  // when an item clicked href will change and page gose to new page
  window.location.href = "orders.html";
}
