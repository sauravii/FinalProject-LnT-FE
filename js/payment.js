document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("paymentToggle");
  const paymentList = document.getElementById("paymentList");
  const chevronIcon = document.getElementById("chevronIcon");

  toggle.addEventListener("click", function () {
    const isHidden = paymentList.classList.contains("hidden");

    paymentList.classList.toggle("hidden");
    chevronIcon.src = isHidden ? "./assets/icons/ic-chevron-bottom.svg" : "./assets/icons/ic-chevron-right.svg";
  });
});
