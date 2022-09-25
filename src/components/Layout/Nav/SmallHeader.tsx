import NextImage from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { LinkText } from "../LinkText";
import { navLinks } from "./config";

import menuClose from "./menu-close.svg";
import menuHamburger from "./menu-hamburger.svg";

export const SmallHeader = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerStyle = {
    display: showDrawer ? "block" : "none",
  };
  return (
    <>
      <IconContainer onClick={() => setShowDrawer(!showDrawer)}>
        <NextImage src={showDrawer ? menuClose : menuHamburger} layout="fill" />
      </IconContainer>
      <HeaderDrawer style={drawerStyle} onClick={() => setShowDrawer(false)}>
        <List>
          {navLinks.map((nav) => {
            return (
              <ListItem key={nav.title}>
                <LinkText href={nav.href} title={nav.title} />
              </ListItem>
            );
          })}
        </List>
      </HeaderDrawer>
    </>
  );
};

const IconContainer = styled.div({
  position: "relative",
  width: "24px",
  height: "24px",
});

const HeaderDrawer = styled.div({
  position: "fixed",
  top: "73px",
  left: 0,
  width: "100%",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.1)",
  zIndex: 100,
});

const List = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "70vh",
  backgroundColor: "#fff",
  padding: "20px 0",
});

const ListItem = styled.div({
  height: "44px",
  boxSizing: "border-box",
  padding: "10px 14px 10px 30px",
  cursor: "pointer",
});
