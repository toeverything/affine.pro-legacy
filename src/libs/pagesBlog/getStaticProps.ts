import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";

import { resolveFile } from "../common/resolveContentFile";

import type { ContentFileMeta } from "../common/resolveContentFile";

const readdir = fsPromise.readdir;
const readFile = fsPromise.readFile;

const rootDir = path.resolve(process.cwd(), "./src/content/blog");

async function getBlogMetas(): Promise<ContentFileMeta[]> {
  const subdirs = await readdir(rootDir);

  const blogMetas = await Promise.all(
    subdirs.map(async (subdir) => {
      const filepath = path.resolve(rootDir, subdir, "./index.md");
      if (!fs.existsSync(filepath)) {
        return null;
      }

      return await resolveFile(filepath);
    })
  );

  return blogMetas.filter((meta) => !!meta) as ContentFileMeta[];
}

export async function getStaticProps() {
  const blogMetas = await getBlogMetas();

  return {
    props: {
      blogMetas,
    },
  };
}
