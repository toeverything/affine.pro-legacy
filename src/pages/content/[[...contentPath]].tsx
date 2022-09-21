export { getStaticPaths } from "@/libs/pagesContent/getStaticPaths";
export { getStaticProps } from "@/libs/pagesContent/getStaticProps";

export default function Post({ content }: { content: string }) {
  let htmlObj = {
    __html: content,
  };
  return <div dangerouslySetInnerHTML={htmlObj}></div>;
}
