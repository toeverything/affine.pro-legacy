import NextLink from "next/link";
import styles from "./LinkText.module.css";

interface LinkTextProps {
  href: string;
  title: string;
  target?: "_blank";
}

export const LinkText = ({ href, title, target = "_blank" }: LinkTextProps) => {
  const isExternalLink = href.startsWith("http");
  return (
    <span className={styles.link_text}>
      {isExternalLink ? (
        <a href={href} target={target}>
          {title}
        </a>
      ) : (
        <NextLink href={href}>{title}</NextLink>
      )}
    </span>
  );
};
