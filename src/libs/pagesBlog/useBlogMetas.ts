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
  let filteredMetas = query?.tag
    ? blogMetas.filter((meta) => meta.tags?.includes(query.tag))
    : blogMetas;
  if (filteredMetas.length > 3 && filteredMetas[0] === blogMetas[0]) {
    filteredMetas = filteredMetas.slice(1);
  }
  return { blogMetas, tags, filteredMetas };
};
