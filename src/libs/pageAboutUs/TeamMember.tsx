import styled from "@emotion/styled";
const TeamMember = () => {
  return (
    <>
      <StyledTitle>Team Member</StyledTitle>
      <StyledTitle2>Founder &amp; Co-Founders</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/HeJiachen-PM"
          rel="noreferrer"
        >
          Jiachen He
        </StyledLink>
        &nbsp;| Founder &amp; Product Owner
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
        &nbsp;| Co-founder &amp; Head of Engineering
      </StyledContent>
      <StyledDes>He builds AFFiNE with great engineers.</StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Yipei-Operation"
          rel="noreferrer"
        >
          Yipei Wei
        </StyledLink>
        &nbsp;| Co-founder &amp; Head of Community Support
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
        &nbsp;| Co-founder &amp; Chief Architect
      </StyledContent>
      <StyledDes>
        He ensures AFFiNE is built with the proper technology.
      </StyledDes>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/xiangwang1223"
          rel="noreferrer"
        >
          Xiang Wang
        </StyledLink>
        &nbsp;| Chief AI Scientist
      </StyledContent>
      <StyledDes>
        Making everyone&apos;s life easier by embracing the power of AI.
      </StyledDes>
      <StyledTitle2>Architectural Developers</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/zuoxiaodong0815"
          rel="noreferrer"
        >
          Xiaodong Zuo
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/darkskygit"
          rel="noreferrer"
        >
          Wenhao Tan
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink target="_blank" href="https://mirone.me/" rel="noreferrer">
          Xiao Pengfei
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://pengx17.vercel.app/"
          rel="noreferrer"
        >
          Xiao Peng
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/alt1o"
          rel="noreferrer"
        >
          Xinglong Wang
        </StyledLink>
        &nbsp;| Architecture Engineer
      </StyledContent>
      <StyledTitle2>Engineering Team</StyledTitle2>
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
          href="https://github.com/thorseraq"
          rel="noreferrer"
        >
          Xiaotian Ma
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/DiamondThree"
          rel="noreferrer"
        >
          Haoxin Shang
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Himself65"
          rel="noreferrer"
        >
          Alex Yang
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/JimmFly"
          rel="noreferrer"
        >
          Yang Jinfei
        </StyledLink>
        &nbsp;| Full-stack Engineer
      </StyledContent>
      <StyledTitle2>Community Team</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://shortcipher.me"
          rel="noreferrer"
        >
          Christopher Smolak
        </StyledLink>
        &nbsp;| Operations Specialist
      </StyledContent>
      <StyledTitle2>Product Team</StyledTitle2>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://craft.do/s/jxEgkth6QpmxPs"
          rel="noreferrer"
        >
          Qiao Hou
        </StyledLink>
        &nbsp;| Product Architect
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://www.figma.com/file/QJMj6PBfmICHpQqPSEwznr/Portfolio-of-Velika?node-id=2052%3A59&t=QeWFdrAfB6hcukGp-1"
          rel="noreferrer"
        >
          Haifang Li
        </StyledLink>
        &nbsp;| Director UI/UX
      </StyledContent>
      <StyledContent>
        <StyledLink
          target="_blank"
          href="https://github.com/Svaney-ssman"
          rel="noreferrer"
        >
          Shiwen Shen
        </StyledLink>
        &nbsp;| UX Designer
      </StyledContent>
      <StyledContent>
        <StyledLink target="_blank" href="https://xell.me" rel="noreferrer">
          Guozhu Liu
        </StyledLink>
        &nbsp;| Head of Product Design
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
