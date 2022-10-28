import styled from "@emotion/styled";

const OtherFeedback = () => {
  return (
    <>
      <StyledDiv>
        <StyledTitle>Other ways to get in touch</StyledTitle>
        <StyledContent>
          While we recommend using GitHub for feedback, we also have other ways
          for you to get in touch with us.
        </StyledContent>
        <StyledContent>
          We&apos;ve setup two contact forms for you to use to help provide us
          feedback:
          <ul>
            <li>
              <StyledLink
                href="https://marketing.affine.pro/bug"
                target="_blank"
              >
                Bug Report Form
              </StyledLink>
              &nbsp;- if something isn&apos;t working as you expected.
            </li>
            <br />
            <li>
              <StyledLink
                href="https://marketing.affine.pro/feature"
                target="_blank"
              >
                Feature Request Form
              </StyledLink>
              &nbsp;- if you have an idea for a new feature, or for improving an
              exisitng one.
            </li>
          </ul>
        </StyledContent>
        <StyledContent>
          If you have any questions, please feel free to reach out to our team
          and/or contact us via email, you&apos;ll find these details over on
          our&nbsp;
          <StyledLink href="/aboutUs">about us</StyledLink>
          &nbsp;page.
        </StyledContent>
      </StyledDiv>
    </>
  );
};

export default OtherFeedback;
const StyledDiv = styled.div({
  marginTop: "24px",
});
const StyledTitle = styled.div({
  fontSize: "24px",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginBottom: "16px",
  paddingBottom: "8px",
});
const StyledContent = styled.div({
  marginBottom: "16px",
  lineHeight: "1.5",
});
const StyledLink = styled.a({
  color: "#0969DA",
});
