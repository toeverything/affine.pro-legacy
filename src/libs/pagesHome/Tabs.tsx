import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ShapeImage from "./images/shape.png";
import TaskImage from "./images/task.png";
const HomepageTabs = () => {
  const [tab1, selectTab1] = useState(1);
  const [tab2, selectTab2] = useState(0);
  const { t } = useTranslation();
  return (
    <StyledTabsPaper>
      <div>
        <StyledTabsUl>
          <StyledTabs
            active={tab1}
            onClick={() => {
              selectTab1(1);
              selectTab2(0);
            }}
          >
            {t("description2.part1")}
          </StyledTabs>
          <StyledTabs
            active={tab2}
            onClick={() => {
              selectTab1(0);
              selectTab2(1);
            }}
          >
            {t("description3.part1")}
          </StyledTabs>
        </StyledTabsUl>
      </div>
      <StyledSlides active={tab1}>
        <StyledText>
          <StyledH2>{t("description2.part1")}</StyledH2>
          <StyledP>{t("description2.part2")}</StyledP>
          <StyledP>{t("description2.part3")}</StyledP>
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
          <StyledH2>{t("description3.part1")}</StyledH2>
          <StyledP>{t("description3.part2")}</StyledP>
          <StyledP>{t("description3.part3")}</StyledP>
          <StyledP>{t("description3.part4")}</StyledP>
        </StyledText>
      </StyledSlides>
    </StyledTabsPaper>
  );
};

export default HomepageTabs;

// const StyledTabsPaper = styled.div({
//   position: "relative",
//   height: "700px",
//   textAlign: "center",
//   margin: "auto",
//   padding: "10px",

// });
const StyledTabsPaper = styled.div`
  position: relative;
  height: 650px;
  text-align: center;
  margin: auto;
  padding: 10px;
  @media (max-width: 1100px) {
    height: 550px;
  }
  @media (max-width: 1000px) {
    height: 900px;
  }
  @media (max-width: 600px) {
    height: 700px;
  }
`;
const StyledTabsUl = styled.ul({
  margin: "0",
  padding: "0",
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
  z-index: 100;

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
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  margin: 0 50px;
  flex: 1.5;
  text-align: left;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    margin: 36px auto;
  }
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
  flex: 1;
  justify-content: center;
  margin: 36px;
  transition: all 0.5s;
  transform: scale(0.98);
  box-shadow: 2px 2px 40px #0002;
  @media (max-width: 1000px) {
    margin: 36px auto;
  }
  &:hover {
    transform: scale(1);
    box-shadow: 2px 2px 40px #0004;
  }

  display: flex;
  width: 100%;
  flex: 2.5;
  z-index: ${(props) => (props.active === 0 ? "0" : "1000")};
`;
