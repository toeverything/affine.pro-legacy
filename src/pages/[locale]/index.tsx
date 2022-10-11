import { getStaticPaths, makeStaticProps } from "@/libs/i18n/getStatic";
import type { NextPage } from "next";
import styled from "styled-components";
import { Page } from "../../components/Layout/Page";
import Content from "../../libs/pagesHome/Content";
import Title from "../../libs/pagesHome/Title";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
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
