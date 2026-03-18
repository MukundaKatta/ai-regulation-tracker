import { describe, it, expect } from "vitest";
import { AiRegulationTracker } from "../src/core.js";
describe("AiRegulationTracker", () => {
  it("init", () => { expect(new AiRegulationTracker().getStats().ops).toBe(0); });
  it("op", async () => { const c = new AiRegulationTracker(); await c.analyze(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new AiRegulationTracker(); await c.analyze(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
