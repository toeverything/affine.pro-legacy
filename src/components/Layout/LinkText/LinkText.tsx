import styled from "@emotion/styled";
import Button from "@mui/material/Button";
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
        <Button>
          <StyledContainer>
            <a href={href} target={target}>
              {title}
            </a>
          </StyledContainer>
        </Button>
      ) : (
        <Button>
          <StyledContainer>
            <NextLink href={href}>{title}</NextLink>
          </StyledContainer>
        </Button>
      )}
    </span>
  );
};
const StyledContainer = styled("div")({
  color: "#262626",
  padding: "2px 0",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "capitalize",
});
