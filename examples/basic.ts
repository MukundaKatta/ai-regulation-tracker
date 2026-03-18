// Basic usage example for ai-regulation-tracker
import { AiRegulationTracker } from "../src/core.js";

async function main() {
  const instance = new AiRegulationTracker({ verbose: true });

  console.log("=== ai-regulation-tracker Example ===\n");

  // Run primary operation
  const result = await instance.analyze({ input: "example data", mode: "demo" });
  console.log("Result:", JSON.stringify(result, null, 2));

  // Run multiple operations
  const ops = ["analyze", "evaluate", "score];
  for (const op of ops) {
    const r = await (instance as any)[op]({ source: "example" });
    console.log(`${op}:`, r.ok ? "✓" : "✗");
  }

  // Check stats
  console.log("\nStats:", JSON.stringify(instance.getStats(), null, 2));
}

main().catch(console.error);
