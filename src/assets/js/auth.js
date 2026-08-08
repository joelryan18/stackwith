/* ============================================================
   AXON — auth.js · Google sign-in for the landing page
   Manages session state and updates nav UI accordingly.
   The same Supabase project used by checkout.js.
   ============================================================ */
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL     = "https://jldzkjihbekxqxagkame.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Nm79C7JsHnf4lLjruU5g2Q_EuwskRuK";

(() => {
  "use strict";

  // desktop nav elements
  const signInBtn  = document.getElementById("navSignIn");
  const userChip   = document.getElementById("navUser");
  const userName   = document.getElementById("navUserName");
  const signOutBtn = document.getElementById("navSignOut");
  // mobile menu elements
  const menuSignIn  = document.getElementById("menuSignIn");
  const menuUser    = document.getElementById("menuUser");
  const menuName    = document.getElementById("menuUserName");
  const menuSignOut = document.getElementById("menuSignOut");

  // bail if none of the expected elements are on this page
  if (!signInBtn && !menuSignIn) return;

  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  function displayName(user) {
    if (!user) return "";
    const meta = user.user_metadata || {};
    const full = meta.full_name || meta.name || user.email || "";
    return full.split(" ")[0] || user.email.split("@")[0] || "You";
  }

  function applySession(session) {
    const user     = session && session.user;
    const loggedIn = !!user;
    const name     = loggedIn ? displayName(user) : "";

    // desktop
    if (signInBtn) signInBtn.hidden = loggedIn;
    if (userChip)  userChip.hidden  = !loggedIn;
    if (userName && loggedIn) userName.textContent = name;

    // mobile
    if (menuSignIn) menuSignIn.hidden = loggedIn;
    if (menuUser)   menuUser.hidden   = !loggedIn;
    if (menuName && loggedIn) menuName.textContent = name;
  }

  // check for an existing session on load (e.g. returning from OAuth redirect)
  sb.auth.getSession().then(({ data }) => applySession(data.session));
  sb.auth.onAuthStateChange((_event, session) => applySession(session));

  async function signIn() {
    if (signInBtn) signInBtn.setAttribute("aria-busy", "true");
    if (menuSignIn) menuSignIn.setAttribute("aria-busy", "true");
    const { error } = await sb.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.href },
    });
    // OAuth opens in the same tab; the page navigates away.
    // If an error occurs before the redirect, restore the button.
    if (error) {
      if (signInBtn) signInBtn.removeAttribute("aria-busy");
      if (menuSignIn) menuSignIn.removeAttribute("aria-busy");
      console.error("[auth] sign-in error:", error.message);
    }
  }

  async function signOut() {
    await sb.auth.signOut();
    // applySession(null) fires via onAuthStateChange
  }

  signInBtn?.addEventListener("click", signIn);
  menuSignIn?.addEventListener("click", signIn);
  signOutBtn?.addEventListener("click", signOut);
  menuSignOut?.addEventListener("click", signOut);
})();
