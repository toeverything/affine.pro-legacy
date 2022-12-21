import styled from "@emotion/styled";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { contactUsList } from "./config";
import { ContactUsIconButton } from "./ContactUsIconButton";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <JoinOur>{t("Join")}</JoinOur>
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
          <Privacy>
            <NextLink href="terms">Terms</NextLink>&nbsp;|&nbsp;
            <NextLink href="privacy">Privacy</NextLink>
          </Privacy>
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
const Privacy = styled.div({
  marginTop: "10px",
  fontSize: "12px",
  a: {
    cursor: "pointer",
    ":hover": {
      color: "#5085F6CC",
      cursor: "pointer",
    },
  },
});
const JoinOur = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "64px",
  fontSize: "36px",
  lineHeight: "1.25",
  fontWeight: "600",
});
const StyledLink = styled("a")({
  fontWeight: "900",
  color: "#000",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});
