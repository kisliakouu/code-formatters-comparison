# Code Formatters Comparison

A benchmark measuring the formatting speed of modern JavaScript formatters (**oxfmt**, **Biome**, and **Prettier**) against an identical, massive JavaScript file generated to stress-test AST parsers and pretty-printers.

---

## Overview

Modern tooling in the JavaScript ecosystem is rapidly shifting towards native languages like Rust. This repository evaluates the real-world performance difference between standard JavaScript-based formatting (Prettier) and next-generation Rust-based engines (Biome, oxfmt).

### How the Benchmark Works

1. **`source.js`** contains ~740 lines exercising varied modern JavaScript features (classes, destructuring, template literals, async/await, generators, symbols, numeric separators, BigInt, and more).
2. **`scripts/prepare-dist.sh`** replicates and modifies `source.js` 1,000 times with unique variable names (`__1__` through `__1001__`) to produce a ~740,000-line `dist.js` file (~25 MB).
3. **`esbuild`** minifies `dist.js` into a dense single-line file (`dist.min.js`), maximizing the formatting challenge.
4. Each formatter is configured with identical formatting rules (80 print width, 2 spaces indentation, double quotes, semicolons, trailing commas, LF line endings) and timed while writing the formatted output.

---

## Performance Comparison

Benchmark results formatting the minified test suite (`dist.min.js`):

| Formatter | Time Bar | Execution Time | Speedup vs Prettier | Engine / Language |
| :--- | :--- | :---: | :---: | :---: |
| **oxfmt** | ![oxfmt time](assets/oxfmt-bar.svg) | **650 ms** | **~17.0x faster** | Rust ([Oxc](https://oxc.rs/)) |
| **Biome** | ![Biome time](assets/biome-bar.svg) | **5.0 s** | **~2.2x faster** | Rust ([Biome](https://biomejs.dev/)) |
| **Prettier** | ![Prettier time](assets/prettier-bar.svg) | **11.0 s** | *Baseline (1.0x)* | JavaScript / Node.js ([Prettier](https://prettier.io/)) |

> *Note: Relative time bars are scaled proportionally to execution duration (lower is better).*

---

## Configuration Parity

All formatters share identical formatting preferences:

| Setting | Prettier (`.prettierrc`) | Biome (`biome.json`) | oxfmt (`.oxfmtrc.json`) |
| :--- | :---: | :---: | :---: |
| **Print / Line Width** | `80` | `80` | `80` |
| **Indent Style** | Spaces (`tabWidth: 2`) | Spaces (`indentWidth: 2`) | Spaces (`tabWidth: 2`) |
| **Quotes** | Double (`singleQuote: false`) | Double (`quoteStyle: "double"`) | Double (`singleQuote: false`) |
| **Semicolons** | Always (`semi: true`) | Always (`semicolons: "always"`) | Always (`semi: true`) |
| **Trailing Commas** | All (`trailingComma: "all"`) | All (`trailingCommas: "all"`) | All (`trailingComma: "all"`) |
| **Arrow Parens** | Always (`arrowParens: "always"`) | Always (`arrowParentheses: "always"`) | Always (`arrowParens: "always"`) |
| **End of Line** | LF (`endOfLine: "lf"`) | LF (`lineEnding: "lf"`) | LF (`endOfLine: "lf"`) |

---

## Running the Benchmark

### 1. Install Dependencies

```bash
npm install
```

### 3. Run Formatters

```bash
# Run Prettier test
npm run test:prettier

# Run oxfmt test
npm run test:oxfmt

# Run biome test
npm run test:biome
```
