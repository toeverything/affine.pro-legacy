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
  const paths = (await realPaths).paths.filter((paths) => {
    if (params.contentPath.every((val) => paths.realPath.includes(val))) {
      return paths.realPath;
    }
  });

  const filePath = paths[0].realPath.join("/");
  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"), {
    parseToHTML: true,
  });
  return {
    props: {
      ...content,
    },
  };
}
