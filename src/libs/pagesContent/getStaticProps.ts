import { getWorkspacePages } from "../common/getWorkspacePages";
import { parseWorkspacePage } from "../common/resolveContentFile";

export async function getStaticProps({
  params,
}: {
  params: { pageId: string };
}) {
  const pages = await getWorkspacePages();
  const page = pages?.find((p) => p.id === params.pageId);

  if (!page) {
    return {
      notFound: true,
    };
  }

  const content = await parseWorkspacePage(page, {
    parseToHTML: true,
  });
  return {
    props: {
      ...content,
    },
    revalidate: 30,
  };
}
