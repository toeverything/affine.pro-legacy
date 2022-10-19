import fs from "fs/promises";
import grayMatter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import { projectRootDir } from "./env";

export interface ContentFileMeta {
  title: string | null;
  authors: string[] | null;
  tags: string[] | null;
  cover: string | null;
  description: string | null;
  created: number | null;
  updated: number | null;
  href: string;
  html: string | null;
  layout: string | null;
}

export async function resolveFile(
  filepath: string,
  options?: { parseToHTML?: boolean }
): Promise<ContentFileMeta> {
  const fileContent = await fs.readFile(filepath);
  const fileMetaRaw = grayMatter(fileContent);
  const { title, author, tags, cover, description, updated, created, layout } =
    fileMetaRaw.data as Record<string, string>;

  const filepathRemovedProject = filepath.replace(
    path.join(projectRootDir, "./src"),
    ""
  );

  const newFilepathRemovedProject = filepathRemovedProject
    .slice(0, 14)
    .concat(filepathRemovedProject.slice(22));

  const html = options?.parseToHTML
    ? (
        await remark()
          .use(remarkGfm)
          .use(remarkHtml)
          .process(fileMetaRaw.content)
      ).toString()
    : null;

  return {
    title: title || null,
    authors: author?.split(",").map((au) => au.trim()) || null,
    tags: tags?.split(",").map((tag) => tag.trim()) || null,
    cover: cover ? path.resolve(newFilepathRemovedProject, "..", cover) : null,
    description: description || null,
    created: (created as unknown as Date)?.getTime() || null,
    updated: (updated as unknown as Date)?.getTime() || null,
    href: newFilepathRemovedProject.replace(
      path.extname(newFilepathRemovedProject),
      ""
    ),
    html,
    layout: layout || null,
  };
}
