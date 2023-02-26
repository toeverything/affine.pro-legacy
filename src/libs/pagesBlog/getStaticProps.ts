import { getWorkspacePages } from "../common/getWorkspacePages";
import {
  ContentFileMeta,
  parseWorkspacePage,
} from "../common/resolveContentFile";

async function getFiles(): Promise<ContentFileMeta[]> {
  const pages = await getWorkspacePages();

  if (!pages) {
    return [];
  }

  const files = await Promise.all(
    pages.map(async (page) => {
      return parseWorkspacePage(page);
    })
  );

  return files.flat().filter((f) => !!f) as ContentFileMeta[];
}

export async function getStaticProps() {
  const blogMetas = (await getFiles()).sort(
    ({ created: a }, { created: b }) => {
      if (a === null || b === null) {
        return 0;
      }
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  );

  return {
    props: {
      blogMetas,
    },
    revalidate: 60,
  };
}
