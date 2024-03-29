import type { ContentFileMeta } from "@/libs/common/resolveContentFile";
import styles from "@/libs/pagesBlog/blog.module.css";
import { useBlogMetas } from "@/libs/pagesBlog/useBlogMetas";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Page } from "../components/Layout/Page";
export { getStaticProps } from "@/libs/pagesBlog/getStaticProps";

export default function Blog(props: { blogMetas: ContentFileMeta[] }) {
  const router = useRouter();

  const { tags, blogMetas, filteredMetas } = useBlogMetas(props.blogMetas, {
    tag: router.query.tag as string,
  });

  const [currentList, setCurrentList] = useState({
    items: filteredMetas.slice(0, 5),
    hasMore: true,
  });

  const changeTag = (tag?: string) => {
    const path = `${window.location.pathname}${tag ? `?tag=${tag}` : ""}`;
    router.push(path);
  };
  const fetchMoreData = () => {
    if (currentList.items.length >= filteredMetas.length) {
      setCurrentList({ items: filteredMetas, hasMore: false });
      return;
    }
    let tep = currentList.items.concat(
      filteredMetas.slice(
        currentList.items.length,
        currentList.items.length + 5
      )
    );
    setCurrentList({
      items: tep,
      hasMore: tep.length < filteredMetas.length,
    });
  };

  useEffect(() => {
    if (router.query.tag) {
      setCurrentList({
        items: filteredMetas,
        hasMore: filteredMetas.length > 5,
      });
    } else {
      setCurrentList({
        items: filteredMetas.slice(0, 5),
        hasMore: true,
      });
    }
  }, [filteredMetas, router.query.tag]);

  const firstPublished = blogMetas[0];

  return (
    <Page showSearchBar={true}>
      <div>
        <div className={styles.header}>
          <div className={styles.header_content}>
            <div className={styles.header_content_left}>
              <h1>News and Updates</h1>
              <p>
                The latest AFFiNE news, case studies, tutorials, and resources.
              </p>
            </div>
            <div className={styles.header_content_right}>
              <Link href={"/blog/" + firstPublished?.slug}>
                <picture>
                  <img src={firstPublished?.cover || ""} alt="Page cover" />
                  <h1>{firstPublished?.title}</h1>
                </picture>
              </Link>
            </div>
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
              <InfiniteScroll
                dataLength={currentList.items.length}
                next={fetchMoreData}
                hasMore={currentList.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {currentList.items.map(meta => (
                  <Link
                    className={styles.body_right_list_item}
                    href={"/blog/" + meta.slug}
                    key={meta.id}
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
                        {meta.tags?.map(item => {
                          return (
                            <span key={item} className={styles.tag}>
                              {item}
                            </span>
                          );
                        })}
                      </p>
                      <p className={styles.description}>{meta.description}</p>
                    </div>
                  </Link>
                ))}
              </InfiniteScroll>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
