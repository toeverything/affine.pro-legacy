import styled from "styled-components";
const TeamMember = () => {
  return (
    <>
      {" "}
      <StyledTitle>Team Member</StyledTitle>
      <StyledTitle2>Founder & Co-founders</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/HeJiachen-PM"
          rel="noreferrer"
        >
          Jiachen He
        </StyledLink>
        {""} | Founder & Product Owner
      </StyledContent>
      <StyledDes>The PM and CEO guy.</StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/tzhangchi"
          rel="noreferrer"
        >
          Chi Zhang
        </StyledLink>
        {""} | Co-founder & Head of Engineering
      </StyledContent>
      <StyledDes>He builds AFFiNE.</StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/xiangwang1223"
          rel="noreferrer"
        >
          Xiang Wang
        </StyledLink>
        {""} | Co-founder & Head of Machine Learning Algorithms
      </StyledContent>
      <StyledDes>
        Making everyone&apos;s life easier by embracing the power of AI.
      </StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Yipei-Operation"
          rel="noreferrer"
        >
          Yipei Wei
        </StyledLink>
        {""} | Co-founder & Head of Community Support
      </StyledContent>
      <StyledDes>
        She talks to people so that AFFiNE is something people want.
      </StyledDes>
      <StyledTitle2>Architectural Developers</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/doodlewind"
          rel="noreferrer"
        >
          Yifeng Wang
        </StyledLink>
        {""} | Head of Graphics Architecture
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/zuoxiaodong0815"
          rel="noreferrer"
        >
          Xiaodong Zuo
        </StyledLink>
        {""} | Head of Software Architecture
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/darkskygit"
          rel="noreferrer"
        >
          Wenhao Tan
        </StyledLink>
        {""} | Director of Performance and Security
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/alt1o"
          rel="noreferrer"
        >
          Xinglong Wang
        </StyledLink>
        {""} | Head of Collaboration and Creativity
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/SaikaSakura"
          rel="noreferrer"
        >
          Mingliang Wang
        </StyledLink>
        {""} | Head of Structural Editing
      </StyledContent>
    </>
  );
};

export default TeamMember;

const StyledTitle = styled.div({
  fontSize: "24px",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginBottom: "16px",
  paddingBottom: "8px",
});
const StyledContent = styled.div({
  marginBottom: "16px",
});
const StyledLink = styled.a({
  color: "#0969DA",
});

const StyledDes = styled.div({
  color: "rgb(170,170,170)",
  marginBottom: "16px",
});

const StyledTitle2 = styled.div({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "16px 0px",
});
