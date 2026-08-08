import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [home, layout, styles, hub] = await Promise.all([
  readFile("src/index.html", "utf8"),
  readFile("src/_includes/layouts/hub.njk", "utf8"),
  readFile("src/assets/css/styles.css", "utf8"),
  readFile("src/assets/js/hub3d.js", "utf8"),
]);

const checks = [
  ["premium hero", () => assert.match(home, /class="studio-hero/)],
  ["proof rail", () => assert.match(home, /class="studio-proof/)],
  ["selected work section", () => assert.match(home, /id="selected-work"/)],
  ["workflow section", () => assert.match(home, /id="workflow"/)],
  ["four workflow stages", () => assert.equal((home.match(/studio-process__step/g) || []).length, 4)],
  ["field notes collection", () => assert.match(home, /collections\.posts/)],
  ["all primary destinations", () => {
    for (const href of ["/axon.html", "/anime.html", "/lab.html", "/game.html", "/blog/", "/about.html", "/contact.html"])
      assert.ok(home.includes(`href="${href}"`) || layout.includes(`href="${href}"`), `missing ${href}`);
  }],
  ["three live screen types", () => {
    for (const kind of ["scope", "wave", "feed"]) assert.ok(home.includes(`data-screen="${kind}"`), `missing ${kind} screen`);
  }],
  ["work-first navigation", () => assert.match(layout, /href="\/#selected-work"/)],
  ["premium hero styles", () => assert.match(styles, /\.studio-hero\s*\{/)],
  ["signal console styles", () => assert.match(styles, /\.studio-console\s*\{/)],
  ["mobile layout", () => assert.match(styles, /@media\s*\(max-width:\s*760px\)[\s\S]*\.studio-hero/)],
  ["reduced motion", () => assert.match(styles, /prefers-reduced-motion:[\s\S]*\.studio-console/)],
  ["tilt markup", () => assert.match(home, /data-wf-tilt/)],
  ["tilt behavior", () => assert.match(hub, /querySelectorAll\("\[data-wf-tilt\]"\)/)],
];

for (const [name, check] of checks) {
  try {
    check();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

console.log(`Homepage redesign contract passed (${checks.length} checks).`);
