import styled from "styled-components";
import { contactUsList } from "./config";
import { ContactUsIconButton } from "./ContactUsIconButton";

export const Footer = () => {
  return (
    <>
      <Container>
        <JoinOur>Join Our Community</JoinOur>
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
