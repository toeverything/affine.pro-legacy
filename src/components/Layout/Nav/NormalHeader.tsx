import { styled } from "@mui/material";
import { LinkText } from "../LinkText";
import { useLeftNavLink, useRightNavLink } from "./config";
import { LanguageMenu } from "./LanguageMenu";

export const NormalLeftHeader = () => {
  const navLinks = useLeftNavLink();
  return (
    <>
      <StyledContainer>
        {navLinks.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
      </StyledContainer>
    </>
  );
};
export const NormalRightHeader = () => {
  const navLinks = useRightNavLink();
  return (
    <>
      <StyledContainer>
        {navLinks.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
        <LanguageMenu />
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
});
