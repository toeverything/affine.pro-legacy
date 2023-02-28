import { getBlocksuiteReader } from "blocksuite-reader";
import { ContentFileMeta, parseWorkspacePageMeta } from "./resolveContentFile";

const reader = getBlocksuiteReader({
  // public workspace id for affine.pro
  workspaceId: `1MCi2U4DnOMqpFVWYztfj`,
});

let lastFetch = 0;

let _pages$: Promise<ContentFileMeta[] | undefined> | null = null;

export async function getWorkspacePages() {
  if (!_pages$ || lastFetch < Date.now() - 1000 * 10) {
    _pages$ = reader.getWorkspacePages(true).then((pages) => {
      return pages?.map((page) => parseWorkspacePageMeta(page));
    });
    lastFetch = Date.now();
  } else {
    console.log("Using cached pages.");
  }
  const pages = await _pages$;
  return pages;
}
