import type { ContentFileMeta } from "../common/resolveContentFile";

function getTags(blogMetas: ContentFileMeta[]) {
  const tagsMap = new Map<string, number>();
  blogMetas.forEach((meta) => {
    meta.tags?.forEach((tag) => {
      if (tagsMap.has(tag)) {
        tagsMap.set(tag, tagsMap.get(tag)! + 1);
      } else {
        tagsMap.set(tag, 1);
      }
    });
  });
  return Array.from(tagsMap);
}

export const useBlogMetas = (
  blogMetas: ContentFileMeta[],
  query?: { tag: string }
) => {
  const tags = getTags(blogMetas);
  const filteredMetas = query?.tag
    ? blogMetas.filter((meta) => meta.tags?.includes(query.tag))
    : blogMetas;
  return { blogMetas, tags, filteredMetas };
};
