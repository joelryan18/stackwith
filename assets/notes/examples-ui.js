import { damp, stepCriticalSpring, pixelBudget, latencyBudget } from "./examples.mjs";

const format = (number, digits = 2) => number.toLocaleString("en-US", { maximumFractionDigits: digits });
const sampleTimes = [0.1, 0.25, 0.5, 1];

for (const demo of document.querySelectorAll("[data-demo]")) {
  const form = demo.querySelector("[data-demo-form]");
  const result = demo.querySelector("[data-demo-result]");
  if (!form || !result) continue;
  const read = name => form.elements.namedItem(name).valueAsNumber;
  function update() {
    if (!form.reportValidity()) return;
    if (demo.dataset.demo === "response") {
      const rate = read("rate");
      const response = time => stepCriticalSpring({ position: 0, velocity: 0 }, 1, rate, time).position;
      const path = calculate => Array.from({ length: 121 }, (_, index) => {
        const time = 1.5 * index / 120;
        return `${index ? "L" : "M"}${(44 + 600 * time / 1.5).toFixed(2)},${(222 - 184 * calculate(time)).toFixed(2)}`;
      }).join(" ");
      demo.querySelector(".plot-damping").setAttribute("d", path(time => damp(0, 1, rate, time)));
      demo.querySelector(".plot-spring").setAttribute("d", path(response));
      demo.querySelector("[data-sample-rate]").textContent = rate;
      const rows = sampleTimes.map(time => {
        const row = document.createElement("tr");
        const heading = document.createElement("th");
        heading.scope = "row"; heading.textContent = `${time} s`; row.append(heading);
        for (const value of [damp(0, 1, rate, time), response(time)]) {
          const cell = document.createElement("td"); cell.textContent = value.toFixed(3); row.append(cell);
        }
        return row;
      });
      demo.querySelector("[data-response-samples]").replaceChildren(...rows);
      result.textContent = `Calculated response at rate ${rate}. No animation or device benchmark is running.`;
    } else if (demo.dataset.demo === "pixels") {
      const width = read("width"), height = read("height"), dpr = read("dpr");
      const budget = pixelBudget(width, height, dpr);
      const { bufferWidth, bufferHeight, pixels, rgba8Bytes, baselinePixels } = budget;
      const comparison = pixels > baselinePixels
        ? `At DPR 1, the same viewport has ${format((1 - baselinePixels / pixels) * 100, 1)}% fewer pixels.`
        : pixels < baselinePixels
          ? `This is ${format((1 - pixels / baselinePixels) * 100, 1)}% fewer pixels than DPR 1.`
          : "This matches the DPR 1 pixel count.";
      result.textContent = `${width} × ${height} at DPR ${format(dpr)}: ${bufferWidth} × ${bufferHeight}, or ${format(pixels, 0)} pixels. One RGBA8 color buffer is about ${format(rgba8Bytes / 1048576)} MiB. ${comparison}`;
    } else if (demo.dataset.demo === "latency") {
      const target = read("target");
      const { allocated, remaining } = latencyBudget(target, ["validation", "routing", "transport", "acceptance"].map(read));
      const status = remaining < 0 ? `over the target by ${format(-remaining)} ms`
        : remaining === 0 ? "with no unallocated time" : `leaving ${format(remaining)} ms unallocated`;
      result.textContent = `Hypothetical allocation: ${format(allocated)} ms of ${format(target)} ms, ${status}.`;
    }
  }
  form.hidden = false;
  form.addEventListener("submit", event => {
    event.preventDefault();
    try { update(); } catch { result.textContent = "Check the input values and try again."; }
  });
}
