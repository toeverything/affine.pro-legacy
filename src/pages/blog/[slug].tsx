import type { ContentFileMeta } from "@/libs/common/resolveContentFile";
import { BlogLayout } from "@/libs/pagesContent/BlogLayout";
import type { FC } from "react";

export { getStaticPaths } from "@/libs/pagesContent/getStaticPaths";
export { getStaticProps } from "@/libs/pagesContent/getStaticProps";

const layouts: Record<string, FC<ContentFileMeta>> = {
  blog: BlogLayout,
};

export default function Post(fileMeta: ContentFileMeta) {
  const Layout = layouts[fileMeta.layout || "blog"] || layouts.blog;
  return <Layout {...fileMeta} />;
}
