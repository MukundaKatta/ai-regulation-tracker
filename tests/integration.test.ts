import { describe, it, expect } from "vitest";
import { AiRegulationTracker } from "../src/core.js";

describe("AiRegulationTracker integration", () => {
  it("handles concurrent ops", async () => {
    const c = new AiRegulationTracker();
    await Promise.all([c.analyze({a:1}), c.analyze({b:2}), c.analyze({c:3})]);
    expect(c.getStats().ops).toBe(3);
  });
  it("returns service name", async () => {
    const c = new AiRegulationTracker();
    const r = await c.analyze();
    expect(r.service).toBe("ai-regulation-tracker");
  });
  it("handles 100 ops", async () => {
    const c = new AiRegulationTracker();
    for (let i = 0; i < 100; i++) await c.analyze({i});
    expect(c.getStats().ops).toBe(100);
  });
});
