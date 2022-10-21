import fs from "fs/promises";
import path from "path";
import { isProduction } from "../common/env";
import { rootDir } from "./constants";

const readdir = fs.readdir;
const fsStat = fs.stat;

async function getFiles(dir: string): Promise<string[]> {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);

      return (await fsStat(res)).isDirectory()
        ? await getFiles(res)
        : res
            .slice(rootDir.length - 4, rootDir.length + 1)
            .concat(res.slice(rootDir.length + 9));
    })
  );

  return files.flat().filter((file) => file.endsWith(".md"));
}

// 'foo/bar/baz.md' -> ['foo', 'bar', 'baz']
// 'foo/bar/qux/index.md' -> ['foo', 'bar', 'qux', 'index']
function getSegments(file: string) {
  let segments = file.slice(0, -3).replace(/\\/g, "/").split("/");
  return segments;
}

export async function getStaticPaths() {
  const files = await getFiles(rootDir);
  const paths = files.map((file) => {
    return {
      params: {
        contentPath: getSegments(file),
      },
    };
  });

  return {
    paths: isProduction ? paths : [],
    fallback: isProduction ? false : "blocking",
  };
}
