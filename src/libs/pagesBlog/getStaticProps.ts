import fsPromise from "fs/promises";
import path from "path";

import type { ContentFileMeta } from "../common/resolveContentFile";
import { resolveFile } from "../common/resolveContentFile";
import { blogRootDir } from "./constants";

const readdir = fsPromise.readdir;
const readFile = fsPromise.readFile;
const fsStat = fsPromise.stat;

async function getFiles(dir: string): Promise<ContentFileMeta[]> {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      if ((await fsStat(res)).isDirectory()) {
        return await getFiles(res);
      } else {
        if (res.endsWith(".md")) {
          return await resolveFile(res);
        }
        return null;
      }
    })
  );
  return files.flat().filter((f) => !!f) as ContentFileMeta[];
}

// async function getBlogMetas(): Promise<ContentFileMeta[]> {
//   const subdirs = await readdir(rootDir);

//   const blogMetas = await Promise.all(
//     subdirs.map(async (subdir) => {
//       const filepath = path.resolve(rootDir, subdir, "./index.md");
//       if (!fs.existsSync(filepath)) {
//         return null;
//       }

//       return await resolveFile(filepath);
//     })
//   );

//   return blogMetas.filter((meta) => !!meta) as ContentFileMeta[];
// }

export async function getStaticProps() {
  const blogMetas = (await getFiles(blogRootDir)).sort(
    ({ created: a }, { updated: b }) => {
      if (a! < b!) {
        return 1;
      } else if (a! > b!) {
        return -1;
      } else {
        return 0;
      }
    }
  );

  return {
    props: {
      blogMetas,
    },
  };
}
