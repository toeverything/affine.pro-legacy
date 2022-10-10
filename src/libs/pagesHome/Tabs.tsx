import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ShapeImage from "./images/shape.png";
import TaskImage from "./images/task.png";

const HomepageTabs = () => {
  const [tab1, selectTab1] = useState(1);
  const [tab2, selectTab2] = useState(0);
  return (
    <StyledTabsPaper>
      <div>
        <ul>
          <StyledTabs
            active={tab1}
            onClick={() => {
              selectTab1(1);
              selectTab2(0);
            }}
          >
            Shape Your Page
          </StyledTabs>
          <StyledTabs
            active={tab2}
            onClick={() => {
              selectTab1(0);
              selectTab2(1);
            }}
          >
            Plan Your Task
          </StyledTabs>
        </ul>
      </div>
      <StyledSlides active={tab1}>
        <StyledText>
          <StyledH2>Shape Your Page</StyledH2>
          <StyledP>
            Docs, Kanbans, and Databases are all fully functional anywhere,
            anytime. A truly what-you-see-is-what-you-get environment for your
            data.
          </StyledP>
          <StyledP>
            All pages come with a document (Paper Mode) and whiteboard (Edgeless
            Mode) view.
          </StyledP>
        </StyledText>
        <StyledImage active={tab1}>
          <div>
            <Image src={ShapeImage} alt="AFFiNE Shape Your Page" />
          </div>
        </StyledImage>
      </StyledSlides>
      <StyledSlides active={tab2}>
        <StyledImage active={tab2}>
          <div>
            <Image src={TaskImage} alt="AFFiNE Plan Your Task" />
          </div>
        </StyledImage>
        <StyledText>
          <StyledH2>Plan Your Task</StyledH2>
          <StyledP>No more chaos managing multiple views.</StyledP>
          <StyledP>
            Set a TODO with Markdown, and seamlessly edit it within a Kanban.
          </StyledP>
          <StyledP>
            Managing multi-dimensional tables should be this simple - and now it
            is.
          </StyledP>
        </StyledText>
      </StyledSlides>
    </StyledTabsPaper>
  );
};

export default HomepageTabs;

const StyledTabsPaper = styled.div({
  position: "relative",
  height: "800px",
  textAlign: "center",
  margin: "96px auto",
  padding: "10px",
});

const StyledTabs = styled.li<{ active?: number }>`
  display: inline-flex;

  align-items: center;

  justify-content: center;
  box-sizing: border-box;

  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  border-radius: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  max-width: 360px;
  min-width: 90px;
  position: relative;
  min-height: 48px;
  flex-shrink: 0;
  padding: 12px 16px;
  overflow: hidden;
  white-space: normal;
  text-align: center;
  flex-direction: column;

  color: ${(props) => (props.active === 0 ? "#000" : "#1976d2")};
  &::after {
    content: "";
    width: ${(props) => (props.active === 0 ? "0" : "100%")};
    height: 2px;
    background-color: #1976d2;
    position: absolute;
    left: ${(props) => (props.active === 0 ? "100%" : "0")};
    bottom: 0;
    transition: all 0.4s;
  }

  &:hover {
    color: #1976d2;
    &::after {
      width: 100%;
      left: 0;
      transition-delay: 0.1s;
    }
    & ~ li::after {
      left: 0;
    }
  }
`;
const StyledSlides = styled.div<{ active?: number }>`
  flex-grow: 0;
  flex-basis: auto;
  min-width: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-bottom: 48px;
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  transition: ${(props) =>
    props.active === 0 ? "all 0.2s ease" : "all 0.5s ease-in"};
  opacity: ${(props) => (props.active === 0 ? "0" : "1")};
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  flex: 1;
  text-align: left;
`;
const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 1.25;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 16px;
`;
const StyledP = styled.p`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
`;
const StyledImage = styled.div<{ active?: number }>`
  max-width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: center;
  margin: 36px;
  transition: all 0.5s;
  transform: scale(0.98);
  box-shadow: 2px 2px 40px #0002;
  &:hover {
    transform: scale(1);
    box-shadow: 2px 2px 40px #0004;
  }

  display: flex;
  width: 100%;
  flex: 2.5;
  z-index: ${(props) => (props.active === 0 ? "0" : "1000")};
`;