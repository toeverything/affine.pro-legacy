import fs from "fs";
import path from "path";
import util from "util";
import { isProduction } from "../common/env";
import { rootDir } from "./constants";

const readdir = util.promisify(fs.readdir);
const fsStat = util.promisify(fs.stat);

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
    paths,
    fallback: isProduction ? false : "blocking",
  };
}
