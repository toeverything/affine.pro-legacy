import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LinkText } from "../LinkText";
import { navLinks } from "./config";
import { LanguageMenu } from "./LanguageSwitch/LanguageMenu";

export const NormalHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledContainer>
        {navLinks.map((nav) => {
          return (
            <LinkText key={nav.title} href={nav.href} title={t(nav.title)} />
          );
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
