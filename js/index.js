const skincareList = document.getElementById("skincareList");
const makeupList = document.getElementById("makeupList");

const skincareProducts = [
  {
    name: "Estee Lauder Revitalizing Supreme +",
    price: "Rp 1.350.000",
    image: "./assets/images/img-moist.png",
    link: "/product-detail.html",
  },
  {
    name: "EDP Full Rose Vegan The Body Shop",
    price: "Rp 1.399.000",
    image: "./assets/images/img-bds.png",
    link: "/product-detail.html",
  },
  {
    name: "Innisfree Green Tea Moisturizer",
    price: "Rp 230.000",
    image: "./assets/images/img-innisfree.png",
    link: "/product-detail.html",
  },
  {
    name: "LANCOME Absolue The Serum",
    price: "Rp 5.790.000",
    image: "./assets/images/img-lancome-2.jpg",
    link: "/product-detail.html",
    customImageStyle: "width: 227px; height: 215px",
  },
];

const makeupProducts = [
  {
    name: "SKINTIFIC Cover Air Perfect Cushion",
    price: "Rp 180.000",
    image: "./assets/images/img-instaper.png",
    link: "/product-detail.html",
  },
  {
    name: "SKITIFIC Mate Fit Serum Sunscreen",
    price: "Rp 90.000",
    image: "./assets/images/img-sunscreen.png",
    link: "/product-detail.html",
  },
  {
    name: "ROSE ALL DAY Serum Liquid Blush",
    price: "Rp 92.650",
    image: "./assets/images/img-blush.png",
    link: "/product-detail.html",
  },
  {
    name: "ROSE ALL DAY Poof! Blurring Pot",
    price: "Rp 87.300",
    image: "./assets/images/img-pot.png",
    link: "/product-detail.html",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

skincareProducts.forEach((product) => {
  const item = document.createElement("a");
  item.href = product.link;
  item.className = "text-decoration-none text-dark";
  item.innerHTML = `
    <div class="box-product rounded-4">
      <img src="${product.image}" alt="${product.name}" class="rounded-top-4" style="${product.customImageStyle || ""}" />
      <div class="px-3 py-2">
        <p class="fw-regular mb-1">${product.name}</p>
        <p class="fw-bold">${product.price}</p>
      </div>
    </div>
  `;
  skincareList.appendChild(item);
});

makeupProducts.forEach((product) => {
  const item = document.createElement("a");
  item.href = product.link;
  item.className = "text-decoration-none text-dark";
  item.innerHTML = `
    <div class="box-product rounded-4">
      <img src="${product.image}" alt="${product.name}" class="rounded-top-4" style="${product.customImageStyle || ""}" />
      <div class="px-3 py-2">
        <p class="fw-regular mb-1">${product.name}</p>
        <p class="fw-bold">${product.price}</p>
      </div>
    </div>
  `;
  makeupList.appendChild(item);
});

document.getElementById("btn-cart").addEventListener("click", () => {
  window.location.href = "cart.html";
});
