import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
const _alternatives = ["Notion", "Miro", "Monday"];
const Alternatives = () => {
  const [idx, setIdx] = useState(0);
  const [last, current] = useMemo(
    () => [
      _alternatives[idx],
      _alternatives[idx + 1] ? _alternatives[idx + 1] : _alternatives[0],
    ],
    [idx]
  );
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handle = setInterval(() => {
      setActive(true);
      setTimeout(() => {
        setIdx((idx) => (_alternatives[idx + 1] ? idx + 1 : 0));
        setActive(false);
      }, 380);
    }, 2000);
    return () => clearInterval(handle);
  }, []);
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledTitle>
        <StyledLastScroll isActive={active}>
          <div>{last}</div>
        </StyledLastScroll>
        <StyledCurrentScroll isActive={active}>
          <div>{current}</div>
        </StyledCurrentScroll>
      </StyledTitle>
      <StyledText>{t("Alternative")}</StyledText>
    </StyledContainer>
  );
};

export default Alternatives;
const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #06449d;
  font-size: 96px;
  font-weight: 900;
  height: 200px;
  @media (max-width: 1300px) {
    font-size: 80px;
  }
  @media (max-width: 1100px) {
    font-size: 64px;
    height: 180px;
  }
  @media (max-width: 900px) {
    font-size: 48px;
    height: 130px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
    height: 150px;
    flex-direction: column;
  }
`;

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
  overflow-y: hidden;
  height: 100%;
  padding-right: 16px;
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 0px;
    justify-content: center;
  }
`;

interface TitleProps {
  isActive: boolean;
}
const StyledLastScroll = styled.div<TitleProps>`
  display: flex;
  position: absolute;
  line-height: 96px;
  transition: 0.5s ease-in-out;
  opacity: 1;

  animation: ${(props: { isActive: boolean }) =>
    props.isActive ? "primaryLast 500ms linear infinite" : "none"};
  @keyframes primaryLast {
    0% {
      top: 25%;
      opacity: 1;
    }
    20% {
      top: 0%;
      opacity: 0.8;
    }
    40% {
      top: -20%;
      opacity: 0.6;
    }
    60% {
      top: -40%;
      opacity: 0.4;
    }
    80% {
      top: -60%;
      opacity: 0.2;
    }
    100% {
      top: -100%;
      opacity: 0;
    }
  }
`;
const StyledCurrentScroll = styled.div<TitleProps>`
  display: flex;
  position: absolute;
  line-height: 96px;
  margin-top: 210px;
  transition: 0.5s ease-in-out;
  opacity: 0;
  animation: ${(props: { isActive: boolean }) =>
    props.isActive ? "primaryCurrent 500ms linear infinite" : "none"};
  @media (max-width: 1100px) {
    margin-top: 192px;
  }
  @media (max-width: 900px) {
    margin-top: 120px;
  }
  @media (max-width: 600px) {
    margin-top: 36px;
  }
  @keyframes primaryCurrent {
    from {
      top: 0%;
      opacity: 0;
    }
    to {
      top: -100%;
      opacity: 1;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  flex: 1.3;
  text-align: center;
  align-items: center;
`;
