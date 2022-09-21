import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

import { rootDir } from "./constants";

async function resolveFile(filePath: string) {
  let file = fs.readFileSync(filePath, "utf8");
  let resultFile = await remark().use(remarkGfm).use(remarkHtml).process(file);
  return resultFile.value;
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
