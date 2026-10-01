# DPBOSS Landing Page — Meta Pixel + Telegram

## Included
- Meta Pixel ID: 4601142823504642
- PageView event on page load
- Lead event when the "Join Telegram" button is clicked
- Telegram URL:
  https://t.me/+PaxsCR3InwE2ZjFl

## Files
- index.html
- styles.css
- script.js

## Deploy
Upload all three files to the same folder on your hosting/server.

The Meta Pixel code is already inside `index.html`.

The Telegram CTA click is tracked with:
`fbq("track", "Lead");`

Note: a Lead event means the user clicked the Telegram CTA; it does not prove that the person actually joined the Telegram channel.
