import { LOCALES } from "@/i18n/resources/index";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import NextImage from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LinkText } from "../LinkText";
import { navLinks } from "./config";
import menuClose from "./menu-close.svg";
import menuHamburger from "./menu-hamburger.svg";

export const SmallHeader = () => {
  const { i18n, t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [languageCollapse, setLanguageCollapse] = useState(false);
  const drawerStyle = {
    display: showDrawer ? "block" : "none",
  };
  const changeLanguage = (event: string) => {
    i18n.changeLanguage(event);
  };
  return (
    <>
      <StyledIconContainer onClick={() => setShowDrawer(!showDrawer)}>
        <NextImage src={showDrawer ? menuClose : menuHamburger} layout="fill" />
      </StyledIconContainer>
      <StyledHeaderDrawer
        style={drawerStyle}
        onClick={() => {
          console.log("dot");

          setShowDrawer(false);
        }}
      >
        <StyledList>
          {navLinks.map((nav) => {
            return (
              <StyledListItem key={nav.title}>
                <LinkText href={nav.href} title={t(nav.title)} />
              </StyledListItem>
            );
          })}
          <ListItemButton
            onClick={(evt) => {
              setLanguageCollapse(!languageCollapse);
              evt.stopPropagation();
            }}
          >
            <ListItemText
              primary={t("language")}
              style={{ paddingLeft: "14px" }}
            />
            {languageCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={languageCollapse} timeout="auto">
            {LOCALES.map((locale) => {
              return (
                <ListItemButton
                  key={locale.name}
                  onClick={() => changeLanguage(locale.tag)}
                >
                  <ListItemText primary={locale.originalName} />
                  <Checkbox
                    checked={i18n.language == locale.tag ? true : false}
                  />
                </ListItemButton>
              );
            })}
          </Collapse>
        </StyledList>
      </StyledHeaderDrawer>
    </>
  );
};

const StyledIconContainer = styled.div({
  position: "relative",
  width: "24px",
  height: "24px",
});

const StyledHeaderDrawer = styled.div({
  position: "fixed",
  top: "73px",
  left: 0,
  width: "100%",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.1)",
  zIndex: 100,
});

const StyledList = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "70vh",
  backgroundColor: "#fff",
  padding: "20px 0",
});

const StyledListItem = styled.div({
  height: "44px",
  boxSizing: "border-box",
  padding: "10px 14px 10px 30px",
  cursor: "pointer",
});
