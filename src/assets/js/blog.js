/* stackwith.me — shared field-notes behavior */
(() => {
  "use strict";

  const input = document.getElementById("blogSearch");
  const cards = [...document.querySelectorAll(".post-card")];
  const count = document.getElementById("blogCount");
  if (input && cards.length) {
    const update = () => {
      const query = input.value.trim().toLowerCase();
      let visible = 0;
      for (const card of cards) {
        const haystack = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
        const match = haystack.includes(query);
        card.hidden = !match;
        if (match) visible++;
      }
      if (count) count.textContent = `${visible} field note${visible === 1 ? "" : "s"}`;
    };
    input.addEventListener("input", update);
  }

  for (const card of cards) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    });
  }

  const bar = document.getElementById("readBar");
  if (bar) {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  const copy = document.getElementById("copyLink");
  const feedback = document.getElementById("copyFeedback");
  if (copy) {
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        feedback?.classList.add("is-visible");
        setTimeout(() => feedback?.classList.remove("is-visible"), 1500);
      } catch {
        copy.textContent = "Copy unavailable";
      }
    });
  }
})();
