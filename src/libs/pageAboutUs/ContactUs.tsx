import styled from "styled-components";

const ContactUs = () => {
  return (
    <>
      <StyledTitle>Do Contact US if you</StyledTitle>
      <ul>
        <StyledLi>
          Want to know more about AFFiNE as a collaborative knowledge base;
        </StyledLi>
        <StyledLi>Want to join us;</StyledLi>
        <StyledLi>Want to build your own block-based applications.</StyledLi>
      </ul>
      <StyledContact>
        <p>
          General contact:&nbsp;
          <StyledLink href="mailto:contact@toeverything.info">
            contact@toeverything.info
          </StyledLink>
        </p>
        <p>
          Send Resume to:&nbsp;
          <StyledLink href="mailto:hr@toeverything.info">
            hr@toeverything.info
          </StyledLink>
        </p>
      </StyledContact>
    </>
  );
};

export default ContactUs;

const StyledTitle = styled.div({
  fontSize: "24px",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginBottom: "16px",
  paddingBottom: "8px",
});

const StyledLi = styled.li({
  lineHeight: "1.8",
});

const StyledContact = styled.div({
  marginBottom: "16px",
});
const StyledLink = styled.a({
  color: "#0969DA",
});
