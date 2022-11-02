import styled from "@emotion/styled";
import { LinkText } from "../LinkText";
import {
  useFeedbackNavLink,
  useLeftNavLink,
  useLiveDemoNavLink,
} from "./config";
import { LanguageMenu } from "./LanguageMenu";

export const NormalLeftHeader = () => {
  const navLinks = useLeftNavLink();
  return (
    <>
      <StyledContainer>
        {navLinks.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
      </StyledContainer>
    </>
  );
};
export const NormalRightHeader = () => {
  const feedBackLink = useFeedbackNavLink();
  const liveDemoLink = useLiveDemoNavLink();
  return (
    <>
      <StyledContainer>
        {feedBackLink.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
        <div>
          {liveDemoLink.map((nav) => {
            return (
              <LinkText key={nav.title} href={nav.href} title={nav.title} />
            );
          })}
        </div>
        <LanguageMenu />
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
});
