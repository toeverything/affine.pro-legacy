import styled from "@emotion/styled";

import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

type LiveDemoLink = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
};

const PopperComponent = (props: LiveDemoLink) => {
  const { open, anchorEl, handleClose, handleOpen } = props;
  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-start" transition>
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
              <MenuItem onClick={handleClose}>
                <StyledLink
                  href="https://livedemo.affine.pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AFFINE Pre-Alpha
                </StyledLink>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ cursor: "auto" }}>
                <div>
                  <StyledLink
                    href="https://pathfinder.affine.pro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AFFINE Alpha
                    <StyledBadge>New</StyledBadge>
                  </StyledLink>

                  <StyledSubLink
                    href="https://affine.pro/content/blog/affine-alpha-is-coming/index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Why a new Version?
                  </StyledSubLink>
                </div>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grow>
      )}
    </Popper>
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
