import { isProduction } from "../common/env";
import { getWorkspacePages } from "../common/getWorkspacePages";

export async function getStaticPaths() {
  const pages = await getWorkspacePages();
  if (!pages) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const paths = pages.map((file) => {
    return {
      params: {
        pageId: file.id,
      },
    };
  });

  return {
    paths: isProduction ? paths : [],
    fallback: "blocking",
  };
}
