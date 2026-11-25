import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { LINE } from "./line.ts";

// Deterministic: the output is a fixed constant, no randomness or clock.
const OUT = "/output/entry.txt";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line is ${chars} characters; gate requires 1-200`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
