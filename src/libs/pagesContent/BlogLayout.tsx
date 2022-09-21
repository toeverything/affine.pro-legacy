import type { ContentFileMeta } from "../common/resolveContentFile";
import styles from "./BlogLayout.module.css";

export const BlogLayout = ({
  title,
  description,
  authors,
  tags,
  updated,
  created,
  html,
}: ContentFileMeta) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <h1>{title}</h1>
          <p>{description}</p>
          {updated ? (
            <div>{`Updated: ${new Date(updated).toLocaleDateString()}`}</div>
          ) : created ? (
            <div>{`Created: ${new Date(created!).toLocaleDateString()}`}</div>
          ) : null}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.body_left}>
          <h5>Authors</h5>
          <p>{authors?.join(",") || "Someone"}</p>
          <h5>Tags</h5>
          <div>{tags?.join(",") || "None"}</div>
        </div>
        <div
          className={styles.body_right}
          dangerouslySetInnerHTML={{ __html: html || "" }}
        />
      </div>
    </div>
  );
};
