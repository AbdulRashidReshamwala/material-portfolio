import React from "react";
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
} from "@material-ui/core";
import { KeyboardArrowUp, Brightness6Outlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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

export default function Navbar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color={props.darkState ? "dark" : "primary"}>
          <Toolbar>
            <Button
              variant="flat"
              color="secondary"
              startIcon={
                <span role="img" aria-label="robot">
                  🤖
                </span>
              }
            >
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Pacifico, cursive",
                  color: "white",
                }}
              >
                Abdul Rashid
              </Typography>
            </Button>
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={props.handleThemeChange}
            >
              <Brightness6Outlined style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="anchor" />
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          style={{ marginBottom: "3.5rem" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}
