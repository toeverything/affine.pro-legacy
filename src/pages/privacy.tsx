import styled from "@emotion/styled";
import { Page } from "../components/Layout/Page";
import PrivacyPolicy from "../libs/pagePrivacy/PrivacyPolicy";
const aboutUs = () => {
  return (
    <Page>
      <StyledMain>
        <PrivacyPolicy />
      </StyledMain>
    </Page>
  );
};

export default aboutUs;

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
