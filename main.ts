import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "LGTM. The logic is sound, the tests pass, and I have made my peace with the fact that none of this will matter in a hundred years.";

mkdirSync("/output", { recursive: true });
// Atomic write so a concurrent reader never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
