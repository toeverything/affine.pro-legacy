import { LOCALES } from "@/i18n/resources/index";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import type { TooltipProps } from "@mui/material";
import { Button, styled, Tooltip } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageMenu = () => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (event: string) => {
    i18n.changeLanguage(event);
  };
  const [show, setShow] = useState(false);
  const currentLanguage = LOCALES.find((item) => item.tag === i18n.language);
  const [languageName, setLanguageName] = useState(
    currentLanguage?.originalName
  );
  return (
    <StyledTooltip
      title={
        <>
          {LOCALES.map((option) => {
            return (
              <ListItem
                key={option.name}
                title={option.name}
                onClick={() => {
                  changeLanguage(option.tag);
                  setShow(false);
                  setLanguageName(option.originalName);
                }}
              >
                {option.originalName}
              </ListItem>
            );
          })}
        </>
      }
      open={show}
    >
      <StyledTitleButton
        variant="text"
        onClick={() => {
          setShow(!show);
        }}
      >
        <StyledContainer>
          <StyledText>{languageName}</StyledText>
          <UnfoldMoreIcon />
        </StyledContainer>
      </StyledTitleButton>
    </StyledTooltip>
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
  fontSize: "16px",
  fontWeight: "normal",
});
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    backgroundColor: "white",
    boxShadow: theme.shadows[4],
    color: "#272930",
    zIndex: "1500",
  },
}));

const ListItem = styled(Button)({
  display: "block",
  width: "100%",
  color: "#262626",
  fontWeight: "normal",
  fontSize: "16px",
});

const StyledTitleButton = styled(Button)({
  color: "#262626",
  fontWeight: "normal",
  fontSize: "16px",
});
