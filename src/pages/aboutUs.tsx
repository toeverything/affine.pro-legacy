import Image from "next/image";
import styled from "styled-components";
import keepUpdate from "../../public/content/aboutUs/keeupdate.png";
import { Page } from "../components/Layout/Page";
const aboutUs = () => {
  return (
    <Page>
      <Header>
        <HeaderH1>To Shape, not to adapt.</HeaderH1>
        <HeaderH3>
          Deliver Building Blocks for Future SaaS Applications.
        </HeaderH3>
      </Header>
      <Main>
        <ComponentH2>Do Contact US if you</ComponentH2>
        <ul>
          <ComponentLi>
            Want to know more about AFFiNE as a collaborative knowledge base;
          </ComponentLi>
          <ComponentLi>Want to join us;</ComponentLi>
          <ComponentLi>
            Want to build your own block-based applications.
          </ComponentLi>
        </ul>
        <ComponentText>
          <ComponentP>
            General contact:
            <ComponentLink href="mailto:contact@toeverything.info">
              contact@toeverything.info
            </ComponentLink>
          </ComponentP>
          <ComponentP>
            Send Resume to:
            <ComponentLink href="mailto:hr@toeverything.info">
              hr@toeverything.info
            </ComponentLink>
          </ComponentP>
        </ComponentText>

        <ComponentH2>Team Member</ComponentH2>

        <ComponentH3>Founder & Co-founders</ComponentH3>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/HeJiachen-PM"
            rel="noreferrer"
          >
            Jiachen He
          </ComponentLink>
          {""} | Founder & Product Owner
        </ComponentP>
        <ComponentDes>The PM and CEO guy.</ComponentDes>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/tzhangchi"
            rel="noreferrer"
          >
            Chi Zhang
          </ComponentLink>
          {""} | Co-founder & Head of Engineering
        </ComponentP>
        <ComponentDes>He builds AFFiNE.</ComponentDes>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/xiangwang1223"
            rel="noreferrer"
          >
            Xiang Wang
          </ComponentLink>
          {""} | Co-founder & Head of Machine Learning Algorithms
        </ComponentP>
        <ComponentDes>
          Making everyone&apos;s life easier by embracing the power of AI.
        </ComponentDes>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/Yipei-Operation"
            rel="noreferrer"
          >
            Yipei Wei
          </ComponentLink>
          {""} | Co-founder & Head of Community Support
        </ComponentP>
        <ComponentDes>
          She talks to people so that AFFiNE is something people want.
        </ComponentDes>
        <ComponentH3>Architectural Developers</ComponentH3>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/doodlewind"
            rel="noreferrer"
          >
            Yifeng Wang
          </ComponentLink>
          {""} | Head of Graphics Architecture
        </ComponentP>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/zuoxiaodong0815"
            rel="noreferrer"
          >
            Xiaodong Zuo
          </ComponentLink>
          {""} | Head of Software Architecture
        </ComponentP>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/darkskygit"
            rel="noreferrer"
          >
            Wenhao Tan
          </ComponentLink>
          {""} | Director of Performance and Security
        </ComponentP>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/alt1o"
            rel="noreferrer"
          >
            Xinglong Wang
          </ComponentLink>
          {""} | Head of Collaboration and Creativity
        </ComponentP>
        <ComponentP>
          <ComponentLink
            target="_blank"
            href="https://github.com/SaikaSakura"
            rel="noreferrer"
          >
            Mingliang Wang
          </ComponentLink>
          {""} | Head of Structural Editing
        </ComponentP>
        <Philosophy>
          <ComponentH2>The Philosophy of AFFiNE</ComponentH2>
          <ComponentP>
            People need better building blocks for future applications. And it
            should not be so hard to develop collaborative, transferable, smart
            spreadsheets or block editors.
          </ComponentP>
          <ComponentP>
            Timothy Berners-Lee once taught us about the idea of the semantic
            web, where all the data can be interpreted in any form while the
            &quot;truth&quot; is kept. This gives our best image of an ideal
            knowledge base by far, that sorting of information, planning of
            project and goals as well as creating of knowledge can be all
            together.
          </ComponentP>
          <ComponentP>
            We have witnessed waves of paradigm shift so many times. At first,
            everything was noted on office-like apps or DSL like LaTeX, then we
            found todo-list apps and WYSIWYG markdown editors better for writing
            and planning.
          </ComponentP>
          <ComponentP>
            Finally, here comes Notion and Miro, who take advantage of the idea
            of blocks to further liberate our creativity. It is all perfect...
            without waste operations and redundant information. And, we insist
            that privacy first should always be given by default. That&apos;s
            why we are making AFFiNE.
          </ComponentP>
        </Philosophy>

        <div>
          <Image
            src={keepUpdate}
            alt="AFFiNE keep update"
            onClick={() =>
              window.open("https://github.com/toeverything/AFFiNE")
            }
            width="720px"
            height="400px"
          />
        </div>
      </Main>
    </Page>
  );
};

export default aboutUs;

const Main = styled.div({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  margin: "1em auto",
  maxWidth: "720px",
  minWidth: "500px",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginTop: "1em",
});
const Header = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "2em auto",
  fontWeight: "bold",
  textAlign: "center",
});
const HeaderH1 = styled.div({
  fontSize: "64px",
  fontWeight: "900",
  marginRight: "0.25em",
});
const HeaderH3 = styled.div({
  fontSize: "24px",
  fontWeight: "400",
  margin: "3vh auto",
  color: "#888",
});
const ComponentH2 = styled.div({
  fontSize: "1.5em",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginBottom: "16px",
  paddingBottom: "0.3em",
});
const ComponentH3 = styled.div({
  fontSize: "1.25em",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "16px 0px",
});
const ComponentLi = styled.li({
  lineHeight: "1.8",
});
const ComponentP = styled.div({
  marginBottom: "16px",
});
const ComponentText = styled.div({
  marginBottom: "2em",
});
const ComponentLink = styled.a({
  color: "#0969DA",
});
const ComponentDes = styled.div({
  color: "rgb(170,170,170)",
  marginBottom: "16px",
});
const Philosophy = styled.div({
  marginTop: "24px",
});
