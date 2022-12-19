import styled from "@emotion/styled";
import { contactUsList } from "./config";
import { ContactUsIconButton } from "./ContactUsIconButton";
import { JoinOurCommunityButton } from "./JoinOurCommunityButton";
export const Footer = () => {
  return (
    <>
      <Container>
        <JoinOurCommunityButton />
        <Content>
          <ContactUsContainer>
            {contactUsList.map(({ icon, title, href }) => {
              return (
                <ContactUsIconButton
                  key={title}
                  icon={icon}
                  title={title}
                  href={href}
                />
              );
            })}
          </ContactUsContainer>
          <div>
            <span>AFFiNE is an</span>
            <OpensourceTag>&nbsp;#OpenSource&nbsp;</OpensourceTag>
            <span>software, built with&nbsp;</span>
            <StyledLink
              href="https://block-suite.com"
              target="_blank"
              rel="noreferrer"
            >
              BlockSuite
            </StyledLink>
          </div>
          <Copyright>Copyright © 2022 Toeverything</Copyright>
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
  padding: "64px 32px",
  margin: "0 auto",
  maxWidth: "1280px",
});

const ContactUsContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
  flexWrap: "wrap",
});

const OpensourceTag = styled.span({
  color: "rgba(80, 133, 246, 0.8)",
});

const Copyright = styled.div({
  marginTop: "20px",
});

const StyledLink = styled("a")({
  fontWeight: "900",
  color: "#000",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});
