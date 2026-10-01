// DPBOSS Telegram Landing Page

const TELEGRAM_URL = "https://t.me/+PaxsCR3InwE2ZjFl";

const joinBtn = document.getElementById("joinBtn");
const toast = document.getElementById("toast");

joinBtn.href = TELEGRAM_URL;

joinBtn.addEventListener("click", function () {
  // Track the important Telegram CTA click as a Meta Pixel Lead event.
  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }

  toast.textContent = "Telegram open ho raha hai…";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
});
