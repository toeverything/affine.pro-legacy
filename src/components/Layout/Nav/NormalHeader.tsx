import VersionLink from "@/libs/common/VersionLink";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { LinkText } from "../LinkText";
import {
  useCommunityNavLink,
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
  const communityLink = useCommunityNavLink();
  const liveDemoLink = useLiveDemoNavLink();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const anchorElRef = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const hoverCloseDelay = 200;
  const timeoutID = useRef<number | undefined>();
  const handleClose = () => {
    timeoutID.current = window.setTimeout(() => {
      setAnchorEl(null);
    }, hoverCloseDelay);
  };

  const handleOpen = () => {
    window.clearTimeout(timeoutID.current);
    setAnchorEl(anchorElRef.current);
  };

  return (
    <>
      <StyledContainer>
        {communityLink.map((nav) => {
          return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
        })}
        <VersionLink>
          {liveDemoLink.map((nav) => {
            return (
              <LinkText key={nav.title} href={nav.href} title={nav.title} />
            );
          })}
        </VersionLink>
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
