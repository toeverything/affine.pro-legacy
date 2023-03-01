import styled from "@emotion/styled";
import Badge from "@mui/material/Badge";

import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { useEffect, useRef, useState } from "react";

type PopperComponent = {
  children: React.ReactNode;
};

const PopperComponent = (props: PopperComponent) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const anchorElRef = useRef<HTMLDivElement>(null);
  const [invisible, setInvisible] = useState(false);
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

  const setLocalStorageState = (state: string) => {
    if (typeof window !== "undefined")
      localStorage.setItem("Questionnaire_clicked", state);
  };

  const getLocalStorageState = () => {
    if (typeof window !== "undefined")
      return localStorage.getItem("Questionnaire_clicked");
  };
  useEffect(() => {
    if (getLocalStorageState() === "true") {
      setInvisible(true);
    }
  }, []);
  return (
    <>
      <div
        ref={anchorElRef}
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {props.children}
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        style={{ zIndex: 2000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <MenuList onMouseLeave={handleClose} onMouseEnter={handleOpen}>
                <MenuItem onClick={handleClose} sx={{ cursor: "auto" }}>
                  <div>
                    <StyledLink
                      href="https://app.affine.pro/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AFFiNE Alpha - Downhills
                      <StyledBadge>New</StyledBadge>
                    </StyledLink>
                  </div>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <StyledLink
                    href="https://livedemo.affine.pro/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      width: "100%",
                    }}
                  >
                    AFFiNE Pre-Alpha
                  </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <StyledLink
                    href="https://6dxre9ihosp.typeform.com/to/AL0uvvCw"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      width: "100%",
                    }}
                    onClick={() => {
                      setInvisible(true);
                      setLocalStorageState("true");
                    }}
                  >
                    <Badge color="error" variant="dot" invisible={invisible}>
                      AFFiNE User Survey
                    </Badge>
                  </StyledLink>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default PopperComponent;

const StyledBadge = styled.div({
  backgroundColor: "#ff1744",
  color: "#fff",
  transform: "translate(0,-50%)",
  fontSize: "10px",
  padding: "0 4px",
  height: "16px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px 4px 4px 0",
});
const StyledLink = styled.a({
  color: "#000",
  fontSize: "18px",
  fontWeight: "bold",
  ".MuiBadge-badge": {
    transform: "translate(200%,0)",
  },
});
const StyledSubLink = styled.a({
  color: "#096bde",
  fontSize: "14px",
  marginLeft: "15px",
});
