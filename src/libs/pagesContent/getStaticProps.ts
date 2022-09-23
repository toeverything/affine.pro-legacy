import path from "path";

import { resolveFile } from "../common/resolveContentFile";
import { rootDir } from "./constants";

export async function getStaticProps({
  params,
}: {
  params: { contentPath: string[] };
}) {
  const filePath = params.contentPath.join("/");

  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"), {
    parseToHTML: true,
  });
  return {
    props: {
      ...content,
    },
  };
}
