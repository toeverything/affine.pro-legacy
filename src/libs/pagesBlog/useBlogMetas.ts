import React from "react";
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
  return React.useMemo(() => {
    const tags = getTags(blogMetas);
    const publishedMetas = blogMetas.filter((meta) => meta.publish);
    let filteredMetas = query?.tag
      ? publishedMetas.filter((meta) => meta.tags?.includes(query.tag))
      : publishedMetas;
    if (filteredMetas.length > 3 && filteredMetas[0] === publishedMetas[0]) {
      filteredMetas = filteredMetas.slice(1);
    }
    return { blogMetas: publishedMetas, tags, filteredMetas };
  }, [blogMetas, query?.tag]);
};
