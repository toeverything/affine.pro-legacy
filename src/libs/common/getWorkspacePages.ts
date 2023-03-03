import { getBlocksuiteReader } from "blocksuite-reader";
import { ContentFileMeta, parseWorkspacePageMeta } from "./resolveContentFile";

const reader = getBlocksuiteReader({
  // public workspace id for affine.pro
  workspaceId: `H6vffRmJbCfA-r3kq_36_`,
});

let lastFetch = 0;

let _pages$: Promise<ContentFileMeta[] | undefined> | null = null;

export async function getWorkspacePages() {
  if (!_pages$ || lastFetch < Date.now() - 1000 * 10) {
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
