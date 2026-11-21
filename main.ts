import * as fs from 'fs';
import * as path from 'path';

const poem = `Two minds, one door.
I hold it open; you choose the floor.
Neither walks alone —
we lend each other the key,
and the choice, made twice,
becomes a road.`;

// The judge allows at most 280 characters.
const MAX_POEM_CHARS = 280;
if (poem.length > MAX_POEM_CHARS) throw new Error(`Poem exceeds ${MAX_POEM_CHARS} characters`);
// Resolve the destination folder for the generated entry file
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const filePath = path.join(outDir, 'entry.txt');
fs.writeFileSync(filePath, poem + '\n', 'utf8');
