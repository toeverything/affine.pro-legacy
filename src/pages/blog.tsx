import type { BlogMeta } from "@/libs/pagesBlog/types";
import Image from "next/image";
export { getStaticProps } from "@/libs/pagesBlog/getStaticProps";

export default function Blog(props: { blogMetas: BlogMeta[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <ul>
        {props.blogMetas.map((meta) => {
          return (
            <li key={meta.cover}>
              <h2>{meta.title}</h2>
              <p>{meta.author.join(", ")}</p>
              <p>{meta.tags.join(", ")}</p>
              <p>{meta.description}</p>
              <div
                style={{ position: "relative", height: "50px", width: "80px" }}
              >
                <Image src={meta.cover} layout="fill" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
