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
      <StyledPrivacyImage>
        <Image
          src={CollaborationImage}
          alt="AFFiNE Privacy-first, and collaborative"
        />
      </StyledPrivacyImage>
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
const StyledImage = styled.div({
  maxWidth: "1200px",
  width: "100%",
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  marginBottom: "96px",
  marginTop: "200px",
  transition: "all 0.5s",
  transform: "scale(0.98)",
  boxShadow: "2px 2px 40px #0002",
  ":hover": {
    transform: "scale(1)",
    boxShadow: "2px 2px 40px #0004",
  },
});
const StyledLoge = styled.div({
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
const StyledH1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: auto;
  margin-top: 96px;
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 36px;
  }
`;
const StyledH2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 26px;
  }
`;
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
const StyledKeepUpdate = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 64px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const StyledKeepUpdateContent = styled.div`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.25;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
const StyledMessage = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 1.25;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
const StyledPrivacyImage = styled.div({
  maxWidth: "1400px",
  width: "100%",
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  transition: "all 0.5s",
  transform: "scale(0.98)",
  ":hover": {
    transform: "scale(1)",
  },
});
