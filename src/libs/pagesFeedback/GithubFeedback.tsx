import styled from "@emotion/styled";
const GithubFeedback = () => {
  return (
    <>
      <StyledDiv>
        <StyledTitle>Let us know on GitHub</StyledTitle>
        <StyledContent>
          GitHub is a great way for us to see your feedback, and it also allows
          you to see our progress. Furthermore, as an open-source project other
          developers who are interested in contributing can readily get involved
          and see all the ideas and reports from our userbase. So, if you have
          any feedback, please feel free to open an issue on our GitHub page.
        </StyledContent>
        <StyledContent>
          To make things easier we have created templates for the different
          types of feedback we may expect to receive. Please use the appropriate
          template for your feedback. You can open a new issue, and see all the
          templates here:&nbsp;
          <StyledLink
            href="https://github.com/toeverything/AFFiNE/issues/new/choose"
            target="_blank"
            rel="noreferrer"
          >
            Create New Issue
          </StyledLink>
        </StyledContent>
      </StyledDiv>
    </>
  );
};

export default GithubFeedback;
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
