// "Make the AI Judge Laugh: Cat Reviews Its Human" — one cat, one verdict.
// (make.fun competition u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
//
// A deadpan one-star review from a house cat about its human.
// The grievance is petty and precise — a bathroom door shut in its face —
// but the verdict is pure cat logic: by feline accounting the cat owns
// this house, because the mortgage is paid in hair. It has seen the
// mortgage. It is hair. Deterministic: the same line, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. He closes the bathroom door like I don't pay the mortgage in hair. I have seen the mortgage. It is hair.";

// Defensive gate: the entry must be exactly one line, 1-200 chars,
// with no leading/trailing whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}.`);
}
if (/[\n\r]/.test(LINE)) {
  throw new Error("Entry must be a single line (no newline characters).");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
