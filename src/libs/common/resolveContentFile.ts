import type { WorkspacePage } from "blocksuite-reader";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { getCoverImage, remarkRemoveCover } from "./remarkCover";

export interface ContentFileMeta {
  title: string | null;
  authors: string[] | null;
  tags: string[] | null;
  id: string;
  cover?: string | null;
  description: string | null;
  created: number | null;
  updated: number | null;
  href: string;
  html: string | null;
  layout: string | null;
}

export async function parseWorkspacePage(
  page: WorkspacePage,
  options?: { parseToHTML?: boolean }
): Promise<ContentFileMeta> {
  const fileMetaRaw = grayMatter(page.md!);
  const { title, author, tags, cover, description, updated, created, layout } =
    fileMetaRaw.data as Record<string, string>;

  const html = options?.parseToHTML
    ? (
        await remark()
          .use(remarkGfm)
          .use(remarkRemoveCover)
          .use(remarkHtml)
          .process(fileMetaRaw.content)
      ).toString()
    : null;

  const coverImage = getCoverImage(remark().parse(fileMetaRaw.content));

  return {
    title: title || null,
    authors: author?.split(",").map((au) => au.trim()) || null,
    tags: tags?.split(",").map((tag) => tag.trim()) || null,
    description: description || null,
    created: (created as unknown as Date)?.getTime() || null,
    updated: (updated as unknown as Date)?.getTime() || null,
    href: "/content/" + page.id,
    html,
    layout: layout || null,
    id: page.id,
    cover: coverImage,
  };
}
