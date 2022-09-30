import Image from "next/image";
import styled from "styled-components";
import GithubSvg from "./GithubIcon";
import CollaborationImage from "./images/collaboration.png";
import LogoImage from "./images/logo.png";
import PageImage from "./images/page.png";
import Tabs from "./Tabs";
const Content = () => {
  return (
    <div>
      <StyledImage>
        <Image src={PageImage} alt="AFFiNE main ui" />
      </StyledImage>

      <StyledText>
        <StyledH1>
          It&apos;s not just a collection of Docs, whiteboard, and tables.
        </StyledH1>
        <StyledContent>Transform any building block as you like.</StyledContent>
        <StyledContent>
          Say goodbye to redundancy. Store your data once, and keep your data as
          you like it.
        </StyledContent>
      </StyledText>
      <Tabs />
      <StyledText>
        <StyledH2>
          Privacy-first, and collaborative. No compromises whatsoever.
        </StyledH2>
        <StyledContent>
          We don&apos;t like being locked-in, and neither should you. Privacy is
          at the foundation of everything we do, but it should not limit us
          that&apos;s why there are no compromises.
        </StyledContent>
        <StyledContent>
          Your data is yours;it is always locally stored and secured - available
          to you always. While still being able to enjoy collaboration features
          such as real-time editing and sharing with others, without any cloud
          setup.
        </StyledContent>
      </StyledText>
      <StyledImage>
        <Image
          src={CollaborationImage}
          alt="AFFiNE Privacy-first, and collaborative"
        />
      </StyledImage>
      <StyledLoge>
        <Image src={LogoImage} alt="AFFiNE Logo" />
      </StyledLoge>
      <StyledFooter>
        <StyledMessage>Build for an open and semantic future</StyledMessage>
        <StyledKeepUpdate>
          <StyledKeepUpdateContent>Keep Updated on</StyledKeepUpdateContent>
          <StyledGithub>
            <a
              href="https://github.com/toeverything/AFFiNE"
              target="_blank"
              rel="noreferrer"
            >
              <GithubSvg fill="#fff" stroke="#fff" width="22" height="22" />
              {""}&nbsp;GitHub
            </a>
          </StyledGithub>
        </StyledKeepUpdate>
      </StyledFooter>
    </div>
  );
};

export default Content;

const StyledGithub = styled.button({
  borderRadius: "8px",
  display: "inline-flex",
  flexWrap: "wrap",
  textAlign: "center",
  fontSize: "24px",
  lineHeight: 1,
  fontWeight: "bolder",
  color: "#fff",
  backgroundColor: "#096bde",
  cursor: "pointer",
  border: "none",
  margin: "auto 16px",
  padding: "12px 24px",
});
const StyledImage = styled.image({
  maxWidth: "1200px",
  width: "100%",
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: "96px",
  transition: "all 0.5s",
  transform: "scale(0.98)",
  boxShadow: "2px 2px 40px #0002",
  ":hover": {
    transform: "scale(1)",
    boxShadow: "2px 2px 40px #0004",
  },
});
const StyledLoge = styled.image({
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  marginTop: "20vh",
});
const StyledText = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "128px auto",
});
const StyledH1 = styled.h1({
  fontSize: "48px",
  fontWeight: "bold",
  margin: "auto",
  marginTop: "96px",
  marginBottom: "16px",
});
const StyledH2 = styled.h2({
  fontSize: "32px",
  fontWeight: "bold",
  margin: "auto",
  marginBottom: "16px",
});
const StyledContent = styled.p({
  fontSize: "20px",
  lineHeight: 1.5,
  margin: "0",
  textAlign: "center",
});
const StyledFooter = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "auto",
  marginTop: "24px",
});
const StyledKeepUpdate = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  margin: " auto",
  marginTop: "24px",
  marginBottom: "64px",
});
const StyledKeepUpdateContent = styled.div({
  margin: 0,
  fontSize: " 32px",
  fontWeight: "500",
  lineHeight: 1.25,
});
const StyledMessage = styled.p({
  margin: 0,
  fontSize: " 24px",
  lineHeight: 1.25,
});
