import { useMatchMediaMaxWidth1000 } from "@/libs/common/matchMedia";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import NextLink from "next/link";

interface LinkTextProps {
  href: string;
  title: string;
  target?: "_blank";
}

export const LinkText = ({ href, title, target = "_blank" }: LinkTextProps) => {
  const isExternalLink = href.startsWith("http");
  const matchesMaxWidth1000 = useMatchMediaMaxWidth1000();
  return (
    <>
      {isExternalLink ? (
        <a href={href} target={target}>
          <Button style={matchesMaxWidth1000 ? { justifyContent: "left" } : {}}>
            <StyledText>{title}</StyledText>
          </Button>
        </a>
      ) : (
        <NextLink href={href}>
          <Button style={matchesMaxWidth1000 ? { justifyContent: "left" } : {}}>
            <StyledText>{title}</StyledText>
          </Button>
        </NextLink>
      )}
    </>
  );
};
const StyledText = styled("div")({
  color: "#262626",
  padding: "2px 0",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "capitalize",
});
const StyledContainer = styled("div")({});
