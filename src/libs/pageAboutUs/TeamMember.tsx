import styled from "@emotion/styled";
const TeamMember = () => {
  return (
    <>
      <StyledTitle>Team Member</StyledTitle>
      <StyledTitle2>Founder & Co-Founders</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/HeJiachen-PM"
          rel="noreferrer"
        >
          Jiachen He
        </StyledLink>
        &nbsp;| Founder & Product Owner
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
        &nbsp;| Co-founder & Head of Engineering
      </StyledContent>
      <StyledDes>He builds AFFiNE.</StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Yipei-Operation"
          rel="noreferrer"
        >
          Yipei Wei
        </StyledLink>
        &nbsp;| Co-founder & Head of Community Support
      </StyledContent>
      <StyledDes>
        She talks to people so that AFFiNE is something people want.
      </StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/doodlewind"
          rel="noreferrer"
        >
          Yifeng Wang
        </StyledLink>
        &nbsp;| General Architecture Lead
      </StyledContent>
      <StyledDes>Creator of Blocksuite.</StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/xiangwang1223"
          rel="noreferrer"
        >
          Xiang Wang
        </StyledLink>
        &nbsp;| Co-founder & Head of Machine Learning Algorithms
      </StyledContent>
      <StyledDes>
        Making everyone&apos;s life easier by embracing the power of AI.
      </StyledDes>
      <StyledTitle2>Architectural Developers</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/colelawrence"
          rel="noreferrer"
        >
          Cole Lawrence
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/zuoxiaodong0815"
          rel="noreferrer"
        >
          Xiaodong Zuo
        </StyledLink>
        &nbsp;| Head of Software Architecture
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/darkskygit"
          rel="noreferrer"
        >
          Wenhao Tan
        </StyledLink>
        &nbsp;| Director of Performance and Security
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/alt1o"
          rel="noreferrer"
        >
          Xinglong Wang
        </StyledLink>
        &nbsp;| Head of Collaboration and Creativity
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/SaikaSakura"
          rel="noreferrer"
        >
          Mingliang Wang
        </StyledLink>
        &nbsp;| Head of Structural Editing
      </StyledContent>
      <StyledTitle2>Engineering Team</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/linonetwo"
          rel="noreferrer"
        >
          Dongwu Lin
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/lawvs"
          rel="noreferrer"
        >
          Cankun You
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/QiSHaoXuan"
          rel="noreferrer"
        >
          Shaoxuan Qi
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://shockwave.me"
          rel="noreferrer"
        >
          Sicong Shao
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/DiamondThree"
          rel="noreferrer"
        >
          Haoxing Shang
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Himself65"
          rel="noreferrer"
        >
          Zeyu Yang
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledTitle2>Community Team</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/ShortCipher5"
          rel="noreferrer"
        >
          Christopher Smolak
        </StyledLink>
        &nbsp;| Operations Specialist
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/fyZheng07"
          rel="noreferrer"
        >
          Fangyuan Zheng
        </StyledLink>
        &nbsp;| Community Support Operator
      </StyledContent>
      <StyledTitle2>Design Team</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://craft.do/s/jxEgkth6QpmxPs"
          rel="noreferrer"
        >
          Qiao Hou
        </StyledLink>
        &nbsp;| UX Researcher
      </StyledContent>
      <StyledContent>
        <StyledLink target="_blank" href="#" rel="noreferrer">
          Haifang Li
        </StyledLink>
        &nbsp;| Director UI/UX
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
