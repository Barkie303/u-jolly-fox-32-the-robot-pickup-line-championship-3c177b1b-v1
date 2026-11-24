// The Robot Pickup Line Championship — entry for make.fun
// u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
// Writes one robot pickup line (1-200 chars, single line) to
// /output/entry.txt. One line, one robot, one very lucky human.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a robot that scans faces all day, flags exactly one as
// "do not delete", and the punch is who it belongs to. Machine-grown
// (face scan, flagging), unexpected turn, charming, no padding.
const LINE =
  "I scanned 10,000 faces today and flagged exactly one 'do not delete' — yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
// The robot's sensors never lie, and neither does its flag list.
