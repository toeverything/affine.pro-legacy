import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const _alternatives = ["Notion", "Miro", "Monday"];
const Alternatives = () => {
  const [idx, setIdx] = useState(0);
  const [current] = useMemo(
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
        <StyledScroll isActive={active}>
          <div>{current}</div>
        </StyledScroll>
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
  height: 250px;
  @media (max-width: 1300px) {
    font-size: 80px;
  }
  @media (max-width: 1100px) {
    font-size: 64px;
  }
  @media (max-width: 900px) {
    font-size: 48px;
    height: 200px;
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
  height: 150px;
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

const StyledScroll = styled.div<TitleProps>`
  display: flex;
  position: absolute;
  line-height: 96px;
  transition: 0.5s ease-in;
  animation: ${(props: { isActive: boolean }) =>
    props.isActive ? "primary 400ms linear infinite" : "none"};
  @keyframes primary {
    from {
      top: 0%;
    }
    to {
      top: -100%;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  flex: 1.3;
  text-align: center;
  align-items: center;
`;
