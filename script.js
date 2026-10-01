// ===============================
// DPBOSS Landing Page — config
// ===============================

// IMPORTANT: replace this with your real Telegram channel URL.
const TELEGRAM_URL = "https://t.me/YOUR_CHANNEL";

const joinBtn = document.getElementById("joinBtn");
const toast = document.getElementById("toast");

joinBtn.href = TELEGRAM_URL;

joinBtn.addEventListener("click", () => {
  if (TELEGRAM_URL.includes("YOUR_CHANNEL")) {
    // Prevent an accidental dead link while the URL is still a placeholder.
    event.preventDefault();
    toast.textContent = "script.js me apna Telegram channel link add karein.";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
    return;
  }

  toast.textContent = "Telegram link open ho raha hai…";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});
