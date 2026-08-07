/* AXON — consent.js · cookie-consent banner + Google Consent Mode v2 updater
   The AdSense script loads unconditionally in base.njk for site verification.
   This module gates AD PERSONALISATION: default is 'denied' (set in base.njk
   before the script); accepting here calls gtag('consent','update',{granted}).
   "Essential only" leaves personalisation denied — Google serves non-personalised
   ads, which is the correct GDPR posture without full IAB TCF consent. */
(() => {
  "use strict";

  const grantAll = () => {
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  let stored = null;
  try { stored = localStorage.getItem("axon-consent"); } catch (e) { /* private mode */ }
  if (stored === "all") grantAll();
  if (stored) return;

  const bar = document.createElement("aside");
  bar.className = "consent";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Cookie consent");

  const msg = document.createElement("p");
  msg.append("[ COOKIES ] We use cookies to analyse traffic and, with your consent, to serve personalised ads. Details in our ");
  const link = document.createElement("a");
  link.href = "/privacy.html";
  link.textContent = "Privacy Policy";
  msg.append(link, ".");

  const acts = document.createElement("div");
  acts.className = "consent__acts";
  const mk = (label, val, cls) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn " + cls;
    b.textContent = label;
    b.addEventListener("click", () => {
      try { localStorage.setItem("axon-consent", val); } catch (e) { /* ignore */ }
      if (val === "all") grantAll();
      bar.remove();
    });
    return b;
  };
  acts.append(mk("Accept all", "all", "btn--signal"), mk("Essential only", "essential", "btn--ghost"));

  bar.append(msg, acts);
  const mount = () => document.body.appendChild(bar);
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
