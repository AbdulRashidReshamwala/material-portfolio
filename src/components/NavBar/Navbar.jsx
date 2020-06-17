import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Zoom,
  Fab,
  makeStyles,
  IconButton,
  Button,
  Tooltip,
} from "@material-ui/core";
import {
  KeyboardArrowUp,
  Brightness6Outlined,
  Description,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    postion: "fixed",
    zIndex: "2147483647",
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop({ children }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function Navbar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color={props.darkState ? "dark" : "primary"}>
          <Toolbar>
            <Button onClick={() => props.history.push("/")}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Comfortaa, cursive",
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                {"🚀 <Abdul/>"}
              </Typography>
            </Button>
            <Tooltip title="View Resume">
              <IconButton
                style={{ marginLeft: "auto" }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rohIFJ91_qd1fvIJ-o_DzuhInp64NVnv/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Description style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Toggle Dark Mode">
              <IconButton onClick={props.handleThemeChange}>
                <Brightness6Outlined style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="anchor" />
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          style={{
            marginBottom: "3.5rem",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default withRouter(Navbar);
