import type { MouseEvent } from "react";
import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Alternatives from "./Alternatives";
import GithubSvg from "./GithubIcon";
import Logo from "./Logo";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import makeStyles from "@material-ui/styles/makeStyles";

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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          onMouseLeave: handleClose,
          onMouseEnter: handleOpen,
          style: { pointerEvents: "auto" },
        }}
        autoFocus={false}
        PopoverClasses={{
          root: styles.popOverRoot,
        }}
      >
        <MenuItem onClick={handleClose}>
          <StyledLink
            href="https://livedemo.affine.pro/"
            target="_blank"
            rel="noreferrer"
          >
            AFFINE Pre-Alpha
          </StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ cursor: "auto" }}>
          <div>
            <StyledLink
              href="https://pathfinder.affine.pro/"
              target="_blank"
              rel="noreferrer"
            >
              AFFINE Alpha
              <StyledBadge>New</StyledBadge>
            </StyledLink>

            <StyledSubLink
              href="https://affine.pro/content/blog/affine-alpha-is-coming/index"
              target="_blank"
              rel="noreferrer"
            >
              Why a new Version?
            </StyledSubLink>
          </div>
        </MenuItem>
      </Menu>
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
const StyledBadge = styled.div({
  backgroundColor: "#ff1744",
  color: "#fff",
  transform: "translate(0,-50%)",
  fontSize: "10px",
  padding: "0 4px",
  height: "16px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px 4px 4px 0",
});
const StyledLink = styled.a({
  color: "#000",
  fontSize: "18px",
  fontWeight: "bold",
});
const StyledSubLink = styled.a({
  color: "#096bde",
  fontSize: "14px",
  marginLeft: "15px",
});
