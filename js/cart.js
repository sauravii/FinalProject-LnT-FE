const products = [
  { name: "SKINTIFIC", desc: "Cover all perfect cushion", price: 180000, qty: 2, img: "assets/images/cushion.png" },
  { name: "LACOME", desc: "Absolue The Serum", price: 180000, qty: 1, img: "assets/images/serum.jpg" },
  { name: "SKINTIFIC", desc: "Mate Fit Serum Sunscreen", price: 180000, qty: 1, img: "assets/images/sunscreen.png" },
  { name: "The Body Shop", desc: "Full Rose Eau De Parfum EDP 75ml", price: 1390000, qty: 1, img: "assets/images/parfume.jpg" },
  { name: "3CE", desc: "Multi Eye Color Palette Split Second Edition", price: 425000, qty: 1, img: "assets/images/eyeshadow.jpeg" },
];

const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("totalPrice");
const voucherInput = document.getElementById("voucher");

function renderCart() {
  const checkboxes = document.querySelectorAll(".select-item");
  const checkedStatus = Array.from(checkboxes).map((cb) => cb.checked);

  cartContainer.innerHTML = "";
  products.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    const isChecked = checkedStatus[index] !== undefined ? checkedStatus[index] : true;

    div.innerHTML = `
      <input type="checkbox" class="select-item" data-index="${index}" ${isChecked ? "checked" : ""}>
      <img src="${item.img}" />
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p class="price">Rp ${item.price.toLocaleString()}</p>
      </div>
      <div class="quantity-control">
        <button onclick="changeQty(${index}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });
  updateTotal();
}

function changeQty(index, delta) {
  products[index].qty = Math.max(1, products[index].qty + delta);
  renderCart();
}

function updateTotal() {
  const checkboxes = document.querySelectorAll(".select-item");
  let total = 0;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      total += products[index].price * products[index].qty;
    }
  });

  const kodeVoucher = voucherInput.value.trim().toLowerCase();
  let diskon = 0;
  if (kodeVoucher === "diskon10k") {
    diskon = 10000;
  } else if (kodeVoucher === "diskon20k") {
    diskon = 20000;
  }
  let finalTotal = total - diskon;
  if (finalTotal < 0) finalTotal = 0;

  totalPriceEl.textContent = `Rp ${finalTotal.toLocaleString("id-ID")}`;
}

document.addEventListener("change", (e) => {
  if (e.target.classList.contains("select-item") || e.target === voucherInput) {
    updateTotal();
  }
});
voucherInput.addEventListener("input", updateTotal);

renderCart();

document.querySelector(".checkout-btn").addEventListener("click", () => {
  window.location.href = "checkout.html";
});
