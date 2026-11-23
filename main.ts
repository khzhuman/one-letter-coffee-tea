import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is a single letter, A for coffee.
const choice = "A";

// Guard: the gate requires exactly one UTF-8 character, nothing else.
if ([...choice].length !== 1) throw new Error("entry must be exactly one letter");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", choice, "utf8");
console.log(choice);
