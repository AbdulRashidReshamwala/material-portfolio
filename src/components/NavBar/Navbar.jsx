import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Switch,
  Zoom,
  Fab,
  makeStyles,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
    disableHysteresis: false,
    threshold: 10,
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
        <AppBar>
          <Toolbar>
            <Typography variant="h6"> Abdul Rashid</Typography>
            <Switch
              checked={props.darkState}
              onChange={props.handleThemeChange}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
