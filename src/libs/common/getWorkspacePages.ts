import { getBlocksuiteReader, WorkspacePage } from "blocksuite-reader";

const reader = getBlocksuiteReader({
  workspaceId: `K07aPDNVDsT1jmeGMmeFP`,
});

let lastFetch = 0;

let _pages$: Promise<WorkspacePage[] | undefined> | null = null;

export async function getWorkspacePages() {
  if (!_pages$ || lastFetch < Date.now() - 1000 * 30) {
    _pages$ = reader.getWorkspacePages(true);
    lastFetch = Date.now();
  } else {
    console.log("Using cached pages.");
  }
  const pages = await _pages$;
  return pages;
}
