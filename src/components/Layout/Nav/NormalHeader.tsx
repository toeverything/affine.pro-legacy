import { styled } from "@mui/material";
import { LinkText } from "../LinkText";
import useNavLink from "./config";
import { LanguageMenu } from "./LanguageMenu";

export const NormalHeader = () => {
  const navLinks = useNavLink();
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
