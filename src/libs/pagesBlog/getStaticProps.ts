import fs from "fs";
import fsPromise from "fs/promises";
import grayMatter from "gray-matter";
import path from "path";

import type { BlogMeta } from "./types";

const readdir = fsPromise.readdir;
const readFile = fsPromise.readFile;

const rootDir = path.resolve(process.cwd(), "./src/content/blog");

async function getBlogMetas(): Promise<BlogMeta[]> {
  const subdirs = await readdir(rootDir);
  const blogMetas = await Promise.all(
    subdirs.map(async (subdir) => {
      const filepath = path.resolve(rootDir, subdir, "./index.md");
      if (!fs.existsSync(filepath)) {
        return null;
      }

      const fileContent = await readFile(filepath);
      const rawBlogMeta = grayMatter(fileContent);
      const { title, author, tags, cover, description } =
        rawBlogMeta.data as Record<string, string>;

      return {
        title,
        author: author.split(",").map((au) => au.trim()),
        tags: tags.split(",").map((tag) => tag.trim()),
        cover: path.resolve("/content/blog", subdir, cover),
        description,
      };
    })
  );
  return blogMetas.filter((meta) => !!meta) as BlogMeta[];
}

export async function getStaticProps() {
  const blogMetas = await getBlogMetas();
  return {
    props: {
      blogMetas,
    },
  };
}
