import { getWorkspacePages } from "../common/getWorkspacePages";
import { renderHTML } from "../common/resolveContentFile";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const pages = await getWorkspacePages();
  const page = pages?.find(
    (p) => p.slug === params.slug || p.id === params.slug
  );

  if (!page) {
    return {
      notFound: true,
    };
  }

  const content = await renderHTML(page.md);
  return {
    props: {
      ...page,
      html: content,
    },
    revalidate: 10,
  };
}
