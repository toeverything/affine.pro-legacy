import { getWorkspacePage } from "../common/getWorkspacePages";
import { renderHTML } from "../common/resolveContentFile";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const page = await getWorkspacePage(params.slug);

  if (!page) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  const content = await renderHTML(page.md);
  return {
    props: {
      ...page,
      html: content,
    },
    revalidate: 60,
  };
}
