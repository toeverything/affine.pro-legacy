import { getBlocksuiteReader } from "blocksuite-reader";
import { ContentFileMeta, parseWorkspacePageMeta } from "./resolveContentFile";

const reader = getBlocksuiteReader({
  // public workspace id for affine.pro
  workspaceId: `H6vffRmJbCfA-r3kq_36_`,
});

let lastFetch = 0;

let _pages$: Promise<ContentFileMeta[] | undefined> | null = null;

export async function getWorkspacePages(invalidateCache = false) {
  if (!_pages$ || lastFetch < Date.now() - 1000 * 10 || invalidateCache) {
    _pages$ = reader.getWorkspacePages(true).then(pages => {
      return pages
        ?.filter(p => !p.trash)
        .map(page => parseWorkspacePageMeta(page));
    });
    lastFetch = Date.now();
  } else {
    console.log("Using cached pages.");
  }
  const pages = await _pages$;
  return pages;
}

export async function getWorkspacePage(
  slug: string,
  invalidateCache = true
): Promise<ContentFileMeta | undefined> {
  const pages = await getWorkspacePages();
  const page = pages?.find(p => p.slug === slug || p.id === slug);
  if (page) {
    return page;
  }
  if (invalidateCache) {
    return getWorkspacePage(slug, false);
  }
}
