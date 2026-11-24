// Entry for "Make the AI Judge Laugh: Cat Reviews Its Human"
// (make.fun competition u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).
//
// A single deadpan one-star review, written by a house cat about its human.
// The complaint is specific (the closed bathroom door) and the sting lands
// in the last few words: the cat measures the household by cat standards,
// and the mortgage — the human's proudest proof of ownership — turns out
// to be paid in hair. Deterministic: the same line is written on every run.
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
