import { LOCALES } from "@/i18n/resources/index";
import styled from "@emotion/styled";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExportedImage from "../../Image";
import { LinkText } from "../LinkText";
import { useNavLink } from "./config";
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
  const navLinks = useNavLink();
  return (
    <>
      <StyledIconContainer onClick={() => setShowDrawer(!showDrawer)}>
        <ExportedImage
          src={showDrawer ? menuClose : menuHamburger}
          layout="fill"
          useWebp={!!process.env.nextImageExportOptimizer_storePicturesInWEBP}
        />
      </StyledIconContainer>
      <StyledHeaderDrawer
        style={drawerStyle}
        onClick={() => {
          setShowDrawer(false);
        }}
      >
        <StyledList>
          {navLinks.map((nav) => {
            return (
              <StyledListItem key={nav.title} href={nav.href}>
                <LinkText href={nav.href} title={nav.title} />
              </StyledListItem>
            );
          })}
          <ListItemButton
            onClick={(evt) => {
              setLanguageCollapse(!languageCollapse);
              evt.stopPropagation();
            }}
            style={{ padding: "6px 8px" }}
          >
            <ListItemText>
              <StyledText>{t("language")}</StyledText>
            </ListItemText>
            {languageCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={languageCollapse} timeout="auto">
            <StyledLangList>
              {LOCALES.map((locale) => {
                return (
                  <ListItemButton
                    key={locale.name}
                    onClick={() => changeLanguage(locale.tag)}
                  >
                    <StyledLangListLeftContainer>
                      <div>{locale.originalName}</div>
                    </StyledLangListLeftContainer>
                    <StyledLangListRightContainer>
                      <Checkbox
                        checked={i18n.language == locale.tag ? true : false}
                      />
                    </StyledLangListRightContainer>
                  </ListItemButton>
                );
              })}
            </StyledLangList>
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

const StyledListItem = styled(NextLink)({
  height: "44px",
  boxSizing: "border-box",
  padding: "10px 14px 10px 30px",
  cursor: "pointer",
});
const StyledLangList = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "0",
  paddingLeft: "16px",
  borderTop: "1px #cfcccc solid",
});
const StyledText = styled.div({
  fontWeight: "500",
});
const StyledLangListLeftContainer = styled.div({
  fontWeight: "500",
  width: "100%",
});
const StyledLangListRightContainer = styled.div({
  fontWeight: "500",
  width: "100%",
  textAlign: "end",
});
