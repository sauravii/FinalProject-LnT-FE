const progressBar = document.getElementById("loadingBar");
let width = 0;
const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    width += 1;
    progressBar.style.width = width + "%";
    requestAnimationFrame(animate);
  }
}, 30);
