import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
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
        <Button>
          <StyledContainer>
            <a href={href} target={target}>
              {t(title)}
            </a>
          </StyledContainer>
        </Button>
      ) : (
        <Button>
          <StyledContainer>
            <NextLink href={href}>{t(title)}</NextLink>
          </StyledContainer>
        </Button>
      )}
    </span>
  );
};
const StyledContainer = styled("div")({
  color: "#262626",
  padding: "2px 0",
  fontWeight: "normal",
  fontSize: "16px",
});
