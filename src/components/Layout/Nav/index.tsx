import { useMatchMediaMaxWidth1000 } from "@/libs/common/matchMedia";
import styled from "@emotion/styled";
import NextLink from "next/link";
import AFFiNETextLogo from "./affine-text-logo.png";
import githubSvg from "./github.svg";
import { NormalLeftHeader, NormalRightHeader } from "./NormalHeader";
import { SmallHeader } from "./SmallHeader";
export const HeaderNav = () => {
  const matchesMaxWidth1000 = useMatchMediaMaxWidth1000();
  return (
    <>
      <Container>
        <Header>
          <HeaderLeft>
            <NextLink href={"/"}>
              <StyledImage src={AFFiNETextLogo.src} alt="affine" />
            </NextLink>
            {matchesMaxWidth1000 ? null : <NormalLeftHeader />}
          </HeaderLeft>
          <HeaderRight>
            <a
              href="https://github.com/toeverything/AFFiNE"
              target="_blank"
              rel="noreferrer"
            >
              <StyledImage src={githubSvg.src} alt="Github" />
            </a>
            {matchesMaxWidth1000 ? <SmallHeader /> : <NormalRightHeader />}
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
  padding: "0 30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const HeaderLeft = styled.div({
  display: "flex",
  flexDirection: "row",
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
