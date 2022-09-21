import fs from "fs";
import path from "path";

import { rootDir } from "./constants";

async function resolveFile(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export async function getStaticProps({
  params,
}: {
  params: { contentPath: string[] };
}) {
  const filePath = params.contentPath.join("/");

  const content = await resolveFile(path.resolve(rootDir, filePath + ".md"));
  return {
    props: {
      content,
    },
  };
}
