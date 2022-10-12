import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languageList } from "../config";
import { HoverMenu } from "./HoverMenu";

export const LanguageMenu = () => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (event: string) => {
    i18n.changeLanguage(event);
  };
  return (
    <HoverMenu
      title={
        <StyledContainer>
          <StyledText>{t("language")}</StyledText>
          <UnfoldMoreIcon />
        </StyledContainer>
      }
      options={languageList}
      onSelect={(value) => {
        changeLanguage(value);
      }}
    />
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const StyledText = styled("span")({
  marginRight: "4px",
  marginLeft: "16px",
});
