import path from "path";
import { getRealPaths } from "../common/getRealPaths";
import { resolveFile } from "../common/resolveContentFile";
import { rootDir } from "./constants";

const realPaths = getRealPaths();

export async function getStaticProps({
  params,
}: {
  params: { contentPath: string[] };
}) {
  const newFilePath = params.contentPath.join("/");

  const filePath = await realPaths.then((val) => {
    return val[newFilePath];
  });

  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"), {
    parseToHTML: true,
  });
  return {
    props: {
      ...content,
    },
  };
}
