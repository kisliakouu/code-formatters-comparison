"use strict"; // Strict mode directive
// ═══════════════════════════════════════════════════════════════════════════
// 1. VARIABLE DECLARATIONS (ES2015+)
// ═══════════════════════════════════════════════════════════════════════════
var legacy__1__ = "var-scoped";                    // var (ES1)
let mutable__1__ = "block-scoped";                 // let (ES2015)
const immutable__1__ = "block-scoped constant";    // const (ES2015)
// ═══════════════════════════════════════════════════════════════════════════
// 2. NUMERIC LITERALS & BIGINT
// ═══════════════════════════════════════════════════════════════════════════
const decimal__1__ = 42;
const hex__1__ = 0xFF;                    // Hexadecimal (ES1)
const octal__1__ = 0o77;                    // Octal (ES2015)
const binary__1__ = 0b1010;                  // Binary (ES2015)
const separated__1__ = 1_000_000.123_456;       // Numeric separators (ES2021)
const bigInt__1__ = 9007199254740993n;        // BigInt (ES2020)
const bigHex__1__ = 0xFFn;                   // BigInt hex
const exponent__1__ = 2 ** 10;                 // Exponentiation operator (ES2016)
// ═══════════════════════════════════════════════════════════════════════════
// 3. STRING FEATURES
// ═══════════════════════════════════════════════════════════════════════════
// Template literals (ES2015)
const name__1__ = "World";
const greeting__1__ = `Hello, ${name__1__}!`;
const multiLine__1__ = `Line 1
Line 2`;
// Tagged template literals (ES2015)
function tag__1__(strings__1__, ...values__1__) {
  return strings__1__.raw[0] + values__1__.join("");
}
const tagged__1__ = tag__1__`raw \n ${name__1__}`;
// String.raw (ES2015)
const raw__1__ = String.raw`No escape: \n \t`;
// String methods
"abc".includes("b");                          // ES2015
"abc".startsWith("a");                        // ES2015
"abc".endsWith("c");                          // ES2015
"ha".repeat(3);                               // ES2015
"  hi  ".trimStart();                         // ES2019
"  hi  ".trimEnd();                           // ES2019
"x".padStart(3, "0");                         // ES2017
"x".padEnd(3, ".");                           // ES2017
"a.b.c".replaceAll(".", "/");                 // ES2021
"abc".at(-1);                                 // ES2022
"abc".isWellFormed();                         // ES2024
"abc".toWellFormed();                         // ES2024
[..."abc"].values();                          // String iterator (ES2015)
// ═══════════════════════════════════════════════════════════════════════════
// 4. DESTRUCTURING (ES2015)
// ═══════════════════════════════════════════════════════════════════════════
// Array destructuring
const [a__1__, b__1__, ...rest__1__] = [1, 2, 3, 4, 5];     // Rest element
const [x__1__ = 10, , z__1__] = [undefined, 2, 3];          // Defaults & holes
const [[nested1__1__]] = [[1]];                              // Nested
// Object destructuring
const { p: renamed__1__, q: q__1__ = 42, ...others__1__ } = { p: 1, r: 2, s: 3 };
const { a: { b: deep__1__ } = {} } = { a: { b: 99 } };  // Nested with default
// Swap variables
let swap1__1__ = 1, swap2__1__ = 2;
[swap1__1__, swap2__1__] = [swap2__1__, swap1__1__];
// ═══════════════════════════════════════════════════════════════════════════
// 5. SPREAD OPERATOR (ES2015 / ES2018)
// ═══════════════════════════════════════════════════════════════════════════
const arrSpread__1__ = [1, ...[2, 3], 4];          // Array spread (ES2015)
const objSpread__1__ = { a: 1, ...{ b: 2 } };     // Object spread (ES2018)
// ═══════════════════════════════════════════════════════════════════════════
// 6. FUNCTIONS — EVERY FORM
// ═══════════════════════════════════════════════════════════════════════════
// Function declaration
function classic__1__(a__1__, b__1__) { return a__1__ + b__1__; }
// Function expression
const expr__1__ = function namedExpr__1__(n__1__) { return n__1__; };
// Arrow functions (ES2015)
const arrow__1__ = (x__1__) => x__1__ * 2;
const arrowBlock__1__ = (x__1__) => { return x__1__ * 2; };
const arrowObj__1__ = (x__1__) => ({ value: x__1__ });       // Implicit object return
// Default parameters (ES2015)
function defaults__1__(a__1__ = 1, b__1__ = a__1__ * 2) { return a__1__ + b__1__; }
// Rest parameters (ES2015)
function restParams__1__(first__1__, ...others__1__) { return others__1__; }
// Generator function (ES2015)
function* generator__1__(n__1__) {
  yield n__1__;
  yield* [n__1__ + 1, n__1__ + 2];                     // yield delegation
  return n__1__ + 3;
}
// Async function (ES2017)
async function asyncFn__1__() {
  const result__1__ = await Promise.resolve(42);
  return result__1__;
}
// Async generator (ES2018)
async function* asyncGenerator__1__() {
  yield await Promise.resolve(1);
  yield 2;
}
// IIFE — Immediately Invoked Function Expression
(function () { /* classic IIFE */ })();
(() => { /* arrow IIFE */ })();
// ═══════════════════════════════════════════════════════════════════════════
// 7. CLASSES (ES2015 – ES2025)
// ═══════════════════════════════════════════════════════════════════════════
class Animal__1__ {
  // Public instance field (ES2022)
  species__1__ = "Unknown";
  // Private instance field (ES2022)
  #heartRate__1__ = 60;
  // Private method (ES2022)
  #pump__1__() { return this.#heartRate__1__; }
  // Static public field (ES2022)
  static kingdom__1__ = "Animalia";
  // Static private field (ES2022)
  static #count__1__ = 0;
  // Static private method (ES2022)
  static #increment__1__() { Animal__1__.#count__1__++; }
  // Static block (ES2022)
  static {
    Animal__1__.#increment__1__();
    console.log("Animal class initialized");
  }
  // Constructor
  constructor(name__1__) {
    this.name__1__ = name__1__;
  }
  // Getter (ES2015)
  get info__1__() { return `${this.name__1__} [${this.species__1__}]`; }
  // Setter (ES2015)
  set info__1__(val__1__) { this.name__1__ = val__1__; }
  // Method (ES2015)
  speak__1__() { return `${this.name__1__} speaks`; }
  // Computed method name (ES2015)
  ["computed" + "Method"]() { return true; }
  // Symbol-keyed method (ES2015)
  [Symbol.toPrimitive](hint__1__) {
    if (hint__1__ === "string") return this.name__1__;
    return 0;
  }
  // Private getter/setter (ES2022)
  get #bpm__1__() { return this.#heartRate__1__; }
  set #bpm__1__(val__1__) { this.#heartRate__1__ = val__1__; }
  // Static method (ES2015)
  static create__1__(name__1__) { return new Animal__1__(name__1__); }
  // Private field "in" check (ES2022)
  static hasHeart__1__(obj__1__) { return #heartRate__1__ in obj__1__; }
}
// Inheritance (ES2015)
class Dog__1__ extends Animal__1__ {
  #tricks__1__ = [];
  constructor(name__1__, breed__1__) {
    super(name__1__);                               // super call
    this.breed__1__ = breed__1__;
  }
  speak__1__() {
    return `${super.speak__1__()} — Woof!`;         // super property access
  }
  // Async method
  async fetchTrick__1__() {
    return await Promise.resolve("roll over");
  }
  // Generator method
  *listTricks__1__() {
    yield* this.#tricks__1__;
  }
}
// ═══════════════════════════════════════════════════════════════════════════
// 8. SYMBOLS (ES2015+)
// ═══════════════════════════════════════════════════════════════════════════
const sym__1__ = Symbol("description");
const globalSym__1__ = Symbol.for("shared");
const symKey__1__ = Symbol.keyFor(globalSym__1__);
// Well-known symbols
const iterable__1__ = {
  [Symbol.iterator]() {
    let i__1__ = 0;
    return {
      next() {
        return i__1__ < 3 ? { value: i__1__++, done: false } : { done: true };
      },
    };
  },
};
const asyncIterable__1__ = {
  [Symbol.asyncIterator]() {
    let i__1__ = 0;
    return {
      async next() {
        return i__1__ < 3 ? { value: i__1__++, done: false } : { done: true };
      },
    };
  },
};
// Symbol.hasInstance, Symbol.species, Symbol.toStringTag, etc.
class MyArray__1__ extends Array {
  static [Symbol.hasInstance](instance__1__) { return Array.isArray(instance__1__); }
  static get [Symbol.species]() { return Array; }
  get [Symbol.toStringTag]() { return "MyArray"; }
}
// Symbol.dispose / Symbol.asyncDispose (ES2025 — Explicit Resource Management)
const disposableResource__1__ = {
  [Symbol.dispose]() {
    console.log("Synchronous cleanup");
  },
};
const asyncDisposableResource__1__ = {
  async [Symbol.asyncDispose]() {
    console.log("Async cleanup");
  },
};
// ═══════════════════════════════════════════════════════════════════════════
// 9. ITERATORS & FOR LOOPS
// ═══════════════════════════════════════════════════════════════════════════
for (const val__1__ of [10, 20, 30]) { /* for...of (ES2015) */ }
for (const key__1__ in { a: 1 }) { /* for...in (ES1) */ }
for (let i__1__ = 0; i__1__ < 3; i__1__++) { /* classic for */ }
// for await...of (ES2018)
async function consumeAsync__1__() {
  for await (const val__1__ of asyncIterable__1__) {
    console.log(val__1__);
  }
}
// ═══════════════════════════════════════════════════════════════════════════
// 10. CONTROL FLOW
// ═══════════════════════════════════════════════════════════════════════════
// Labels & break/continue
outer__1__: for (let i__1__ = 0; i__1__ < 3; i__1__++) {
  inner__1__: for (let j__1__ = 0; j__1__ < 3; j__1__++) {
    if (j__1__ === 1) continue outer__1__;
    if (i__1__ === 2) break outer__1__;
  }
}
// switch
switch (mutable__1__) {
  case "a": break;
  case "b": /* fallthrough */
  default: break;
}
// try / catch / finally — optional catch binding (ES2019)
try {
  throw new Error("oops", { cause: new TypeError("root") }); // Error cause (ES2022)
} catch {
  // Optional catch binding — no parameter needed (ES2019)
} finally {
  // cleanup
}
// ═══════════════════════════════════════════════════════════════════════════
// 11. OPERATORS (ES2020 – ES2021)
// ═══════════════════════════════════════════════════════════════════════════
const obj__1__ = { a: { b: { c: 42 } } };
// Optional chaining (ES2020)
const deep1__1__ = obj__1__?.a?.b?.c;
const deepCall__1__ = obj__1__?.a?.b?.toString?.();
const deepIndex__1__ = obj__1__?.a?.["b"]?.c;
// Nullish coalescing (ES2020)
const fallback__1__ = null ?? "default";
// Logical assignment (ES2021)
let la__1__ = null;
la__1__ ??= "assigned";                            // Nullish coalescing assignment
la__1__ ||= "or-assign";                           // Logical OR assignment
la__1__ &&= "and-assign";                          // Logical AND assignment
// Exponentiation assignment (ES2016)
let ea__1__ = 2;
ea__1__ **= 3;
// ═══════════════════════════════════════════════════════════════════════════
// 12. OBJECT ENHANCEMENTS (ES2015+)
// ═══════════════════════════════════════════════════════════════════════════
const key__1__ = "dynamic";
const enhanced__1__ = {
  // Shorthand property (ES2015)
  name__1__,
  // Shorthand method (ES2015)
  greet__1__() { return "hi"; },
  // Computed property name (ES2015)
  [key__1__]: true,
  [`${key__1__}2`]: true,
  // Getter / Setter in literal (ES5+)
  get upper__1__() { return this.name__1__?.toUpperCase(); },
  set upper__1__(v__1__) { this.name__1__ = v__1__; },
  // Async method in literal
  async load__1__() { return await fetch; },
  // Generator method in literal
  *items__1__() { yield 1; yield 2; },
  // Async generator in literal
  async *stream__1__() { yield await Promise.resolve(1); },
  // __proto__ (Annex B, widely supported)
  __proto__: null,
};
// Object static methods
Object.keys({});                              // ES5
Object.values({});                            // ES2017
Object.entries({});                           // ES2017
Object.fromEntries([["a", 1]]);               // ES2019
Object.assign({}, { a: 1 });                  // ES2015
Object.is(NaN, NaN);                          // ES2015
Object.getOwnPropertyDescriptors({});         // ES2017
Object.hasOwn({ a: 1 }, "a");                 // ES2022
Object.groupBy([1, 2, 3], n__1__ => n__1__ % 2 ? "odd" : "even"); // ES2024
// ═══════════════════════════════════════════════════════════════════════════
// 13. ARRAY ENHANCEMENTS (ES2015 – ES2025)
// ═══════════════════════════════════════════════════════════════════════════
Array.from("abc");                            // ES2015
Array.of(1, 2, 3);                            // ES2015
// Array.fromAsync(asyncIterable__1__);       // ES2024
[1, 2, 3].find(x__1__ => x__1__ > 1);                  // ES2015
[1, 2, 3].findIndex(x__1__ => x__1__ > 1);             // ES2015
[1, 2, 3].findLast(x__1__ => x__1__ > 1);              // ES2023
[1, 2, 3].findLastIndex(x__1__ => x__1__ > 1);         // ES2023
[1, 2, 3].includes(2);                        // ES2016
[1, 2, 3].at(-1);                             // ES2022
[1, [2, [3]]].flat(Infinity);                 // ES2019
[1, 2].flatMap(x__1__ => [x__1__, x__1__ * 2]);             // ES2019
[3, 1, 2].toSorted((a__1__, b__1__) => a__1__ - b__1__);         // ES2023 — non-mutating
[1, 2, 3].toReversed();                       // ES2023 — non-mutating
[1, 2, 3].toSpliced(1, 1, 99);               // ES2023 — non-mutating
[1, 2, 3].with(1, 99);                        // ES2023 — non-mutating
[1, 2].entries();                             // ES2015
[1, 2].keys();                                // ES2015
[1, 2].values();                              // ES2015
[1, 2, 3].copyWithin(0, 2);                   // ES2015
new Array(3).fill(0);                          // ES2015
// TypedArray
const f16__1__ = new Float16Array([1.5, 2.5]);     // Float16Array (ES2025)
const buf__1__ = new ArrayBuffer(16, { maxByteLength: 64 }); // Resizable (ES2024)
buf__1__.resize(32);                               // ES2024
const transfered__1__ = buf__1__.transfer(48);     // ArrayBuffer.transfer (ES2024)
// ═══════════════════════════════════════════════════════════════════════════
// 14. MAP, SET, WEAKMAP, WEAKSET, WEAKREF
// ═══════════════════════════════════════════════════════════════════════════
const map__1__ = new Map([["key", "value"]]);
map__1__.set("k2", "v2"); map__1__.get("k2"); map__1__.has("k2"); map__1__.delete("k2");
const set__1__ = new Set([1, 2, 3]);
set__1__.add(4); set__1__.has(4); set__1__.delete(4);
// Set methods (ES2025)
const setA__1__ = new Set([1, 2, 3]);
const setB__1__ = new Set([2, 3, 4]);
setA__1__.union(setB__1__);                             // Set {1, 2, 3, 4}
setA__1__.intersection(setB__1__);                      // Set {2, 3}
setA__1__.difference(setB__1__);                        // Set {1}
setA__1__.symmetricDifference(setB__1__);               // Set {1, 4}
setA__1__.isSubsetOf(setB__1__);                        // false
setA__1__.isSupersetOf(setB__1__);                      // false
setA__1__.isDisjointFrom(setB__1__);                    // false
const wm__1__ = new WeakMap();
const ws__1__ = new WeakSet();
const wr__1__ = new WeakRef({});                   // WeakRef (ES2021)
wr__1__.deref();                                    // ES2021
// FinalizationRegistry (ES2021)
const registry__1__ = new FinalizationRegistry((heldValue__1__) => {
  console.log(`Cleaned up: ${heldValue__1__}`);
});
// ═══════════════════════════════════════════════════════════════════════════
// 15. PROMISES (ES2015 – ES2025)
// ═══════════════════════════════════════════════════════════════════════════
Promise.resolve(1);
Promise.reject(new Error("fail")).catch(() => { });
Promise.all([Promise.resolve(1)]);            // ES2015
Promise.race([Promise.resolve(1)]);           // ES2015
Promise.allSettled([Promise.resolve(1)]);     // ES2020
Promise.any([Promise.reject(), Promise.resolve(2)]); // ES2021
// Promise.withResolvers (ES2025)
const { promise: promise__1__, resolve: resolve__1__, reject: reject__1__ } = Promise.withResolvers();
// Promise.try (ES2026)
// Promise.try(() => mayThrow__1__());
// ═══════════════════════════════════════════════════════════════════════════
// 16. ITERATOR HELPERS (ES2025)
// ═══════════════════════════════════════════════════════════════════════════
const iter__1__ = [1, 2, 3, 4, 5].values();       // Get an iterator
// Iterator.prototype methods (ES2025)
[1, 2, 3].values().map(x__1__ => x__1__ * 2);
[1, 2, 3].values().filter(x__1__ => x__1__ > 1);
[1, 2, 3].values().take(2);
[1, 2, 3].values().drop(1);
[1, 2, 3].values().flatMap(x__1__ => [x__1__, x__1__]);
[1, 2, 3].values().reduce((acc__1__, x__1__) => acc__1__ + x__1__, 0);
[1, 2, 3].values().toArray();
[1, 2, 3].values().forEach(x__1__ => { });
[1, 2, 3].values().some(x__1__ => x__1__ > 2);
[1, 2, 3].values().every(x__1__ => x__1__ > 0);
[1, 2, 3].values().find(x__1__ => x__1__ > 1);
// Iterator.from (ES2025)
Iterator.from({ next() { return { done: true }; } });
// ═══════════════════════════════════════════════════════════════════════════
// 17. REGULAR EXPRESSIONS (ES2015 – ES2025)
// ═══════════════════════════════════════════════════════════════════════════
// Flags
const reU__1__ = /\u{1F600}/u;                 // Unicode flag (ES2015)
const reS__1__ = /foo.bar/s;                   // dotAll flag (ES2018)
const reD__1__ = /(?<year>\d{4})/d;            // Match indices (ES2022)
const reV__1__ = /[\p{Emoji}--\p{ASCII}]/v;    // UnicodeSets flag (ES2024)
// Named capture groups (ES2018)
const dateRe__1__ = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match__1__ = dateRe__1__.exec("2025-06-15");
const { groups: { year: year__1__, month: month__1__, day: day__1__ } } = match__1__;
// Lookbehind assertions (ES2018)
const lookbehind__1__ = /(?<=\$)\d+/;              // Positive lookbehind
const negLookbehind__1__ = /(?<!\$)\d+/;           // Negative lookbehind
// Named backreference (ES2018)
const backRef__1__ = /(?<word>\w+)\s+\k<word>/;
// Duplicate named capture groups (ES2025)
const dupNames__1__ = /(?<val>a)|(?<val>b)/v;
// Unicode property escapes (ES2018)
const unicodeProp__1__ = /\p{Script=Greek}/u;
const unicodeCat__1__ = /\p{Letter}/u;
// String matchAll (ES2020)
const allMatches__1__ = "aaa".matchAll(/a/g);
// RegExp.escape (ES2026)
// const escaped__1__ = RegExp.escape("(test)");
// ═══════════════════════════════════════════════════════════════════════════
// 18. PROXY & REFLECT (ES2015)
// ═══════════════════════════════════════════════════════════════════════════
const handler__1__ = {
  get(target__1__, prop__1__, receiver__1__) {
    return Reflect.get(target__1__, prop__1__, receiver__1__);
  },
  set(target__1__, prop__1__, value__1__, receiver__1__) {
    return Reflect.set(target__1__, prop__1__, value__1__, receiver__1__);
  },
  has(target__1__, prop__1__) {
    return Reflect.has(target__1__, prop__1__);
  },
  deleteProperty(target__1__, prop__1__) {
    return Reflect.deleteProperty(target__1__, prop__1__);
  },
  apply(target__1__, thisArg__1__, args__1__) {
    return Reflect.apply(target__1__, thisArg__1__, args__1__);
  },
  construct(target__1__, args__1__, newTarget__1__) {
    return Reflect.construct(target__1__, args__1__, newTarget__1__);
  },
  getPrototypeOf(target__1__) {
    return Reflect.getPrototypeOf(target__1__);
  },
  setPrototypeOf(target__1__, proto__1__) {
    return Reflect.setPrototypeOf(target__1__, proto__1__);
  },
  defineProperty(target__1__, prop__1__, desc__1__) {
    return Reflect.defineProperty(target__1__, prop__1__, desc__1__);
  },
  getOwnPropertyDescriptor(target__1__, prop__1__) {
    return Reflect.getOwnPropertyDescriptor(target__1__, prop__1__);
  },
  ownKeys(target__1__) {
    return Reflect.ownKeys(target__1__);
  },
  isExtensible(target__1__) {
    return Reflect.isExtensible(target__1__);
  },
  preventExtensions(target__1__) {
    return Reflect.preventExtensions(target__1__);
  },
};
const proxy__1__ = new Proxy({}, handler__1__);
const revocable__1__ = Proxy.revocable({}, handler__1__);  // Revocable proxy
revocable__1__.revoke();
// ═══════════════════════════════════════════════════════════════════════════
// 19. MODULES (ES2015+) — syntax shown in comments / illustrative blocks
// ═══════════════════════════════════════════════════════════════════════════
/*
  // Named export / import (ES2015)
  export const pi__1__ = 3.14;
  export function add__1__(a__1__, b__1__) { return a__1__ + b__1__; }
  export class Vec__1__ {}
  import { pi__1__, add__1__, Vec__1__ } from "./math.js";
  // Default export / import (ES2015)
  export default class App__1__ {}
  import App__1__ from "./app.js";
  // Namespace import (ES2015)
  import * as math__1__ from "./math.js";
  // Re-export (ES2015)
  export { pi__1__ } from "./math.js";
  export { default } from "./app.js";
  export * from "./utils.js";
  export * as utils__1__ from "./utils.js";         // ES2020
  // Dynamic import (ES2020)
  const module__1__ = await import("./lazy.js");
  // Import attributes (ES2025)
  import data__1__ from "./data.json" with { type: "json" };
  // import.meta (ES2020)
  console.log(import.meta.url);
  // Top-level await (ES2022) — module context only
  const config__1__ = await fetch("/config.json");
  // Source phase imports (ES2026 proposal)
  // import source mod__1__ from "./worker.js";
*/
// ═══════════════════════════════════════════════════════════════════════════
// 20. EXPLICIT RESOURCE MANAGEMENT (ES2025)
// ═══════════════════════════════════════════════════════════════════════════
/*
  // Synchronous disposal
  {
    using handle__1__ = getFileHandle__1__();
    // handle__1__[Symbol.dispose]() called at end of block
  }
  // Asynchronous disposal
  {
    await using conn__1__ = await getDbConnection__1__();
    // conn__1__[Symbol.asyncDispose]() awaited at end of block
  }
  // DisposableStack & AsyncDisposableStack
  {
    using stack__1__ = new DisposableStack();
    const resource__1__ = stack__1__.use(getResource__1__());
    stack__1__.adopt(rawPtr__1__, (ptr__1__) => freePtr__1__(ptr__1__));
    stack__1__.defer(() => console.log("cleanup"));
  }
*/
// ═══════════════════════════════════════════════════════════════════════════
// 21. STRUCTURED CLONE & GLOBALS
// ═══════════════════════════════════════════════════════════════════════════
const cloned__1__ = structuredClone({ a: 1, b: [2, 3] }); // structuredClone (ES2024-adjacent, widely available)
const gt__1__ = globalThis;                                 // globalThis (ES2020)
const nan__1__ = Number.isNaN(NaN);                         // ES2015
const finite__1__ = Number.isFinite(42);                    // ES2015
const safeInt__1__ = Number.isSafeInteger(42);              // ES2015
const epsilon__1__ = Number.EPSILON;                        // ES2015
const trunc__1__ = Math.trunc(4.7);                         // ES2015
// Atomics (ES2017) & Atomics.waitAsync (ES2024)
const sab__1__ = new SharedArrayBuffer(16);
const int32__1__ = new Int32Array(sab__1__);
Atomics.store(int32__1__, 0, 42);
Atomics.load(int32__1__, 0);
Atomics.add(int32__1__, 0, 1);
Atomics.sub(int32__1__, 0, 1);
Atomics.and(int32__1__, 0, 0xFF);
Atomics.or(int32__1__, 0, 0x0F);
Atomics.xor(int32__1__, 0, 0xFF);
Atomics.exchange(int32__1__, 0, 100);
Atomics.compareExchange(int32__1__, 0, 100, 200);
// Atomics.waitAsync(int32__1__, 0, 0);             // ES2024
// Atomics.pause();                                  // ES2026
// ═══════════════════════════════════════════════════════════════════════════
// 22. ERROR TYPES & FEATURES
// ═══════════════════════════════════════════════════════════════════════════
// AggregateError (ES2021)
const aggErr__1__ = new AggregateError(
  [new Error("e1"), new TypeError("e2")],
  "Multiple failures"
);
aggErr__1__.errors; // [Error, TypeError]
// Error cause chaining (ES2022)
const causeErr__1__ = new Error("High-level failure", {
  cause: new RangeError("Out of bounds"),
});
causeErr__1__.cause; // RangeError
// Error.isError (ES2026)
// Error.isError(causeErr__1__);                    // true
// SuppressedError (ES2025 — for `using` disposal)
const suppressed__1__ = new SuppressedError(
  new Error("disposal error"),
  new Error("original error"),
  "Disposal failed"
);
// ═══════════════════════════════════════════════════════════════════════════
// 23. JSON ENHANCEMENTS
// ═══════════════════════════════════════════════════════════════════════════
JSON.stringify({ a: 1 }, null, 2);            // ES5
JSON.parse('{"a":1}');                         // ES5
// Well-formed JSON.stringify (ES2019) — no lone surrogates
JSON.stringify("\uD800");                      // → '"\\ud800"'
// JSON superset (ES2019) — U+2028 & U+2029 allowed in strings
const jsonSuperset__1__ = "Line\u2028Separator";
// ═══════════════════════════════════════════════════════════════════════════
// 24. MISCELLANEOUS SYNTAX
// ═══════════════════════════════════════════════════════════════════════════
// Comma operator
const commaResult__1__ = (1, 2, 3);                // evaluates to 3
// void operator
void 0;
// typeof
typeof undefined === "undefined";
// instanceof
[] instanceof Array;
// in operator
"a" in { a: 1 };
// delete operator
const delObj__1__ = { a: 1 };
delete delObj__1__.a;
// Grouping / parentheses
const grouped__1__ = (1 + 2) * 3;
// Conditional (ternary) operator
const ternary__1__ = true ? "yes" : "no";
// Tagged template with raw
function rawTag__1__(strings__1__) { return strings__1__.raw; }
rawTag__1__`\n`;                                   // ["\n"] — not newline
// Computed property access
const cpa__1__ = { foo: 1 };
cpa__1__["foo"];
// Optional chaining with dynamic keys & calls
const maybeObj__1__ = null;
maybeObj__1__?.["key"];
maybeObj__1__?.();
// ═══════════════════════════════════════════════════════════════════════════
// 25. PATTERN MATCHING & UPCOMING (Stage 3 / ES2026+)
// ═══════════════════════════════════════════════════════════════════════════
/*
  // Decorators (ES2025 — Stage 3, shipping in engines)
  function log__1__(target__1__, context__1__) {
    return function (...args__1__) {
      console.log(`Calling ${context__1__.name}`);
      return target__1__.apply(this, args__1__);
    };
  }
  class Service__1__ {
    @log__1__
    handle__1__(req__1__) { return "ok"; }
  }
  // Promise.try (ES2026)
  Promise.try(() => {
    return riskyOperation__1__();
  });
  // RegExp.escape (ES2026)
  new RegExp(RegExp.escape("a]b"));
  // Iterator.concat (ES2026)
  Iterator.concat([1, 2].values(), [3, 4].values());
  // Atomics.pause (ES2026)
  Atomics.pause();
  // Error.isError (ES2026)
  Error.isError(new Error());
  // Source phase imports (Proposal)
  import source workerModule__1__ from "./worker.js";
  new Worker(workerModule__1__);
  // Deferred import evaluation (Proposal)
  import defer * as heavy__1__ from "./heavy.js";
  heavy__1__.doWork(); // module evaluated on first access
*/
// ═══════════════════════════════════════════════════════════════════════════
// 26. PUTTING IT ALL TOGETHER — The "Kitchen Sink" Function
// ═══════════════════════════════════════════════════════════════════════════
async function* kitchenSink__1__({
  input__1__ = "default",
  nested: { level__1__ = 1 } = {},
  ...extra__1__
} = {}) {
  // Variables
  var v__1__ = 0;
  let l__1__ = 1;
  const c__1__ = 2;
  // BigInt & numeric separators
  const big__1__ = 100_000n + 1n;
  // Template literal
  const msg__1__ = `Input: ${input__1__}, Level: ${level__1__}`;
  // Destructuring
  const [first__1__, , third__1__, ...remaining__1__] = [1, 2, 3, 4, 5];
  const { toString: toStr__1__, ...restObj__1__ } = extra__1__;
  // Spread
  const merged__1__ = { ...restObj__1__, ...{ extra: true } };
  const combined__1__ = [...remaining__1__, ...[6, 7]];
  // Optional chaining + nullish coalescing
  const val__1__ = extra__1__?.deep?.value ?? "fallback";
  // Logical assignment
  let x__1__ = null;
  x__1__ ??= 0;
  x__1__ ||= 1;
  x__1__ &&= 2;
  // Classes inline
  class LocalClass__1__ {
    #id__1__;
    static #instances__1__ = 0;
    static { LocalClass__1__.#instances__1__ = 0; }
    constructor(id__1__) {
      this.#id__1__ = id__1__;
      LocalClass__1__.#instances__1__++;
    }
    get id__1__() { return this.#id__1__; }
    static get count__1__() { return LocalClass__1__.#instances__1__; }
    static hasId__1__(obj__1__) { return #id__1__ in obj__1__; }
  }
  // Symbol
  const tag__1__ = Symbol("kitchenSink");
  // Map & Set with new methods
  const s1__1__ = new Set([1, 2, 3]);
  const s2__1__ = new Set([3, 4, 5]);
  const union__1__ = s1__1__.union(s2__1__);
  const inter__1__ = s1__1__.intersection(s2__1__);
  // Iterator helpers
  const doubled__1__ = [1, 2, 3]
    .values()
    .filter(n__1__ => n__1__ > 1)
    .map(n__1__ => n__1__ * 2)
    .take(2)
    .toArray();
  // RegExp with named groups + v flag
  const re__1__ = /(?<digits>\d+)/v;
  const reMatch__1__ = re__1__.exec("abc123");
  const { groups: { digits: digits__1__ } } = reMatch__1__;
  // Proxy
  const observed__1__ = new Proxy(merged__1__, {
    get: (t__1__, p__1__, r__1__) => Reflect.get(t__1__, p__1__, r__1__),
    set: (t__1__, p__1__, v__1__, r__1__) => Reflect.set(t__1__, p__1__, v__1__, r__1__),
  });
  // Error with cause
  try {
    throw new AggregateError(
      [new TypeError("inner")],
      "outer",
      { cause: "root cause" }
    );
  } catch (e__1__) {
    console.error(e__1__.cause);
  }
  // Async iteration
  const asyncData__1__ = {
    [Symbol.asyncIterator]: async function* () {
      yield* [10, 20, 30];
    },
  };
  for await (const item__1__ of asyncData__1__) {
    // Process async items
  }
  // Promise.withResolvers
  const { promise: p__1__, resolve: res__1__ } = Promise.withResolvers();
  res__1__(42);
  await p__1__;
  // WeakRef
  const weakTarget__1__ = {};
  const ref__1__ = new WeakRef(weakTarget__1__);
  ref__1__.deref();
  // structuredClone
  const clone__1__ = structuredClone({ nested: [1, 2, 3] });
  // Generator yields
  yield await Promise.resolve(msg__1__);
  yield* [first__1__, third__1__, ...doubled__1__];
  yield big__1__;
  // Labeled loop with destructuring
  loop__1__: for (const [i__1__, v__1__] of combined__1__.entries()) {
    if (v__1__ > 6) break loop__1__;
    if (v__1__ % 2 === 0) continue loop__1__;
  }
  return { val__1__, digits__1__, union: [...union__1__], clone__1__ };
}
// ═══════════════════════════════════════════════════════════════════════════
// INVOKE IT
// ═══════════════════════════════════════════════════════════════════════════
(async () => {
  const gen__1__ = kitchenSink__1__({ input__1__: "demo", nested: { level__1__: 5 }, foo: "bar" });
  for await (const value__1__ of gen__1__) {
    console.log("Yielded:", value__1__);
  }
})();