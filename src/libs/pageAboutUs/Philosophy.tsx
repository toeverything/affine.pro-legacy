import styled from "styled-components";
const Philosophy = () => {
  return (
    <>
      <StyledPhilosophy>
        <StyledTitle>The Philosophy of AFFiNE</StyledTitle>
        <StyledContent>
          People need better building blocks for future applications. And it
          should not be so hard to develop collaborative, transferable, smart
          spreadsheets or block editors.
        </StyledContent>
        <StyledContent>
          Timothy Berners-Lee once taught us about the idea of the semantic web,
          where all the data can be interpreted in any form while the
          &quot;truth&quot; is kept. This gives our best image of an ideal
          knowledge base by far, that sorting of information, planning of
          project and goals as well as creating of knowledge can be all
          together.
        </StyledContent>
        <StyledContent>
          We have witnessed waves of paradigm shift so many times. At first,
          everything was noted on office-like apps or DSL like LaTeX, then we
          found todo-list apps and WYSIWYG markdown editors better for writing
          and planning.
        </StyledContent>
        <StyledContent>
          Finally, here comes Notion and Miro, who take advantage of the idea of
          blocks to further liberate our creativity. It is all perfect...
          without waste operations and redundant information. And, we insist
          that privacy first should always be given by default. That&apos;s why
          we are making AFFiNE.
        </StyledContent>
      </StyledPhilosophy>
    </>
  );
};

export default Philosophy;
const StyledPhilosophy = styled.div({
  marginTop: "24px",
});
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
