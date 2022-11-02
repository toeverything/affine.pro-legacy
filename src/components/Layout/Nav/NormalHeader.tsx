import Popper from "@/libs/common/Popper";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
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
  const feedbackLink = useFeedbackNavLink();
  const liveDemoLink = useLiveDemoNavLink();
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
        <div
          ref={anchorElRef}
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {liveDemoLink.map((nav) => {
            return (
              <LinkText key={nav.title} href={nav.href} title={nav.title} />
            );
          })}
        </div>
        <Popper
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
