import fs from "fs/promises";
import path from "path";
import { rootDir } from "../pagesContent/constants";

const readdir = fs.readdir;
const fsStat = fs.stat;

async function getFiles(dir: string): Promise<string[]> {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await fsStat(res)).isDirectory()
        ? await getFiles(res)
        : res.slice(rootDir.length + 1);
    })
  );

  return files.flat().filter((file) => file.endsWith(".md"));
}

// 'foo/bar/baz.md' -> ['foo', 'bar', 'baz']
// 'foo/bar/qux/index.md' -> ['foo', 'bar', 'qux', 'index']
function getKeySegments(file: string) {
  let segments = file
    .slice(0, 5)
    .replace(/\\/g, "/")
    .concat(file.slice(13, -3).replace(/\\/g, "/"));
  return segments;
}
function getValueSegments(file: string) {
  let segments = file.slice(0, -3).replace(/\\/g, "/");
  return segments;
}

export async function getRealPaths() {
  const files = await getFiles(rootDir);
  interface paths {
    [key: string]: string;
  }
  const paths: paths = {};
  files.map((file) => {
    paths[getKeySegments(file)] = getValueSegments(file);
  });

  return paths;
}
