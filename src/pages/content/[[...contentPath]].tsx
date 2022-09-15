export { getStaticPaths } from "@/libs/pagesContent/getStaticPaths";
export { getStaticProps } from "@/libs/pagesContent/getStaticProps";

export default function Post({ content }: { content: string }) {
  return (
    <div>
      {content}
      <img src="./logo.png" />
    </div>
  );
}
