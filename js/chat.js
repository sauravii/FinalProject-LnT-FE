const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "chat-bubble chat-right";
  userMsg.textContent = text;
  chatBox.appendChild(userMsg);

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "chat-bubble chat-left";

    const lowerText = text.toLowerCase();

    if (lowerText.includes("terima kasih")) {
      reply.textContent = "Dengan Senang hati 😊";
    } else if (lowerText.includes("boleh tanya") || lowerText.includes("info")) {
      reply.textContent = "Silakan tanya apa saja, aku siap bantu.";
    } else if (lowerText.includes("stok") || lowerText.includes("ready") || lowerText.includes("tersedia")) {
      reply.textContent = "Produk ini ready stock, Kak.";
    } else {
      reply.textContent = "Hai Dear!! Mohon maaf kalau kamu check out diatas jam 3 ikut pengiriman besok paginya yaa";
    }

    chatBox.appendChild(reply);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  input.value = "";
});

const backBtn = document.getElementById("back-btn");
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "product-detail.html";
  });
}
