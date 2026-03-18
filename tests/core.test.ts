import { describe, it, expect } from "vitest";
import { RegulationTracker } from "../src/regulationTracker.js";

describe("RegulationTracker", () => {
  it("initializes", () => {
    const instance = new RegulationTracker();
    expect(instance.getStats().totalOps).toBe(0);
  });

  it("tracks operations", async () => {
    const instance = new RegulationTracker();
    await instance.scansources();
    expect(instance.getStats().totalOps).toBe(1);
  });

  it("resets state", async () => {
    const instance = new RegulationTracker();
    await instance.scansources();
    instance.reset();
    expect(instance.getStats().totalOps).toBe(0);
  });
});
