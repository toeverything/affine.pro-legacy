import styled from "styled-components";
import { LinkText } from "../LinkText";

export const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          <ContactUsContainer>
            <LinkText
              href="https://github.com/toeverything/AFFiNE/"
              title="Github"
            />
            <LinkText href="https://www.reddit.com/r/Affine/" title="Reddit" />
            <LinkText
              href="https://twitter.com/AffineOfficial"
              title="Twitter"
            />
            <LinkText href="https://t.me/affineworkos" title="Telegram" />
            <LinkText href="https://discord.gg/yz6tGVsf5p" title="Discord" />
          </ContactUsContainer>
          <div>
            <span>AFFiNE is an</span>
            <OpensourceTag>&nbsp;#OpenSource&nbsp;</OpensourceTag>
            <span>company</span>
          </div>
          <Copyright>Copyright © 2022 AFFiNE.</Copyright>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div({
  width: "100%",
  borderTop: "1px solid #e4e7ec",
  backgroundColor: "#fcfcfd",
  textAlign: "center",
});

const Content = styled.div({
  padding: "96px 32px",
  margin: "0 auto",
  maxWidth: "1280px",
});

const ContactUsContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
});

const OpensourceTag = styled.span({
  color: "rgba(80, 133, 246, 0.8)",
});

const Copyright = styled.div({
  marginTop: "20px",
});
