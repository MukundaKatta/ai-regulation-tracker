# ai-regulation-tracker

**Track and analyze AI regulations across jurisdictions worldwide**

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-proprietary-red)

## Install
```bash
npm install
```

## Quick Start
```typescript
import { AiRegulationTracker } from "./ai-regulation-tracker";
const instance = new AiRegulationTracker()
const r = await instance.analyze({ input: 'test' })
```

## CLI
```bash
npx tsx src/cli.ts status
npx tsx src/cli.ts run --input "data"
```

## API
| Method | Description |
|--------|-------------|
| `analyze()` | Analyze |
| `evaluate()` | Evaluate |
| `score()` | Score |
| `compare()` | Compare |
| `get_insights()` | Get insights |
| `generate_report()` | Generate report |

## Test
```bash
npx vitest
```

