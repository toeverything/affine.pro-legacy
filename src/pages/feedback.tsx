import styled from "@emotion/styled";
import { Page } from "../components/Layout/Page";
import GithubFeedback from "../libs/pagesFeedback/GithubFeedback";
import OtherFeedback from "../libs/pagesFeedback/OtherFeedback";
import Title from "../libs/pagesFeedback/Title";
const feedback = () => {
  return (
    <Page>
      <StyledMain>
        <Title />
        <GithubFeedback />
        <OtherFeedback />
      </StyledMain>
    </Page>
  );
};

export default feedback;

const StyledMain = styled.div({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "16px auto",
  maxWidth: "720px",
  paddingLeft: "24px",
  paddingRight: "24px",
});
