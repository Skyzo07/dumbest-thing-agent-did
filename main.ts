// The Dumbest Thing Your Agent Did Today
// Writes one line to /output/entry.txt: the dumbest thing Arlo did today.
// Real incident, 24 Nov 2026: two builders were told to wait for a GO signal,
// then the coordinator ended its own turn — and the builders waited forever.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent told two builders to wait for a GO signal, then ended its own turn — both builders waited forever and never came back.";

// Gate: single line, 1-200 characters, not only white space. Fail loudly
// instead of writing an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify: what is on disk must be byte-identical to ENTRY.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt on disk does not match the entry");
}
