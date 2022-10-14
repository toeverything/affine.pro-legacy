import styled from "@emotion/styled";
const Title = () => {
  return (
    <>
      <StyledMain>
        <StyledTitle>To Shape, not to adapt.</StyledTitle>
        <StyledDes>
          Deliver Building Blocks for Future SaaS Applications.
        </StyledDes>
      </StyledMain>
    </>
  );
};

export default Title;

const StyledMain = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "96px",
  fontWeight: "bold",
  textAlign: "center",
});
const StyledTitle = styled.div`
  font-size: 64px;
  font-weight: 900;
  margin-right: 8px;
  @media (max-width: 1000px) {
    font-size: 56px;
  }
  @media (max-width: 800px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;
const StyledDes = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin: 24px auto;
  color: #888;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
