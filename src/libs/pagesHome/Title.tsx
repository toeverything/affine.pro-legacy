import styled from "styled-components";
import GithubSvg from "./GithubIcon";
import Logo from "./Logo";
const Title = () => {
  return (
    <>
      <StyledMain>
        <StyledTitle>
          <StyledH1>Open Source,</StyledH1>
          <StyledH1>Privacy First</StyledH1>
        </StyledTitle>
        <StyledTitle>
          <StyledBlue>Notion Alternative</StyledBlue>
        </StyledTitle>

        <StyledDes>
          Affine is the next-generation collaborative knowledge base for
          professionals.
        </StyledDes>
      </StyledMain>
      <StyledButton>
        <StyledGithub>
          <a
            href="https://github.com/toeverything/AFFiNE"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg fill="#fff" stroke="#fff" width="30" height="30" />
            {""} &nbsp;Check GitHub
          </a>
        </StyledGithub>
        <StyledLogo>
          <a
            href="https://livedemo.affine.pro/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo fill="#fff" stroke="#fff" width="30" height="30" />
            {""} &nbsp;Try it Online
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
const StyledH1 = styled.div({
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "96px",
  fontWeight: 900,
  marginRight: "16px",
});
const StyledBlue = styled.div({
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "96px",
  fontWeight: 900,
  marginRight: "9px",
  marginTop: "16px",
  color: "#06449d",
});
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
const StyledButton = styled.div({
  marginTop: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "96px",
});
const StyledGithub = styled.button({
  borderRadius: "8px",
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "30px",
  lineHeight: 1,
  fontWeight: "bolder",
  color: "#fff",
  backgroundColor: "#096bde",
  cursor: "pointer",
  border: "none",
  margin: "auto 16px",
  padding: "16px 28px",
});
const StyledLogo = styled.button({
  borderRadius: "8px",
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "30px",
  lineHeight: 1,
  fontWeight: "bolder",
  color: "#fff",
  backgroundColor: "#000",
  cursor: "pointer",
  border: "none",
  margin: "auto 48px",
  padding: "16px 28px",
});
