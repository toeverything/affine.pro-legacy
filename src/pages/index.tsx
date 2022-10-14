import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Page } from "../components/Layout/Page";
import Content from "../libs/pagesHome/Content";
import Title from "../libs/pagesHome/Title";
const Home: NextPage = () => {
  return (
    <Page>
      <StyledMain>
        <Title />
        <Content />
      </StyledMain>
    </Page>
  );
};

export default Home;

const StyledMain = styled.div({
  width: "100%",
  boxSizing: "border-box",
  display: "block",
  margin: "16px auto",
  maxWidth: "1440px",
  paddingLeft: "24px",
  paddingRight: "24px",
});
