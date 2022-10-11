import { useTranslation } from "next-i18next";
import styled from "styled-components";
import Alternatives from "./Alternatives";
import GithubSvg from "./GithubIcon";
import Logo from "./Logo";

const Title = () => {
  const { t } = useTranslation();
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
            {t("Check GitHub")}
          </a>
        </StyledGithub>
        <StyledLogo>
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
