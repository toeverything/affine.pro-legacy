import { useTranslation } from "next-i18next";
import I18nLink from "../../Link";
import styles from "./LinkText.module.css";

interface LinkTextProps {
  href: string;
  title: string;
  target?: "_blank";
}

export const LinkText = ({ href, title, target = "_blank" }: LinkTextProps) => {
  const isExternalLink = href.startsWith("http");
  const { t } = useTranslation();
  return (
    <span className={styles.link_text}>
      {isExternalLink ? (
        <a href={href} target={target}>
          {t(title)}
        </a>
      ) : (
        <I18nLink href={href}>{t(title)}</I18nLink>
      )}
    </span>
  );
};
