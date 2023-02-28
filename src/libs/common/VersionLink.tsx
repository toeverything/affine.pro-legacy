import styled from "@emotion/styled";

import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { useRef, useState } from "react";

type PopperComponent = {
  children: React.ReactNode;
};

const PopperComponent = (props: PopperComponent) => {
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
                      AFFINE Alpha - Downhills
                      <StyledBadge>New</StyledBadge>
                    </StyledLink>
<!--
                    <StyledSubLink
                      href="https://affine.pro/content/blog/moving-to-app-affine-pro/index"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Why a new version?
                    </StyledSubLink>
-->
                  </div>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <StyledLink
                    href="https://livedemo.affine.pro/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "14px", fontWeight: "normal" }}
                  >
                    AFFINE Pre-Alpha
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
});
const StyledSubLink = styled.a({
  color: "#096bde",
  fontSize: "14px",
  marginLeft: "15px",
});
