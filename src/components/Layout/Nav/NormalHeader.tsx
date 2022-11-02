import LiveDemoLink from "@/libs/pagesHome/LiveDemoLink";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { LinkText } from "../LinkText";
import { useFeedbackLink, useLeftNavLink, useLiveDemoLink } from "./config";
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
  const feedbackLink = useFeedbackLink();
  const liveDemoLink = useLiveDemoLink();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const anchorElRef = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const isHover = useRef(false);
  const handleClose = () => {
    isHover.current = false;
    setTimeout(() => {
      if (!isHover.current) {
        setAnchorEl(null);
      }
    }, 50);
  };
  const handleOpen = () => {
    isHover.current = true;
    setAnchorEl(anchorElRef.current);
  };

  return (
    <>
      <StyledContainer>
        {feedbackLink.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
        {liveDemoLink.map((nav) => {
          return (
            <div
              key={nav.title}
              ref={anchorElRef}
              onMouseOver={handleOpen}
              onMouseLeave={handleClose}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <LinkText href={nav.href} title={nav.title} />
            </div>
          );
        })}
        <LiveDemoLink
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
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
