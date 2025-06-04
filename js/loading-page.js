const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const quantityInput = document.getElementById("quantityInput");
const btnAddReview = document.getElementById("btnAddReview");
const addReviewForm = document.getElementById("addReviewForm");
const cancelReview = document.getElementById("cancelReview");
const reviewList = document.getElementById("reviewList");

btnMinus.addEventListener("click", () => {
  let val = parseInt(quantityInput.value);
  if (val > 1) {
    quantityInput.value = val - 1;
  }
});

btnPlus.addEventListener("click", () => {
  let val = parseInt(quantityInput.value);
  quantityInput.value = val + 1;
});

btnAddReview.addEventListener("click", () => {
  addReviewForm.classList.remove("d-none");
  btnAddReview.disabled = true;
});

cancelReview.addEventListener("click", () => {
  addReviewForm.classList.add("d-none");
  btnAddReview.disabled = false;
  addReviewForm.reset();
});

addReviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reviewerName").value.trim();
  const review = document.getElementById("reviewText").value.trim();
  if (name && review) {
    const newReview = document.createElement("div");
    newReview.classList.add("mb-3");
    newReview.innerHTML = `
      <p class="mb-1"><strong>${name}</strong></p>
      <p>${review}</p>
    `;
    reviewList.appendChild(newReview);
    addReviewForm.reset();
    addReviewForm.classList.add("d-none");
    btnAddReview.disabled = false;
  }
});
