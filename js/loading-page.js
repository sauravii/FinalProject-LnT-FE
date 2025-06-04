const progressBar = document.getElementById("loadingBar");
let width = 0;
const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    // window.location.href = "home.html"; // Aktifkan jika ingin redirect
  } else {
    width += 1;
    progressBar.style.width = width + "%";
  }
}, 30);
