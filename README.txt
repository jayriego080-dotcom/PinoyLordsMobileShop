PINOY LM SHOP — RUNNABLE STATIC WEBSITE
======================================

FILES
- index.html
- style.css
- app.js

RUN IN SPCK EDITOR
1. Extract the ZIP into a project folder.
2. Open the folder in SPCK Editor.
3. Open index.html and use Preview.
4. Internet connection is needed for Google Fonts and WhatsApp checkout.

WHATSAPP
Orders open WhatsApp to 0927 093 22048. The customer reviews the pre-filled message and presses Send.

IMPORTANT LIMITATIONS
- This is a static, no-Supabase version.
- My Orders uses this browser's LocalStorage only. It is not shared with the shop owner or other devices.
- Prices and product catalog are client-side. Do not use this version for secure inventory, payments, or shared order management.
- IGG passwords are never saved or sent in WhatsApp. The password input is cleared immediately. Do not enter credentials unless a secure process has been agreed directly with the shop owner.
- There is no admin panel, wallet, or Falcon Tracker main menu button. Falcon Tracker is included under Bot Services as requested.
- New KD package prices are provisional entries carried into this build and must be checked by the shop owner before publishing.
- Gem calculator catalog now follows the indexed Lords Gems Calculator categories and item values (Speed Ups, Combat, Boost, Resources, Chests, Buildings, Familiar, Monster Hunt). Actual gems are summed from selected quantities; billing rounds up to the next 100,000 gems and applies the selected PHP rate tier.

EDIT PRICES / ITEMS
Open app.js:
- oldPackages and newPackages contain RSS package prices.
- gemItems contains gem item names and gem values.
- gem rate tiers are in the gemTier selector in index.html.

FUTURE SUPABASE
The app is separated into index.html, style.css and app.js. Replace LocalStorage order storage with Supabase Auth/Database and server-side order/credential handling when ready. Never store IGG passwords in plaintext.

BOT SUBSCRIPTION PRICING
- 1 month: PHP 150
- 3 months: PHP 420 (save PHP 30)
- 6 months: PHP 750 (save PHP 150)
- 1 year: PHP 1,400 (save PHP 400)
Savings are compared against paying PHP 150 month-by-month. The order form requires acceptance of the non-refundable policy and USE AT YOUR OWN RISK notice. Confirm the exact scope of the non-refundable policy and applicable consumer-law requirements before publishing.
