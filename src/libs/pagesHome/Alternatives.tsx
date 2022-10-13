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
    <StyledTitle>
      <StyledScroll isActive={active}>
        <div>{current}</div>
      </StyledScroll>
      <StyledText>&emsp;{t("Alternative")}</StyledText>
    </StyledTitle>
  );
};

export default Alternatives;

const StyledTitle = styled.div`
  position: relative;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  color: #06449d;
  font-size: 96px;
  font-weight: 900;

  width: 100%;
  height: 128px;
  overflow-y: hidden;
  @media (max-width: 1300px) {
    font-size: 80px;
  }
  @media (max-width: 1100px) {
    font-size: 64px;
  }
  @media (max-width: 900px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
  height: 200px;
`;

interface TitleProps {
  isActive: boolean;
}

const StyledScroll = styled.div<TitleProps>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 128px;
  position: absolute;
  text-align: right;
  line-height: 96px;
  left: -72px;
  @media (max-width: 600px) {
    left: -60px;
  }
  @media (max-width: 500px) {
    position: absolute;
    top: 30px;
    left: unset;
    justify-content: center;
    text-align: center;
    height: 64px;
    line-height: 64px;
  }
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
  margin-left: 400px;
  @media (max-width: 1300px) {
    margin-left: 320px;
  }
  @media (max-width: 1100px) {
    margin-left: 220px;
  }
  @media (max-width: 900px) {
    margin-left: 120px;
  }
  @media (max-width: 600px) {
    margin-left: 100px;
  }
  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 50px;
    margin-top: 100px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
