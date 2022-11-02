import styled from "@emotion/styled";
import makeStyles from "@material-ui/styles/makeStyles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});

type LiveDemoLink = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
};

const LiveDemoLink = (props: LiveDemoLink) => {
  const { anchorEl, open, handleClose, handleOpen } = props;
  const styles = useStyles();
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          onMouseLeave: handleClose,
          onMouseEnter: handleOpen,
          style: { pointerEvents: "auto" },
        }}
        autoFocus={false}
        PopoverClasses={{
          root: styles.popOverRoot,
        }}
        disableScrollLock={true}
        style={{ zIndex: 2000 }}
      >
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
      </Menu>
    </>
  );
};

export default LiveDemoLink;

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
