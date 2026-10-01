// ======================================
// DPBOSS TELEGRAM + META PIXEL TRACKING
// ======================================

// Your Telegram channel
const TELEGRAM_URL =
  "https://t.me/+PaxsCR3InwE2ZjFl";


// Get button
const joinBtn =
  document.getElementById("joinBtn");


// Get toast
const toast =
  document.getElementById("toast");


// Make sure button exists
if (joinBtn) {

  joinBtn.addEventListener(
    "click",
    function () {

      /*
       * IMPORTANT:
       *
       * This Lead event means:
       * "User clicked Join Telegram"
       *
       * It DOES NOT mean:
       * "User actually joined Telegram"
       */

      if (
        typeof window.fbq === "function"
      ) {

        // Send Lead event to Meta Pixel
        window.fbq(
          "track",
          "Lead"
        );

        // Also send a custom event
        // useful for debugging/analysis
        window.fbq(
          "trackCustom",
          "TelegramButtonClick"
        );

        console.log(
          "Meta Pixel: Lead event sent"
        );

      } else {

        console.error(
          "Meta Pixel is NOT loaded."
        );

      }


      // Small visual confirmation
      if (toast) {

        toast.classList.add(
          "show"
        );

        setTimeout(
          function () {

            toast.classList.remove(
              "show"
            );

          },
          1500
        );

      }

      /*
       * IMPORTANT:
       *
       * We DON'T manually redirect here.
       *
       * The <a href="..."> already
       * opens the Telegram URL.
       */

    }
  );

}
