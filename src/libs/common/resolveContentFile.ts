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
  slug: string | null;
  cover?: string | null;
  description: string | null;
  created: number | null;
  updated: number | null;
  md: string;
  layout: string | null;
  publish?: boolean;
  html?: string;
}

export function parseWorkspacePageMeta(page: WorkspacePage): ContentFileMeta {
  const fileMetaRaw = grayMatter(page.md!);
  const {
    title,
    author,
    tags,
    publish,
    description,
    updated,
    created,
    layout,
    slug,
  } = fileMetaRaw.data;

  const coverImage = getCoverImage(remark().parse(fileMetaRaw.content));

  return {
    title: title || null,
    authors:
      (typeof author === "string" && author?.split(",").map(au => au.trim())) ||
      null,
    tags:
      (typeof tags === "string" && tags?.split(",").map(tag => tag.trim())) ||
      null,
    description: description || null,
    created: (created as unknown as Date)?.getTime() || null,
    updated: (updated as unknown as Date)?.getTime() || null,
    layout: layout || null,
    id: page.id,
    slug: (slug || page.id).toLowerCase().trim(),
    cover: coverImage,
    md: page.md ?? "",
    publish: !!publish,
  };
}

export async function renderHTML(md: string): Promise<string> {
  const { content } = grayMatter(md);
  const html = (
    await remark()
      .use(remarkGfm)
      .use(remarkRemoveCover)
      .use(remarkHtml)
      .process(content)
  ).toString();
  return html;
}
