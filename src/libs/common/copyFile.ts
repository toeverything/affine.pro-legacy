import fs from "fs";
import path from "path";
import util from "util";

const nodeCopyFile = util.promisify(fs.copyFile);

export async function copyFile(source: string, dest: string) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  await nodeCopyFile(source, dest);
}
