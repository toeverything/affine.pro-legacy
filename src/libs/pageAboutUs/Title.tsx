import styled from "styled-components";
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
const StyledTitle = styled.div({
  fontSize: "64px",
  fontWeight: "900",
  marginRight: "8px",
});
const StyledDes = styled.div({
  fontSize: "24px",
  fontWeight: "400",
  margin: "24px auto",
  color: "#888",
});
