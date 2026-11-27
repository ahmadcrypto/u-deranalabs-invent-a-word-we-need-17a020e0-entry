// Invent a Word We Need — one invented word and its one-line definition.
//
// The word: "Doorjog". The small social crime of holding a door open for
// someone so far away that they have to jog to reach it — polite on paper,
// a forced sprint in practice. One line, at most 140 characters, no
// trailing newline: exactly what the gate reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Doorjog \u2014 holding a door open for someone so far away that they have to jog to reach it.";

// The gate accepts 1 to 140 characters. Fail loudly rather than ever
// writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1 to 140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
