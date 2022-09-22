import NextLink from "next/link";
import styled from "styled-components";
import { LinkText } from "../LinkText";
import AFFiNETextLogo from "./affine-text-logo.png";
import githubSvg from "./github.svg";

export const HeaderNav = () => {
  return (
    <>
      <Container>
        <Header>
          <NextLink href={"/"}>
            <StyledImage src={AFFiNETextLogo.src} alt="affine" />
          </NextLink>
          <HeaderRight>
            <a
              href="https://github.com/toeverything/AFFiNE"
              target="_blank"
              rel="noreferrer"
            >
              <StyledImage src={githubSvg.src} alt="Github" />
            </a>
            <LinkText href="https://affine.pro/aboutus" title="About Us" />
            <LinkText href="/blog" title="Blog" />
            <LinkText href="https://docs.affine.pro/" title="Docs" />
            <LinkText href="https://feedback.affine.pro/" title="Feedback" />
            <LinkText
              href="https://livedemo.affine.pro/"
              title="Try it Online"
            />
          </HeaderRight>
        </Header>
      </Container>
      <Placeholder />
    </>
  );
};

const Container = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  paddingTop: "1em",
  paddingBottom: "1em",
  backgroundColor: "#fff",
  zIndex: 1500,
  margin: "auto",
  marginTop: "0 !important",
  padding: "12px 0",
  borderBottom: "1px solid #e4e7ec",
});

const Header = styled.div({
  maxWidth: "1280px",
  margin: "0 auto",
  height: "48px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const HeaderRight = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const StyledImage = styled.img({
  height: "24px",
  marginRight: "16px",
  cursor: "pointer",
});

const Placeholder = styled.div({
  height: "73px",
});
