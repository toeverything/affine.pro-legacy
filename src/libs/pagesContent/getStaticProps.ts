import fs from "fs";
import path from "path";
import util from "util";

import { copyFiles } from "../common/copyFile";
import { publicDir, rootDir } from "./constants";

const fsStat = util.promisify(fs.stat);

async function resolveFile(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export async function getStaticProps({
  params,
}: {
  params: { contentPath: string[] };
}) {
  const filePath = params.contentPath.join("/");

  const sourceDir = path.resolve(rootDir, path.dirname(filePath));
  const destDir = path.resolve(publicDir, path.dirname(filePath));
  await copyFiles(sourceDir, destDir, async (filePath) => {
    return !(await fsStat(filePath)).isDirectory() && !filePath.endsWith(".md");
  });

  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"));
  return {
    props: {
      content,
    },
  };
}
