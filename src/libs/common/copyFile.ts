import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";
import util from "util";

const nodeCopyFile = util.promisify(fs.copyFile);
const readdir = fsPromise.readdir;

export async function copyFile(source: string, dest: string) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  await nodeCopyFile(source, dest);
}

export async function copyFiles(
  sourceDir: string,
  destDir: string,
  filter: (filepath: string) => Promise<boolean> | boolean
) {
  const subFiles = await readdir(sourceDir);
  await Promise.all(
    subFiles.map(async (subFile) => {
      const filepath = path.resolve(sourceDir, subFile);
      const filterRes = await filter(filepath);
      if (!filterRes) {
        await copyFile(filepath, path.resolve(destDir, subFile));
      }
    })
  );
}
