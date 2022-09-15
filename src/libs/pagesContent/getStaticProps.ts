import fs from "fs";
import path from "path";
import util from "util";

import { copyFile } from "../common/copyFile";
import { publicDir, rootDir } from "./constants";

const readdir = util.promisify(fs.readdir);
const fsStat = util.promisify(fs.stat);

async function copyAssets(dir: string) {
  const fullDirPath = path.resolve(rootDir, dir);
  const subFiles = await readdir(fullDirPath);
  subFiles.forEach(async (file) => {
    const res = path.resolve(fullDirPath, file);
    if (!(await fsStat(res)).isDirectory() && !res.endsWith(".md")) {
      const dest = path.resolve(publicDir, dir, file);
      await copyFile(res, dest);
    }
  });
}

async function resolveFile(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export async function getStaticProps({
  params,
}: {
  params: { contentPath: string[] };
}) {
  const filePath = params.contentPath.join("/");
  await copyAssets(path.dirname(filePath));
  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"));
  return {
    props: {
      content,
    },
  };
}
