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
      console.log("Fetched pages again.");
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
  invalidateCache = false
): Promise<ContentFileMeta | undefined> {
  const pages = await getWorkspacePages(invalidateCache);
  const _slug = slug.toLowerCase().trim();
  const page = pages?.find(
    p => p.slug?.toLowerCase().trim() === _slug || p.id === _slug
  );
  if (page) {
    return page;
  }
  if (!invalidateCache) {
    return getWorkspacePage(slug, true);
  }
  console.error(
    "cannot find " + slug + "in ",
    pages?.map(p => p.slug)
  );
}
