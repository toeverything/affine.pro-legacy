import type { ContentFileMeta } from "@/libs/common/resolveContentFile";
import styles from "@/libs/pagesBlog/blog.module.css";
import { useBlogMetas } from "@/libs/pagesBlog/useBlogMetas";
import { useRouter } from "next/router";
import { Page } from "../../components/Layout/Page";
export { getStaticPaths } from "@/libs/i18n/getStatic";
export { getStaticProps } from "@/libs/pagesBlog/getStaticProps";

export default function Blog(props: { blogMetas: ContentFileMeta[] }) {
  const router = useRouter();

  const { tags, blogMetas, filteredMetas } = useBlogMetas(props.blogMetas, {
    tag: router.query.tag as string,
  });

  const changeTag = (tag?: string) => {
    const path = `${window.location.pathname}${tag ? `?tag=${tag}` : ""}`;
    router.push(path);
  };

  return (
    <Page>
      <div>
        <div className={styles.header}>
          <div className={styles.header_content}>
            <h1>News and Updates</h1>
            <p>
              The latest AFFiNE news, case studies, tutorials, and resources.
            </p>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body_left}>
            <h5>Tags</h5>
            <ul className={styles.body_left_list}>
              <li
                className={`${styles.body_left_list_item} ${
                  router.query.tag || styles.body_left_list_item_active
                }`}
                onClick={() => changeTag()}
              >
                <span>All</span>
                <span>{blogMetas.length}</span>
              </li>
              {tags.map(([tag, count]) => {
                const className = `${styles.body_left_list_item}${
                  tag === router.query.tag
                    ? ` ${styles.body_left_list_item_active}`
                    : ""
                }`;
                return (
                  <li
                    key={tag}
                    className={className}
                    onClick={() => changeTag(tag)}
                  >
                    <span>{tag}</span>
                    <span>{count}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.body_right}>
            <ul className={styles.body_right_list}>
              {filteredMetas.map((meta) => {
                return (
                  <li
                    key={meta.cover}
                    className={styles.body_right_list_item}
                    onClick={() => router.push(meta.href)}
                  >
                    <div className={styles.body_right_list_item_left}>
                      <picture>
                        <img src={meta.cover || ""} alt="Page cover" />
                      </picture>
                    </div>
                    <div className={styles.body_right_list_item_right}>
                      <h2>{meta.title}</h2>
                      <p>
                        {new Date(
                          meta.updated ? meta.updated : meta.created ?? ""
                        ).toLocaleDateString("en-US")}
                      </p>
                      <p>{meta.authors?.join(", ")}</p>
                      <p>
                        {meta.tags?.map((item) => {
                          return (
                            <span key={item} className={styles.tag}>
                              {item}
                            </span>
                          );
                        })}
                      </p>
                      <p className={styles.description}>{meta.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
