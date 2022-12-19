import { Button, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

export const JoinOurCommunityButton = () => {
  const { t } = useTranslation();
  return (
    <a href="https://community.affine.pro" target="_blank" rel="noreferrer">
      <StyledButton>
        <div>
          <StyledText>{t("Join")}</StyledText>
        </div>
      </StyledButton>
    </a>
  );
};

const StyledButton = styled(Button)({
  marginTop: "64px",
});

const StyledText = styled("div")({
  color: "#262626",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  lineHeight: "1.25",
  fontWeight: "600",
  textTransform: "none",

  "&:hover": {
    color: "#565656",
  },
});
