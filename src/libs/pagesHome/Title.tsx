import styled from "@emotion/styled";
import makeStyles from "@material-ui/styles/makeStyles";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Alternatives from "./Alternatives";
import GithubSvg from "./GithubIcon";
import LiveDemoLink from "./LiveDemoLink";
import Logo from "./Logo";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});

const Title = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const anchorElRef = useRef<HTMLButtonElement>(null);
  const styles = useStyles();
  const open = Boolean(anchorEl);
  const isHover = useRef(false);
  const handleClose = () => {
    isHover.current = false;
    setTimeout(() => {
      if (!isHover.current) {
        setAnchorEl(null);
      }
    }, 50);
  };
  const handleOpen = () => {
    isHover.current = true;
    setAnchorEl(anchorElRef.current);
  };

  return (
    <>
      <StyledMain>
        <StyledTitle>
          <StyledH1>{t("Open Source")},</StyledH1>
          <StyledH1>{t("Privacy First")}</StyledH1>
        </StyledTitle>
        <Alternatives />
        <StyledDes>{t("description1.part1")}</StyledDes>
      </StyledMain>
      <StyledButton>
        <StyledGithub>
          <a
            href="https://github.com/toeverything/AFFiNE"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg fill="#fff" stroke="#fff" width="20" height="20" />
            &nbsp;{t("Check GitHub")}
          </a>
        </StyledGithub>
        <StyledLogo
          ref={anchorElRef}
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <a
            href="https://livedemo.affine.pro/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo fill="#fff" stroke="#fff" width="20" height="20" />
            &nbsp;{t("Try it Online")}
          </a>
        </StyledLogo>
      </StyledButton>

      <LiveDemoLink
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default Title;

const StyledMain = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "15vh",
  lineHeight: 1.5,
});
const StyledTitle = styled.div({
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  justifyContent: "center",
});
const StyledH1 = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 96px;
  font-weight: 900;
  margin-right: 16px;
  @media (max-width: 1300px) {
    font-size: 80px;
  }
  @media (max-width: 1100px) {
    font-size: 64px;
  }
  @media (max-width: 900px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;
const StyledDes = styled.div({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "16px auto",
  textAlign: "center",
  fontWeight: 400,
  color: "#888",
  fontSize: "30px",
});

const StyledButton = styled.div`
  margin-top: 16px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 96px;
  font-size: 30px;
  @media (max-width: 1300px) {
    font-size: 24px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
const StyledGithub = styled.button({
  borderRadius: "8px",
  display: "flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "inherit",
  lineHeight: 1,
  fontWeight: "bolder",
  color: "#fff",
  backgroundColor: "#096bde",
  cursor: "pointer",
  border: "none",
  margin: "auto 24px",
  padding: "16px 28px",
});
const StyledLogo = styled.button({
  borderRadius: "8px",
  display: "flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "inherit",
  lineHeight: 1,
  fontWeight: "bolder",
  color: "#fff",
  backgroundColor: "#000",
  cursor: "pointer",
  border: "none",
  margin: "auto 24px",
  padding: "16px 28px",
});
