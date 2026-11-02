// The arithmetic used by the field-note worksheets. No network or DOM access.
// Rates use inverse seconds; dt uses seconds; memory values use bytes.
function finite(value, name) {
  if (!Number.isFinite(value)) throw new TypeError(`${name} must be finite`);
  return value;
}
function positive(value, name) {
  finite(value, name);
  if (value <= 0) throw new RangeError(`${name} must be positive`);
  return value;
}
function elapsed(dt) {
  finite(dt, "dt");
  if (dt < 0) throw new RangeError("dt cannot be negative");
}

export function damp(current, target, rate, dt) {
  finite(current, "current"); finite(target, "target"); positive(rate, "rate"); elapsed(dt);
  return target + (current - target) * Math.exp(-rate * dt);
}

export function stepCriticalSpring(state, target, omega, dt) {
  finite(state.position, "position"); finite(state.velocity, "velocity");
  finite(target, "target"); positive(omega, "omega"); elapsed(dt);
  const displacement = state.position - target;
  const c = state.velocity + omega * displacement;
  const decay = Math.exp(-omega * dt);
  return {
    position: target + (displacement + c * dt) * decay,
    velocity: (state.velocity - omega * c * dt) * decay,
  };
}

export function pixelBudget(width, height, dpr) {
  for (const [name, value] of [["width", width], ["height", height]]) {
    positive(value, name);
    if (!Number.isInteger(value) || value > 8192) throw new RangeError(`${name} must be an integer from 1 to 8192`);
  }
  positive(dpr, "dpr");
  if (dpr < 0.25 || dpr > 4) throw new RangeError("dpr must be from 0.25 to 4");
  const bufferWidth = Math.floor(width * dpr), bufferHeight = Math.floor(height * dpr);
  const pixels = bufferWidth * bufferHeight;
  return { bufferWidth, bufferHeight, pixels, rgba8Bytes: pixels * 4, baselinePixels: width * height };
}

export function latencyBudget(target, stages) {
  positive(target, "target");
  if (!Array.isArray(stages) || !stages.length) throw new TypeError("stages must be a nonempty array");
  for (const value of stages) {
    finite(value, "stage");
    if (value < 0) throw new RangeError("stage cannot be negative");
  }
  const allocated = stages.reduce((sum, value) => sum + value, 0);
  if (!Number.isFinite(allocated)) throw new RangeError("allocation is too large");
  const difference = target - allocated;
  return { allocated, remaining: Math.abs(difference) < 1e-9 ? 0 : difference };
}
