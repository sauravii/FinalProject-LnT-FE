document.addEventListener("DOMContentLoaded", () => {
  const btnPlus = document.getElementById("btnPlus");
  const btnMinus = document.getElementById("btnMinus");
  const quantityInput = document.getElementById("quantityInput");
  const btnAddReview = document.getElementById("btnAddReview");
  const addReviewForm = document.getElementById("addReviewForm");
  const cancelReview = document.getElementById("cancelReview");
  const reviewList = document.getElementById("reviewList");

  btnPlus.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  btnMinus.addEventListener("click", () => {
    const current = parseInt(quantityInput.value);
    if (current > 1) {
      quantityInput.value = current - 1;
    }
  });

  document.querySelector(".chat-btn").addEventListener("click", () => {
    alert("Chat feature is coming soon!");
  });

  document.querySelector(".cart-btn").addEventListener("click", () => {
    alert("Product has been added to your cart!");
  });

  document.querySelector(".buy-now-btn").addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  btnAddReview.addEventListener("click", () => {
    addReviewForm.classList.remove("d-none");
  });

  cancelReview.addEventListener("click", () => {
    addReviewForm.classList.add("d-none");
    addReviewForm.reset();
  });

  addReviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewerName").value;
    const text = document.getElementById("reviewText").value;

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("mb-3");
    reviewItem.innerHTML = `<p class="mb-1"><strong>${name}</strong></p><p>${text}</p>`;

    reviewList.appendChild(reviewItem);
    addReviewForm.classList.add("d-none");
    addReviewForm.reset();
  });
});
